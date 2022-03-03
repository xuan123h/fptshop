import React, { useState, useEffect } from "react";
import {
  FaSearch,
  FaBook,
  FaLightbulb,
  FaFaucet,
  FaShoppingCart,
  // FaUser,
  FaRegistered,
  FaEye,
  FaFacebook,
  FaGoogle,
} from "react-icons/fa";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    // width: 250,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

// react-hook-form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchList from "./SearchList";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  color: "primary",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
// use react-hook-form
const SignupSchema = yup.object().shape({
  mobilephone: yup
    .string()
    .required("Please enter your mobilephone")
    .max(15, "Must be 15 characters or less"),
  // age: yup.number().required().positive().integer(),
  password: yup
    .string()
    .required("Please enter your password")
    .max(20, "Must be 20 characters or less"),
  date: yup.string().required("Please choose date"),
  datetwo: yup.string().required("Please choose datetwo"),
  year: yup.string().required("Please choose year"),
  username: yup.string().required("Please enter your username"),
  checkbox: yup.boolean(),
});
const Header = () => {
  // use react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // cart
  const state = useSelector((state) => state.handleCart);

  // search
  const [data, setData] = useState([]);
  const [product, setProduct] = useState(data);
  const [loading, setLoading] = useState(false);
  let ComponentMounted = true;

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(
        "https://61dba40d4593510017aff960.mockapi.io/product"
      );
      if (ComponentMounted) {
        setData(await response.clone().json());
        setProduct(await response.json());
        setLoading(false);
      }
      return () => {
        ComponentMounted = false;
      };
    };
    getProduct();
  }, []);
  const Loading = () => {
    return <div className="absolute ml-[450px]"></div>;
  };
  const ShowProduct = () => {
    return (
      <>
        <ul className="text-red-600 absolute z-50 w-[620px] h-[1000px] top-[40px] flex items-center flex-wrap border border-white bg-white shadow-slate-400">
          {product
            .filter((val) => {
              if (searchProduct == "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchProduct.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val, key) => (
              <li key={key} className="w-[100px] ml-[120px]">
                <SearchList val={val} />
              </li>
            ))}
        </ul>

        <button className="absolute ml-[550px] font-bold  mt-[1999px] z-50 ">
          {" "}
          Close{" "}
        </button>
      </>
    );
  };
  const [searchProduct, setSearchProduct] = useState("");
  return (
    <>
      <div>
        <div>
          <div className="relative h-[56px] text-[#212529] bg-[#CD1818] p-2 w-[1904px]">
            <div className="max-w-[151px] max-h-[40px] ml-[310px] ">
              <Link to="/">
                <img
                  src="http://fptshop.com.vn/Content/RecurringV3/images/logo-mb.png"
                  alt=""
                  className="w-full h-full object-cover "
                />
              </Link>
            </div>
            <div className="absolute top-2 left-[550px] bg-[#FFFFFF] flex items-center justify-between">
              <input
                type="text"
                placeholder="Nhập tên điện thoại, máy tính, phụ kiện... cần tìm "
                className="pl-4 w-[540px] h-[38px] border-none rounded-sm outline-none font-bold"
                onClick={loading ? <Loading /> : <ShowProduct />}
                onChange={(event) => {
                  setSearchProduct(event.target.value);
                }}
              />
              {/* {loading ? <Loading /> : <ShowProduct />} */}

              <li className="list-none translate-x-6 w-[58px] h-[38px] border border-black bg-black text-white flex items-center justify-center cursor-pointer">
                {" "}
                <FaSearch />{" "}
              </li>
            </div>
            <div className="absolute top-2 left-[1230px] list-none text-white">
              <li className="w-6 h-6 ml-7">
                {" "}
                <FaBook />{" "}
              </li>

              <HtmlTooltip
                title={
                  <React.Fragment>
                    <div className="list-none text-center text-[16px] w-[250px] bg-white">
                      <li> Tin mới</li>
                      <li> Khuyến mãi </li>
                      <li> Thủ thuật </li>
                      <li> For Gamers </li>
                      <li> Video hot </li>
                      <li> Đánh giá - tư vấn </li>
                      <li> App & Game </li>
                      <li> Sự kiện </li>
                    </div>
                  </React.Fragment>
                }
              >
                <li className="cursor-pointer">
                  <Typography fonnSize="8" color="inherit">
                    Thông tin hay
                  </Typography>
                </li>
              </HtmlTooltip>
            </div>
            <div className="absolute top-2 left-[1350px] list-none ">
              <div className="flex items-center">
                <li className="w-6 h-6 border border-white bg-white flex items-center justify-center border-r-indigo-400 ml-8">
                  {" "}
                  <FaLightbulb />{" "}
                </li>
                <li className="w-6 h-6 border border-white bg-white flex items-center justify-center">
                  {" "}
                  <FaFaucet />{" "}
                </li>
              </div>
              <div className="">
                <li className="text-sm w-[132px] text-white mt-[1px] cursor-pointer">
                  {" "}
                  Thu hộ điện , nước{" "}
                </li>
              </div>
            </div>
            <div className="absolute top-2 left-[1499px] list-none text-white ml-[15px]">
              <li className="w-6 h-6 ml-4">
                {" "}
                <FaShoppingCart />{" "}
              </li>
              <li className="text-sm mt-[1px]">
                {" "}
                <Link to="/cart"> Giỏ hàng : </Link>
                {state.length}
              </li>
            </div>
            <div className="absolute top-1 left-[1499px] list-none text-white ml-[110px]">
              <li className="w-6 h-6 ml-4 absolute mt-[4px]">
                {" "}
                <FaRegistered />{" "}
              </li>
              <Button onClick={handleOpen} color="inherit">
                <Typography fontSize={12} absolute marginTop={3.2}>
                  Đăng ký
                </Typography>
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
              >
                <Box sx={{ ...style, width: 1100, height: 750 }}>
                  <h2
                    id="parent-modal-title"
                    className="text-center text-[30px] text-gray-600 font-bold"
                  >
                    {" "}
                    Tạo tài khoản FPTShop{" "}
                  </h2>
                  <form
                    className="flex items-center list-none mt-[60px] ml-[60px]"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div>
                      <div>
                        <label
                          htmlFor="mobilephone"
                          className="w-[380px] h-[15px] text-[#424242] text-[20px]"
                        >
                          Số điện thoại <br />
                        </label>
                        <input
                          type="text"
                          id="mobilephone"
                          placeholder="Nhập số điện thoại của bạn"
                          className="w-[380px] h-[50px] bg-[#FFFFFF] mt-[15px] outline-none border border-green-500 pl-3"
                          {...register("mobilephone")}
                        />
                        {errors.mobilephone && (
                          <p className="absolute">
                            {errors.mobilephone.message}
                          </p>
                        )}
                      </div>
                      <div className="mt-[23px]">
                        <label
                          htmlFor="password"
                          className="w-[380px] h-[15px] text-[#424242] text-[20px]"
                        >
                          {" "}
                          Mật khẩu* <br />
                        </label>
                        <input
                          type="password"
                          placeholder="Tối thiểu 6 kí tự gồm cả chữ và số"
                          className="w-[380px] h-[50px] bg-[#FFFFFF] outline-none border border-green-500 pl-3 mt-[20px] pt-2"
                          {...register("password")}
                        />
                        {errors.password && <p>{errors.password.message}</p>}
                        <li className="absolute top-[307px] left-[440px] cursor-pointer">
                          {" "}
                          <FaEye />{" "}
                        </li>
                      </div>
                      <div className="mt-[40px]">
                        <label
                          htmlFor="date"
                          className="w-[380px] h-[15px] text-[#000000] text-[20px]"
                        >
                          {" "}
                          Ngày sinh <br />
                        </label>
                        <div className="flex items-center mt-[20px]">
                          <select
                            name="date"
                            id="date"
                            className="outline-none h-[40px] border border-gray-500"
                            {...register("date")}
                          >
                            <option value=""> Tháng </option>
                            <option value=""> Tháng Một </option>
                            <option value=""> Tháng Hai </option>
                            <option value=""> Tháng Ba </option>
                            <option value=""> Tháng Bốn </option>
                            <option value=""> Tháng Năm </option>
                            <option value=""> Tháng Sáu </option>
                            <option value=""> Tháng Bảy </option>
                            <option value=""> Tháng Tám </option>
                            <option value=""> Tháng Chín </option>
                            <option value=""> Tháng Mười </option>
                            <option value=""> Tháng Mười Một </option>
                            <option value=""> Tháng Mười Hai </option>
                          </select>
                          <div className="absolute mt-[80px]">
                            {errors.date && <p>{errors.date.message}</p>}
                          </div>
                          <select
                            name="datetwo"
                            id="datetwo"
                            className="outline-none h-[40px] border border-gray-500 ml-[22px]"
                            {...register("datetwo")}
                          >
                            <option value=""> Ngày</option>
                            <option value="">01 </option>
                            <option value="">02 </option>
                            <option value="">03 </option>
                            <option value="">04 </option>
                            <option value="">05 </option>
                            <option value="">06 </option>
                            <option value="">07 </option>
                            <option value="">08 </option>
                            <option value="">09 </option>
                            <option value="">10 </option>
                            <option value="">11 </option>
                            <option value="">12 </option>
                            <option value="">13 </option>
                            <option value="">14 </option>
                            <option value="">15 </option>
                            <option value="">16 </option>
                            <option value="">17 </option>
                            <option value="">18 </option>
                            <option value="">19 </option>
                            <option value="">20 </option>
                            <option value="">21 </option>
                            <option value="">22 </option>
                            <option value="">23 </option>
                            <option value="">24 </option>
                            <option value="">25 </option>
                            <option value="">26 </option>
                            <option value="">27 </option>
                            <option value="">28 </option>
                            <option value="">29 </option>
                            <option value="">30 </option>
                            <option value="">31 </option>
                          </select>
                          <div className="absolute mt-[110px] ml-[190px] w-[150px]">
                            {errors.datetwo && <p>{errors.datetwo.message}</p>}
                          </div>
                          <select
                            name="year"
                            id="year"
                            className="outline-none h-[40px] border border-gray-500 ml-[22px]"
                            {...register("year")}
                          >
                            <option value=""> Năm </option>
                            <option value=""> 1990 </option>
                            <option value=""> 1991 </option>
                            <option value=""> 1992 </option>
                            <option value=""> 1993 </option>
                            <option value=""> 1994 </option>
                            <option value=""> 1995 </option>
                            <option value=""> 1996 </option>
                            <option value=""> 1997 </option>
                            <option value=""> 1998 </option>
                            <option value=""> 1999 </option>
                            <option value=""> 2000 </option>
                            <option value=""> 2001 </option>
                            <option value=""> 2002 </option>
                            <option value=""> 2003 </option>
                            <option value=""> 2004 </option>
                            <option value=""> 2005 </option>
                            <option value=""> 2006 </option>
                            <option value=""> 2007 </option>
                            <option value=""> 2008 </option>
                          </select>
                          <div className="absolute mt-[110px] ml-[320px] w-[130px] ">
                            {errors.year && <p>{errors.year.message}</p>}
                          </div>
                        </div>
                      </div>
                      <div className="mt-[100px] text-[20px]">
                        <label htmlFor="sex"> Giới tính </label>
                        <div className="flex items-center mt-[18px]">
                          <div className="flex items-center">
                            <input type="checkbox" name="checkbox" id="" />
                            <li className="ml-[12px]"> Nam </li>
                          </div>
                          <div className="flex items-center ml-[20px]">
                            <input type="checkbox" name="checkbox" id="" />
                            <li className="ml-[12px]"> Nữ </li>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-[112px] left-[620px]">
                      <div className="mt-[8px]">
                        <label
                          htmlFor="username"
                          className="w-[305px] h-[15px] text-[#424242] text-[20px]"
                        >
                          {" "}
                          Họ tên* <br></br>
                        </label>
                        <input
                          type="text"
                          placeholder="Họ Tên"
                          className="w-[305px] h-[40px] bg-[#FFFFFF]"
                          className="w-[380px] h-[50px] bg-[#FFFFFF] outline-none border border-green-500 pl-3 mt-[14px] pt-0"
                          {...register("username")}
                        />
                        {errors.username && <p>{errors.username.message}</p>}
                      </div>
                      <div className="flex items-center mt-[30px]">
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className="w-[16px] h-[16px]"
                        />
                        <p className="w-[360px] h-[16px] text-[#757575] text-[12px] ml-[10px]">
                          {" "}
                          Tôi đòng ý với Điều Khoản Sử Dụng và Chính Sách Bảo
                          Mật của FPTShop{" "}
                        </p>
                      </div>
                      <button
                        className="w-[305px] h-[48px] text-[#FFFFFF] bg-[#F57224] mt-[30px] ml-[30px]"
                        type="submit"
                      >
                        {" "}
                        ĐĂNG KÍ{" "}
                      </button>
                      <div className="flex items-center mt-[40px] ml-[33px]">
                        <div className="w-[149px] h-[40px] text-[#FFFFFF] text-[18px] bg-[#3B5998] flex items-center ">
                          <li className="ml-[9px] text-[23px]">
                            {" "}
                            <FaFacebook />{" "}
                          </li>
                          <p className="ml-[20px] mt-[3px]"> Facebook </p>
                        </div>
                        <div className="w-[149px] h-[40px] text-[#FFFFFF] text-[18px] bg-[#D34836] flex items-center ml-[5px]">
                          <li className="ml-[19px] text-[23px]">
                            {" "}
                            <FaGoogle />{" "}
                          </li>
                          <p className="ml-[30px] mt-[3px]"> Google </p>
                        </div>
                      </div>
                      <div className="mt-[30px] ml-[30px] w-[320px]">
                        <li>
                          {" "}
                          Nếu bạn đã có tài khoản , đăng nhập tại đây :{" "}
                          <ChildModal />{" "}
                        </li>
                      </div>
                    </div>
                  </form>
                </Box>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen}> Đăng nhập </Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 1100, height: 750 }}>
          <h2
            id="child-modal-title"
            className="text-center text-[30px] text-gray-800 font-bold mt-[50px]"
          >
            {" "}
            Đăng nhập ngay!{" "}
          </h2>
          <div className="mt-[50px] list-none flex items-center ml-[110px]">
            <div>
              <div>
                <label
                  htmlFor="mobilephone"
                  className="w-[380px] h-[15px] text-[#424242] text-[20px]"
                >
                  {" "}
                  Số điện thoại hoặc email* <br />{" "}
                </label>
                <input
                  type="text"
                  placeholder="Vui lòng nhập số điện thoại h email của bạn"
                  className="w-[380px] h-[50px] bg-[#FFFFFF] mt-[15px] outline-none border border-green-500 pl-3"
                />
              </div>
              <div className="mt-[30px]">
                <label
                  htmlFor="password"
                  className="w-[380px] h-[15px] text-[#424242] text-[20px]"
                >
                  {" "}
                  Password <br />
                </label>
                <input
                  type="password"
                  placeholder="Vui lòng nhập mật khẩu của bạn"
                  className="w-[380px] h-[50px] bg-[#FFFFFF] outline-none border border-green-500 pl-3 mt-[20px] "
                />

                <li className="absolute top-[354px] ml-[340px] cursor-pointer">
                  {" "}
                  <FaEye />{" "}
                </li>
              </div>
              <p className="text-[17px] text-green-600 ml-[230px] mt-[10px]">
                {" "}
                Quên mật khẩu?{" "}
              </p>
            </div>
            <div>
              <button className="w-[305px] h-[48px] text-[#FFFFFF] bg-[#F57224] mt-[80px] ml-[120px] absolute top-[125px] ">
                {" "}
                ĐĂNG NHẬP{" "}
              </button>
              <p className="mt-[160px] ml-[175px]"> Hoặc đăng nhập bằng </p>
              <div className="flex items-center ml-[130px]">
                <div className="flex items-center w-[149px] h-[40px] text-[#FFFFFF] text-[18px] bg-[#3B5998] mt-[30px]">
                  <li className="ml-[9px] text-[23px]">
                    {" "}
                    <FaFacebook />{" "}
                  </li>
                  <p className="ml-[20px] mt-[3px]"> Facebook </p>
                </div>
                <div className="flex items-center w-[149px] h-[40px] text-[#FFFFFF] text-[18px] bg-[#D34836] ml-[5px] mt-[30px]">
                  <li className="ml-[19px] text-[23px]">
                    {" "}
                    <FaGoogle />{" "}
                  </li>
                  <p className="ml-[30px] mt-[3px]"> Google </p>
                </div>
              </div>
            </div>
          </div>
          <Button
            onClick={handleClose}
            className="absolute top-[270px] left-[980px] "
          >
            {" "}
            Đóng{" "}
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
export default Header;

// email: yup.string().required("Please enter your mobilephone or email"),
//   password2: yup
//     .string()
//     .required("Please enter your password")
//     .max(20, "Must be 20 characters or less "),
