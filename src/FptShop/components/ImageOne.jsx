import React from "react";

const ImageOne = () => {
  return (
    <div className="w-[1270px] h-[730px]">
      <img
        src="https://images.fpt.shop/unsafe/fit-in/1200x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/2/14/637804743080951435_F-H5_1200x200%20(1).png"
        alt=""
        className="w-[1300px] h-[200px] ml-[337px] mt-[40px]"
      />
      <div className="">
        <img
          src="https://fptshop.com.vn/Uploads/images/2015/CTKM-Voucher/Luong%20Ve%202/html-title(1).png"
          alt=""
          className="w-[1276px] h-[200px] ml-[337px] mt-[40px] bg-red-500"
        />
        <p className="ml-[825px] mt-[40px] text-[20px] font-bold text-orange-900">
          {" "}
          Áp dụng: 01/02 - 28/02 <hr />
        </p>
        <div className=" flex items-center ml-[340px] mt-[40px] border border-white bg-white w-[1260px] h-[400px] ">
          <div className="absolute w-[227px] h-[328px] border border-white bg-white border-r-indigo-300 ml-[40px]">
            <img
              src="https://fptshop.com.vn/Uploads/images/2015/CTKM-Voucher/Luong%20Ve%202/desktop-html-img.png"
              alt=""
              className="w-[200px] h-[200px] hover:-translate-y-2 transition-all"
            />
            <h4 className="mt-[30px] text-[28px] text-[#444B52] text-center font-bold">
              {" "}
              APPLE{" "}
            </h4>
            <p className="text-center text-[20px] font-semibold text-orange-500">
              {" "}
              LÌ XÌ ĐẾN 3 TRIỆU{" "}
            </p>
          </div>
          <div className="absolute ml-[350px] w-[227px] h-[328px] border border-white bg-white border-r-indigo-300">
            <img
              src="https://fptshop.com.vn/Uploads/images/2015/CTKM-Voucher/Luong%20Ve%202/desktop-html-img-1.png"
              alt=""
              className="w-[200px] h-[200px] hover:-translate-y-2 transition-all"
            />
            <h4 className="mt-[30px] text-[28px] text-[#444B52] text-center font-bold">
              {" "}
              ĐIỆN THOẠI{" "}
            </h4>
            <p className="text-center text-[20px] font-semibold text-orange-500">
              {" "}
              LÌ XÌ ĐẾN 5 TRIỆU{" "}
            </p>
          </div>
          <div className="absolute ml-[650px] w-[227px] h-[328px] border border-white bg-white border-r-indigo-300">
            <img
              src="https://fptshop.com.vn/Uploads/images/2015/CTKM-Voucher/Luong%20Ve%202/desktop-html-img-2.png"
              alt=""
              className="w-[200px] h-[200px] hover:-translate-y-2 transition-all"
            />
            <h4 className="mt-[30px] text-[28px] text-[#444B52] text-center font-bold">
              {" "}
              LAPTOP{" "}
            </h4>
            <p className="text-center text-[20px] font-semibold text-orange-500">
              {" "}
              LÌ XÌ ĐẾN 3 TRIỆU{" "}
            </p>
          </div>
          <div className="absolute ml-[950px] w-[227px] h-[328px] border border-white bg-white border-r-indigo-300">
            <img
              src="https://fptshop.com.vn/Uploads/images/2015/CTKM-Voucher/Luong%20Ve%202/desktop-html-img-3.png"
              alt=""
              className="w-[200px] h-[200px] hover:-translate-y-2 transition-all"
            />
            <h4 className="mt-[30px] text-[28px] text-[#444B52] text-center font-bold">
              {" "}
              GIA DỤNG{" "}
            </h4>
            <p className="text-center text-[20px] font-semibold text-orange-500">
              {" "}
              LÌ XÌ ĐẾN 5 TRIỆU{" "}
            </p>
          </div>
        </div>
        <p className="mt-[50px] ml-[730px] text-[20px] text-green-900 absolute font-bold">
          {" "}
          Giảm thêm 5% tối đa 500.000Đ qua VNPAY <sup> QR </sup>{" "}
        </p>
        <p className="ml-[730px] mt-[90px] text-[17px] absolute italic font-semibold text-purple-900">
          {" "}
          Ưu đãi phụ kiện/dịch vụ lì xì đến <b>1,8 triệu.</b>{" "}
          <a href="" className="text-gray-800 font-bold">
            {" "}
            Xem tại đây{" "}
          </a>
        </p>
      </div>
    </div>
  );
};

export default ImageOne;
