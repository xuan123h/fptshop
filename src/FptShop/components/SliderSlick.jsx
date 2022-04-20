import React from "react";
import Slider from "react-slick";
const SliderSlick = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div className="w-[800px] h-[300px] ml-[310px] mt-5">
      <Slider {...settings}>
        <div>
          <img
            src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/2/15/637805034651756689_F-H1_800x300.png"
            alt=""
          />
          <h4 className="text-center mt-3 text-white text-sm border border-gray-500 bg-black">
            {" "}
            Đặt gạch Galaxy S22, ưu đãi hơn 5 triệu{" "}
          </h4>
        </div>
        <div>
          <img
            src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/2/14/637804699887881530_F-H1_800x300.png"
            alt=""
          />
          <h4 className="text-center mt-3 text-white text-sm border border-gray-500 bg-black">
            {" "}
            Laptop giảm sốc đến 6 triệu{" "}
          </h4>
        </div>
        <div>
          <img
            src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/2/14/637804797809586603_F-H1_800x300.png"
            alt=""
          />
          <h4 className="text-center mt-3 text-white text-sm border border-gray-500 bg-black">
            {" "}
            Gia dụng Xiaomi lì xì đến 6 triệu{" "}
          </h4>
        </div>
        <div>
          <img
            src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/2/14/637804743012826760_F-H1_800x300%20(2).png"
            alt=""
          />
          <h4 className="text-center mt-3 text-white text-sm border border-gray-500 bg-black">
            {" "}
            iPad Pro giá sốc nhất lịch sử{" "}
          </h4>
        </div>
        <div>
          <img
            src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/2/14/637804723174030211_F-H1_800x300@2x.png"
            alt=""
          />
          <h4 className="text-center mt-3 text-white text-sm border border-gray-500 bg-black">
            {" "}
            Sắm Remo6 Z 5G giá sốc chỉ 8.690.000Đ{" "}
          </h4>
        </div>
      </Slider>
      <div className="absolute top-[113px] left-[1140px]">
        <div className="w-[485px] h-[150px]">
          <img
            src="https://images.fpt.shop/unsafe/fit-in/385x100/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/2/14/637804702816759552_F-H2_385x100.png"
            alt=""
            className="w-full h-full mb-5 object-cover"
          />
          <img
            src="https://images.fpt.shop/unsafe/fit-in/385x100/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/2/14/637804758930519244_Tablet.png"
            alt=""
            className="w-full h-full mt-[34px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SliderSlick;
