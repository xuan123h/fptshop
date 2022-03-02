import React from "react";
import { Link } from "react-router-dom";

const ProductHighlight = ({ productHighlight }) => {
  return (
    <div>
      <img
        src={productHighlight.image}
        alt={productHighlight.name}
        className="w-[214px] h-[214px] ml-[40px] mt-[3px] "
      />
      <p className="w-[270px] h-[20px] text-[#474C51] mt-[16px] text-[17px] text-center font-bold">
        <Link to={`/mobilephone/${productHighlight.id}`}>
          {productHighlight.name}
        </Link>
      </p>
      <div className="mt-[30px] text-center">
        <span className="w-[130px] h-[28px] text-[#FFFFFF] bg-[#EF8573] text-[16px] text-center rounded-[5px] ">
          {new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "VND",
          }).format(productHighlight.price01)}
        </span>
        <span className="w-[95px] h-[15px] text-sm text-[#919191] ml-[8px] line-through">
          {productHighlight.price02}
        </span>
      </div>
      <div className="w-[200px] flex flex-wrap mt-[20px] font-semibold text-purple-900">
        <div className="flex items-center ml-[60px]">
          <li></li>
          <li className="w-[350px] text-[13px]"> {productHighlight.cpu} </li>
        </div>
        <div className="flex items-center ml-[59px]">
          <li></li>
          <li className="text-[13px] "> {productHighlight.mobile} </li>
        </div>
        <div className="flex items-center">
          <li></li>
          <li className="text-[13px] ml-[14px]"> {productHighlight.ram} </li>
        </div>
        <div className="flex items-center ml-[20px]">
          <li></li>
          <li className="text-[13px]"> {productHighlight.hdd} </li>
        </div>
      </div>
      <div className="flex items-center mt-[20px] ml-[70px]">
        <img src={productHighlight.promotion01} alt={productHighlight.name} />
        <img
          src={productHighlight.promotion02}
          alt={productHighlight.name}
          className="ml-[30px]"
        />
      </div>
      <p className="mt-[13px] w-[256px] h-[34px] text-[#555555] text-[15px] ml-[25px] font-semibold">
        {productHighlight.promotion03}
      </p>
      <div className="mt-[57px]  flex items-center justify-center">
        <button className="w-[100px] h-[30px] border border-red-600 bg-red-600 flex items-center justify-center text-white ">
          {" "}
          MUA NGAY{" "}
        </button>
        <button className="w-[100px] h-[30px] border border-orange-500 bg-orange-500 text-white ml-[5px]">
          {" "}
          XEM THÊM{" "}
        </button>
      </div>
    </div>
  );
};

export default ProductHighlight;
