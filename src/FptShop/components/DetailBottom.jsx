import React from "react";
import { FaPaperPlane, FaStar } from "react-icons/fa";
const DetailBottom = ({ product }) => {
  return (
    <div className="w-[1360px] h-[900px] border border-white bg-white mt-[20px] ml-[0px] list-none">
      <div className="mt-[80px]">
        <h2 className="w-[1200px] h-[60px] text-[#212529] text-[20px] p-4 font-bold mt-[10px] ml-[430px]">
          {" "}
          Đánh giá & Nhận xét {product.name} <sup> (24) </sup>{" "}
        </h2>
        <li className="w-[320px] h-[24px] text-[#495057] text-[16px] font-semibold ml-[565px]">
          {" "}
          Đánh Giá Trung Bình{" "}
        </li>
        <b className="w-[320px] h-[60px] text-[#CB1C22] text-[44px] ml-[600px]">
          {" "}
          4/5{" "}
        </b>
        <li className="w-[320px] h-[24px] ml-[599px] flex item-center text-orange-400">
          <p>
            <FaStar />
          </p>
          <p>
            <FaStar />
          </p>
          <p>
            <FaStar />
          </p>
          <p>
            <FaStar />
          </p>
          <p>
            <FaStar />
          </p>
        </li>
        <p className="w-[181px] h-[18px] text-[#99A2AA] text-[14px] font-semibold ml-[560px] mt-[10px]">
          {" "}
          13 đánh giá & 11 nhận xét{" "}
        </p>
      </div>
      <div>
        <div>
          <li className="w-[1070px] h-[24px] text-[#212529] text-[18px] mt-[80px] ml-[200px]">
            {" "}
            Vo minh luan{" "}
          </li>
          <div className="flex items-center mt-[10px] ml-[270px]">
            <li className="w-[79px] h-[19px] flex text-orange-400">
              <p>
                <FaStar />
              </p>
              <p>
                <FaStar />
              </p>
              <p>
                <FaStar />
              </p>
              <p>
                <FaStar />
              </p>
              <p>
                <FaStar />
              </p>
            </li>
            <p className="w-[192px] h-[20px] text-[#99A2AA] text-[14px] ml-[12px]">
              {" "}
              vào ngày 08/01/2022{" "}
            </p>
          </div>
          <p className="w-[1075px] h-[24px] text-[#444B52] text-[16px] mt-[20px] ml-[280px]">
            {" "}
            Máy dùng tốt, nhân viên giao hàng rất nhiệt tình{" "}
          </p>
        </div>
        <div>
          <li className="w-[1070px] h-[24px] text-[#212529] text-[18px] mt-[40px] ml-[200px]">
            {" "}
            le van duc{" "}
          </li>
          <div className="flex items-center mt-[10px] ml-[270px]">
            <li className="w-[79px] h-[19px] text-orange-400 flex items-center">
              <p>
                <FaStar />
              </p>
              <p>
                <FaStar />
              </p>
              <p>
                <FaStar />
              </p>
              <p>
                <FaStar />
              </p>
              <p>
                <FaStar />
              </p>
            </li>
            <p className="w-[192px] h-[20px] text-[#99A2AA] text-[14px] ml-[12px]">
              {" "}
              vào ngày 24/12/2021{" "}
            </p>
          </div>
          <p className="w-[1075px] h-[24px] text-[#444B52] text-[16px] mt-[20px] ml-[280px]">
            {" "}
            sản phẩm tốt{" "}
          </p>
        </div>
      </div>
      <div className="absolute flex items-center left-[360px] mt-[70px]">
        <input
          type="text"
          placeholder="Viết bình luận"
          className="w-[600px] h-[40px] outline-none border border-gray-400 pl-2 pt-1"
        />
        <li className="w-[40px] h-[40px] border border-orange-400 bg-orange-300 flex items-center justify-center">
          {" "}
          <FaPaperPlane />{" "}
        </li>
      </div>
    </div>
  );
};

export default DetailBottom;
