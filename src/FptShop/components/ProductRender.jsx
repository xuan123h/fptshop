import React from "react";
import { Link } from "react-router-dom";

const ProductRender = ({ product }) => {
  return (
    <div className="cursor-pointer">
      <img
        src={product.image}
        alt={product.name}
        className="hover:-translate-y-3 transition-all"
      />
      <h3 className="w-[276px] h-[20px] text-red-400 font-bold">
        {" "}
        {product.name}{" "}
      </h3>
      <div className="flex items-center">
        <span className="w-[130px] h-[28px] text-[#FFFFFF] text-[18px] bg-[#EF8573] ml-[15px] flex items-center justify-center rounded-full mt-[30px]">
          {new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "VND",
          }).format(product.price01)}
        </span>
        <span className="w-[95px] h-[15px] text-[#919191] text-[14px] ml-[25px] line-through mt-[14px]">
          {" "}
          {product.price02}{" "}
        </span>
      </div>
      <div className="flex items-center flex-wrap mt-[23px] font-semibold ml-[20px]">
        <li className="text-[#6C757D] text-[14px] w-[300px] h-[19px] ml-[20px]">
          {" "}
          {product.cpu}{" "}
        </li>
        <li className="w-[57px] h-[19px] text-[#6C757D] text-[14px] mt-[10px]">
          {" "}
          {product.mobile}{" "}
        </li>
        <li className="w-[47px] h-[19px] text-[#6C757D] text-[14px] mt-[10px]">
          {" "}
          {product.ram}{" "}
        </li>
        <li className="w-[65px] h-[19px] text-[#6C757D] text-[14px] mt-[10px]">
          {" "}
          {product.hdd}{" "}
        </li>
      </div>
      <div className="flex items-center mt-[20px] ml-[30px]">
        <img
          src={product.promotion01}
          alt={product.name}
          className="w-[45px] h-[45px]"
        />
        <img
          src={product.promotion02}
          alt={product.name}
          className="w-[45px] h-[45px]"
        />
      </div>
      <p className="mt-[20px] text-orange-400 font-semibold">
        {" "}
        {product.promotion03}{" "}
      </p>
      <br />
      <button className="ml-[50px] w-[120px] h-[40px] bg-orange-300">
        <Link to={`/products/${product.id}`}>Mua ngay</Link>
      </button>
    </div>
  );
};

export default ProductRender;
