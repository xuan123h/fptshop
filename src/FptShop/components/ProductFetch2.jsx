import { Link } from "react-router-dom";
import React from "react";

const ProductFetch2 = ({ productFetch2 }) => {
  return (
    <div className="h-[542px] mt-[30px] ml-[50px] ">
      <img
        src={productFetch2.image}
        alt={productFetch2.name}
        className="hover:-translate-y-2 transition-all"
      />
      <p className="mt-[20px] text-[17px] text-[#474C51] w-[270px] h-[20px] cursor-pointer font-bold">
        {/* <h4>{productFetch2.name}</h4> */}
        <Link to={`/user/${productFetch2.id}`}> {productFetch2.name} </Link>
      </p>
      <div className="flex items-center mt-9">
        <span className="w-[130px] h-[28px] text-[#FFFFFF] bg-[#EF8573] text-lg text-center rounded-xl">
          {new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "VND",
          }).format(productFetch2.price01)}
        </span>
        <span className="w-[95px] h-[15px] text-sm text-[#919191] ml-[8px] line-through font-bold">
          {productFetch2.price02}
        </span>
      </div>
      <div className="flex items-center mt-[12px]">
        <img
          src={productFetch2.promotion01}
          alt={productFetch2.name}
          className="ml-[5px]"
        />
        <img
          src={productFetch2.promotion02}
          alt={productFetch2.name}
          className="ml-[20px]"
        />
      </div>
      <div className="mt-[14px] w-[250px] h-[34px] text-[#555555] font-semibold">
        <p> {productFetch2.promotion03} </p>
      </div>
    </div>
  );
};

export default ProductFetch2;
