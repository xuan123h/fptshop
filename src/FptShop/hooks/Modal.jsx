import React, { useState } from "react";
import { FaCircle, FaWindowClose } from "react-icons/fa";
// react-hook-form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ModalSchema = yup.object().shape({
  username: yup
    .string()
    .required("Please enter your username")
    .max(15, "Must be 15 characters or less"),
  // age: yup.number().required().positive().integer(),
  phone: yup
    .string()
    .required("Please enter your phone")
    .max(20, "Must be 20 characters or less"),
  email: yup
    .string()
    .email("Must be @gmail.com")
    .required("Please choose email"),
});
const Modal = ({ open = false, handleClose = () => {} }) => {
  // use react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ModalSchema),
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div className="list-none mt-[100px] ml-[1700px]">
      <div className="absolute ml-[30px] top-[7433px]">
        <li>
          {" "}
          <FaCircle />{" "}
        </li>
      </div>
      <div className="w-[136px] h-[65px] bg-red-600 rounded-[8px] absolute top-[7360px] ml-[10px]">
        <li className="text-[#FFFFFF] text-[15px] h-[36px] w-[136px] ml-[8px] mt-[10px]">
          {" "}
          Trò chuyện cùng FPT Shop{" "}
        </li>
      </div>
      <div
        className="absolute top-[7360px] ml-[143px] rounded-full"
        onClick={handleClose}
      >
        <span>
          {" "}
          <FaWindowClose />{" "}
        </span>
      </div>
      <form
        className={`absolute w-[346px] h-[375px] border border-gray-600 bg-blue-600 ${
          open ? "" : "opacity-0 invisible"
        } top-[7050px] left-[1530px]`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h4 className="w-[305px] h-[46px] text-[#FFFFFF] text-[16px] mt-[20px] ml-[20px]">
          {" "}
          Nhập thông tin và bắt đầu để FPTShop phục vụ bạn tốt hơn nhé !{" "}
        </h4>
        <input
          type="text"
          placeholder="* Tên"
          className="w-[275px] h-[40px] mt-[40px] ml-[20px] outline-none p-3"
          {...register("username")}
        />
        {errors.username && (
          <p className="ml-[20px] mt-[5px]">{errors.username.message}</p>
        )}
        <input
          type="text"
          placeholder="* Điện thoại"
          className="w-[275px] h-[40px] ml-[20px] mt-[10px] outline-none p-3"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="ml-[20px] mt-[5px]">{errors.phone.message}</p>
        )}
        <input
          type="email"
          placeholder="Email"
          className="w-[275px] h-[40px] ml-[20px] mt-[10px] outline-none p-3"
          {...register("email")}
        />
        {errors.email && (
          <p className="ml-[20px] mt-[5px]">{errors.email.message}</p>
        )}
        <button
          className="text-[16px] mt-[10px] ml-[90px] bg-red-500 text-white"
          type="submit"
        >
          {" "}
          Bắt đầu trò chuyện{" "}
        </button>
        <li
          className="absolute ml-[322px] top-[0px] text-[20px] bg-slate-300"
          onClick={handleClose}
        >
          <FaWindowClose />
        </li>
      </form>
    </div>
  );
};

export default Modal;
