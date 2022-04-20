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
import { useNavigate } from "react-router-dom";

import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

// Firebase
import { auth } from "../firebase/firebase-config";
import { signOut } from "firebase/auth";

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
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// firebase
import { useAuth } from "../contexts/auth-context";
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

// firebase - tách tên khi đăng nhập rồi
// function getLastName(name) {
//   if (!name) return "User";
//   const length = name.split("").length;
//   return name.split("")[length - 1];
// }
const Header = () => {
  // firebase
  const { userInfo } = useAuth();
  // use react-hook-form
  const navigate = useNavigate();
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
  let componentMounted = true;

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(
        "https://61dba40d4593510017aff960.mockapi.io/product"
      );
      if (componentMounted) {
        setData(await response.clone().json());
        setProduct(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProduct();
  }, []);
  const [searchProduct, setSearchProduct] = useState("");

  // đăng xuất - signout
  const handleSignOut = () => {
    signOut(auth);
  };
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
              />
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
                <FaShoppingCart />{" "}
              </li>
              <li className="text-sm mt-[1px]">
                {" "}
                <Link to="/cart"> Giỏ hàng : </Link>
                {state.length}
              </li>
            </div>
            <div className="absolute top-1 left-[1499px] list-none text-white ml-[110px]">
              <li className="w-6 h-6 ml-12 absolute mt-[4px]">
                {" "}
                <FaRegistered />{" "}
              </li>
              {!userInfo ? (
                <Link to="/sign-in">
                  {" "}
                  <button className="text-white mt-[29px] text-sm">
                    {" "}
                    Đăng nhập{" "}
                  </button>{" "}
                </Link>
              ) : (
                <HtmlTooltip
                  title={
                    <React.Fragment>
                      <div className="list-none text-center text-[16px] w-[150px] bg-white">
                        <li className="cursor-pointer"> Thông tin </li>
                        <li className="cursor-pointer"> Tài khoản </li>
                        <li onClick={handleSignOut} className="cursor-pointer">
                          {" "}
                          Đăng xuất{" "}
                        </li>
                      </div>
                    </React.Fragment>
                  }
                >
                  <div className="mt-7 ml-1">{userInfo.displayName}</div>
                </HtmlTooltip>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
