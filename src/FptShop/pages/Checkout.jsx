import React from "react";

import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);
  var total = 0;
  const itemList = (item) => {
    total = total + item.price01 * item.qty;
    return (
      <div>
        <table>
          <tbody className="">
            <tr className="flex items-center w-[400px]">
              <td>
                <img src={item.image} alt={item.name} />
              </td>
              <td>
                {" "}
                <h6>{item.name}</h6>
              </td>
              <td>
                <span>
                  {new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "VND",
                  }).format(item.price01 * item.qty)}{" "}
                </span>
              </td>
              <td>{item.qty}</td>
              <td> Xóa </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  const CartSchema = yup.object().shape({
    username: yup
      .string()
      .required("Please enter your username")
      .max(15, "Must be 15 characters or less"),
    mobilephone: yup
      .string()
      .required("Please enter your mobilephone")
      .max(20, "Must be 20 characters or less"),
    email: yup.string().required("Please enter your email"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CartSchema),
  });
  const onSubmit = () => {
    // alert(JSON.stringify(data));
  };
  return (
    <>
      <Header />
      <div className="w-[1300px] h-[800px] border border-white bg-white ml-[323px] mt-[150px] shadow-sm">
        <form className="list-none relative" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="w-[776px] h-[52px] text-[#212529] text-[24px] p-2 font-bold mt-[10px] ml-[20px]">
            Có {state.length} sản phẩm trong giỏ hàng
          </h2>
          <div className="mt-[30px] flex items-center">
            <table>
              <thead>
                <tr className="">
                  <th className="float-left"> Sản Phẩm </th>
                  <th> Tên </th>
                  <th> Giá </th>
                  <th> Số Lượng </th>
                  <th> Chọn </th>
                </tr>
              </thead>
              <tbody>
                <tr>{state.length !== 0 && state.map(itemList)}</tr>
              </tbody>
            </table>
          </div>
          <div className="mt-[60px] flex items-center absolute left-[900px]">
            <div>
              <h4 className="w-[444px] h-[24px] text-[#32373D] text-[16px] font-semibold">
                {" "}
                Mã giảm giá{" "}
              </h4>
              <div className="mt-[15px] flex items-center">
                <input
                  type="text"
                  placeholder="Nhập mã giảm giá"
                  className="w-[200px] h-[30px] bg-[#FFFFFF] p-1 outline-none border border-orange-400"
                />
                <button className="w-[77px] h-[28px] text-[#FFFFFF] bg-[#CB1C22] text-[14px] p-2 ml-[10px] flex items-center justify-center">
                  {" "}
                  Áp dụng{" "}
                </button>
              </div>
            </div>
            <div>
              <div className="flex items-center mt-[10px] absolute top-[100px] left-[20px] font-bold">
                <li className="w-[91px] h-[20px] text-[#444B52] text-[14px]">
                  {" "}
                  Tổng tiền :{" "}
                </li>
                <li className="w-[89px] h-[20px] text-[#444B52] text-[14px]">
                  {" "}
                  {new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "VND",
                  }).format(total)}
                </li>
              </div>
            </div>
          </div>
          <div className="flex items-center mt-[40px] absolute top-[400px] ml-[40px]">
            <div className="flex items-center">
              <input
                type="radio"
                name="one"
                id=""
                className="w-[16px] h-[16px] bg-[#FFFFFF]"
              />
              <li className="w-[25px] h-[20px] text-[#444B52] text-[14px] ml-[10px]">
                {" "}
                Anh{" "}
              </li>
            </div>
            <div className="flex items-center ml-[35px]">
              <input
                type="radio"
                name="one"
                id=""
                className="w-[16px] h-[16px] bg-[#FFFFFF]"
              />
              <li className="w-[25px] h-[20px] text-[#444B52] text-[14px] ml-[10px]">
                {" "}
                Chị{" "}
              </li>
            </div>
          </div>
          <div className="flex items-center absolute top-[500px] ml-[40px]">
            <input
              type="text"
              placeholder="Nhập họ và tên"
              className="w-[237px] h-[34px] bg-[#FFFFFF] p-1 outline-none border border-orange-300"
              {...register("username")}
            />
            {errors.username && (
              <p className="absolute top-[50px]">{errors.username.message}</p>
            )}
            <input
              type="text"
              placeholder="Nhập số điện thoại"
              className="w-[237px] h-[34px] bg-[#FFFFFF] p-1 ml-[10px] outline-none border border-orange-300"
              {...register("mobilephone")}
            />
            {errors.mobilephone && (
              <p className="absolute top-[50px] ml-[250px] w-[400px]">
                {errors.mobilephone.message}
              </p>
            )}
          </div>
          <div className=" top-[600px] absolute ml-[40px]">
            <input
              type="text"
              placeholder="Nhập email (Không bắt buộc)"
              className="w-[490px] h-[34px] bg-[#FFFFFF] p-1 outline-none border border-orange-300"
              {...register("email")}
            />
            {errors.email && (
              <p className="absolute top-[50px]">{errors.email.message}</p>
            )}
          </div>
          <div className="top-[350px] left-[690px] absolute ">
            <Link to="/success">
              <button
                className="w-[259px] h-[54px] text-[#FFFFFF] text-[20px] bg-[#CB1C22] p-4 absolute left-[220px]"
                type="submit"
              >
                HOÀN TẤT ĐẶT HÀNG
              </button>
            </Link>
            <p className="w-[776px] h-[20px] text-[#939CA3] text-[14px] absolute top-[358px] left-[100px] font-semibold">
              {" "}
              Bằng cách đặt hàng, bạn đồng ý với Điều khoản sử dụng của FPTShop{" "}
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Checkout;
