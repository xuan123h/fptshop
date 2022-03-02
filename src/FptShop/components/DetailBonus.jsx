import React from "react";

const DetailBonus = () => {
  return (
    <div className="w-[1360px] h-[400px] border border-white bg-white mt-[20px] ml-[0px] list-none relative">
      <h2 className="w-[1200px] h-[60px] text-[#212529] text-[20px] p-4 font-bold mt-[10px] ml-[30px]">
        {" "}
        NHỮNG SẢN PHẨM KHÁC{" "}
      </h2>
      <div className="flex items-center mt-[40px] absolute ml-[100px]">
        <div>
          <img
            src="https://images.fpt.shop/unsafe/fit-in/200x132/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/27/637788716572757608_xiaomi-redmi-note-11-xanh-dd.jpg"
            alt=""
            className="w-[200px] h-[132px]"
          />
          <li className="w-[200px] h-[40px] text-[#495057] text-[15px] mt-[10px] font-semibold">
            {" "}
            Xiaomi Redmi Note 11 4GB - 128GB{" "}
          </li>
          <p className="w-[91px] h-[18px] text-[#CB1C22] text-[14px] mt-[10px] ml-[50px] font-medium">
            {" "}
            4.990.000 đ{" "}
          </p>
        </div>
        <div className="ml-[120px]">
          <img
            src="https://images.fpt.shop/unsafe/fit-in/200x132/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/9/15/637673213598401263_iphone-13-pro-max-dd-1.jpg"
            alt=""
          />
          <li className="w-[200px] h-[40px] text-[#495057] text-[15px] mt-[10px] font-semibold">
            {" "}
            iPhone 13 Pro Max 128GB{" "}
          </li>
          <p className="w-[91px] h-[18px] text-[#CB1C22] text-[14px] mt-[10px] ml-[50px] font-medium">
            {" "}
            33.990.000 đ{" "}
          </p>
        </div>
        <div className="ml-[120px]">
          <img
            src="https://images.fpt.shop/unsafe/fit-in/200x132/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/11/22/637731793300543684_vivo-v23e-xanh-hong-dd.jpg"
            alt=""
          />
          <li className="w-[200px] h-[40px] text-[#495057] text-[15px] mt-[10px] font-semibold">
            {" "}
            Vivo V23E 8GB - 128GB{" "}
          </li>
          <p className="w-[91px] h-[18px] text-[#CB1C22] text-[14px] mt-[10px] ml-[50px] font-medium ">
            {" "}
            8.490.000 đ{" "}
          </p>
        </div>
        <div className="ml-[940px] absolute top-[0px]">
          <img
            src="https://images.fpt.shop/unsafe/fit-in/200x132/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/9/10/637353563373216648_lenovo-ideapad-5-xamnhat-dd.png"
            alt=""
          />
          <li className="w-[200px] h-[40px] text-[#495057] text-[15px] mt-[5px] font-semibold ml-[7px]">
            {" "}
            Laptop Lenovo IdeaPad Slim 3 15ADA05 R5 3500U/8GB/512GB SSD/15.6HD
            Touch/Win 10{" "}
          </li>
          <p className="w-[91px] h-[18px] text-[#CB1C22] text-[14px] mt-[50px] ml-[50px] font-medium absolute">
            {" "}
            14.499.000 đ{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailBonus;
