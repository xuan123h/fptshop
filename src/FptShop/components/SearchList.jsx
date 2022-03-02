import React from "react";
import { Link } from "react-router-dom";

const SearchList = ({ val }) => {
  return (
    <>
      <img src={val.image} alt={val.name} className="w-[120px] h-[120px]" />
      <p className="w-[200px] mt-[20px] text-gray-500 font-bold">
        {" "}
        {val.name}{" "}
      </p>
      <div>
        <div className="flex items-center font-semibold">
          {new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "VND",
          }).format(val.price01)}
          <span className="line-through w-[100px] mt-[20px] ml-[15px]">
            {" "}
            {val.price02}{" "}
          </span>
        </div>
        <div className="flex items-center">
          <img src={val.promotion01} alt={val.name} />
          <img src={val.promotion02} alt={val.name} className="ml-[50px]" />
        </div>
        <p className="w-[200px] font-medium mt-[10px]">{val.promotion03}</p>
        <button className="w-[140px] h-[50px] bg-red-500 text-white mt-[12px]">
          {" "}
          <Link to={`/product/${val.id}`}> Mua Ngay </Link>{" "}
        </button>
      </div>
    </>
  );
};

export default SearchList;
