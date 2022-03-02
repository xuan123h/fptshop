import React from "react";
import { Link } from "react-router-dom";

const ProductFetch = ({ productFetch }) => {
  return (
    <div className="group">
      <div className="w-[276px] h-[214px] mt-[60px] ml-[28px]">
        <span className="absolute top-[110px] ml-[220px] z-10 cursor-pointer opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all w-8">
          <svg
            width="42"
            height="38"
            viewBox="0 0 42 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="max-w-full"
          >
            <path
              d="M0.166626 11.5C0.166108 8.47984 1.37993 5.58633 3.53499 3.47045C5.69005 1.35458 8.60534 0.19405 11.625 0.249979C15.2027 0.230979 18.6166 1.74826 21 4.41665C23.3833 1.74826 26.7972 0.230979 30.375 0.249979C33.3946 0.19405 36.3099 1.35458 38.4649 3.47045C40.62 5.58633 41.8338 8.47984 41.8333 11.5C41.8333 22.6583 28.5437 31.0833 21 37.75C13.4729 31.0271 0.166626 22.6666 0.166626 11.5Z"
              fill="gray"
            />
          </svg>
        </span>
        <div className="flex items-center">
          <button className=" text-sm font-medium bg-red-500 rounded-lg text-white absolute  -translate-x-2/4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all top-[645px] ml-[60px] p-[10px]">
            <Link to={`/product/${productFetch.id}`}>Mua ngay</Link>
          </button>
          <button className="text-sm font-medium bg-orange-500 rounded-lg text-white absolute  -translate-x-2/4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all ml-[170px] top-[645px] p-[10px]">
            Xem giỏ hàng
          </button>
        </div>
        <img
          src={productFetch.image}
          alt={productFetch.name}
          className="w-[168px] h-[168px] hover:-translate-y-3 transition-all ml-[26px]"
        />
      </div>
      <div>
        <li className="w-[276px] h-[20px] text-[#474C51] text-[17px] absolute top-[340px] text-center font-bold">
          {" "}
          {productFetch.name}{" "}
        </li>
      </div>
      <div className="flex items-center mt-[20px]">
        <span className="w-[130px] h-[28px] text-[#FFFFFF] text-[18px] bg-[#EF8573] ml-[15px] flex items-center justify-center rounded-full">
          {new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "VND",
          }).format(productFetch.price01)}
        </span>
        <span className="w-[95px] h-[15px] text-[#919191] text-[14px] ml-[25px] line-through font-semibold">
          {" "}
          {productFetch.price02}{" "}
        </span>
      </div>
      <div className="flex items-center w-[300px] mt-[30px] ml-[20px] flex-wrap absolute font-semibold">
        <p className="text-[#6C757D] text-[14px] w-[300px] h-[19px] ml-[30px]">
          {" "}
          {productFetch.cpu}{" "}
        </p>
        <p className="w-[57px] h-[19px] text-[#6C757D] text-[14px] mt-[10px] ml-[50px]">
          {" "}
          {productFetch.mobile}{" "}
        </p>
        <p className="w-[47px] h-[19px] text-[#6C757D] text-[14px] mt-[10px]">
          {" "}
          {productFetch.ram}{" "}
        </p>
        <p className="w-[65px] h-[19px] text-[#6C757D] text-[14px] mt-[10px]">
          {" "}
          {productFetch.hdd}{" "}
        </p>
      </div>
      <div className="absolute  mt-[90px] flex items-center ml-[55px]">
        <img
          src={productFetch.promotion01}
          alt={productFetch.title}
          className="w-[45px] h-[45px]"
        />
        <img
          src={productFetch.promotion02}
          alt={productFetch.title}
          className="w-[45px] h-[45px] ml-[40px]"
        />
      </div>
      <div className="absolute mt-[155px] ml-[20px]">
        <p className="w-[256px] h-[34px] text-[#555555] text-[13px] font-semibold">
          {" "}
          {productFetch.promotion03}{" "}
        </p>
      </div>
      <div className="absolute top-[310px] flex items-center ml-[12px]">
        <li className="w-[100px] h-[30px] bg-[#EA9D02] text-[#FFFFFF] rounded-[20px] flex items-center justify-center font-bold">
          {" "}
          {productFetch.promotion04}
        </li>
        <li className="ml-[26px] w-[150px] h-[30px] bg-[#CB1C22] text-[#FFFFFF] rounded-[20px] flex items-center justify-center font-bold">
          {" "}
          {productFetch.promotion05}
        </li>
      </div>
    </div>
  );
};

export default ProductFetch;
