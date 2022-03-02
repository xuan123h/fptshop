import React from "react";
import InformationList from "../components/InformationList";

const InformationFeature = () => {
  const informationList = [
    {
      id: 1,
      name: "Điện thoại",
      thumbnailUrl:
        "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/https://fptshop.com.vn/Uploads/images/v5d/dien-thoai.png",
    },
    {
      id: 2,
      name: "Laptop",
      thumbnailUrl:
        "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/https://fptshop.com.vn/Uploads/images/v5d/laptop.png",
    },
    {
      id: 3,
      name: "Apple",
      thumbnailUrl:
        "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/https://fptshop.com.vn/Uploads/images/v5d/apple.png",
    },
    {
      id: 4,
      name: "Samsung",
      thumbnailUrl:
        "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/https://fptshop.com.vn/Uploads/images/2015/Other/chuyentrangsamsung8_7.png",
    },
    {
      id: 5,
      name: "Hàng Gia Dụng",
      thumbnailUrl:
        "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/https://fptshop.com.vn/Uploads/images/2015/Other/giadung.png",
    },
    {
      id: 6,
      name: "Xiaomi",
      thumbnailUrl:
        "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/https://fptshop.com.vn/Uploads/images/v5d/xiaomi2.png",
    },
    {
      id: 7,
      name: "Máy cũ",
      thumbnailUrl:
        "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/https://fptshop.com.vn/Uploads/images/v5d/may_cu.png",
    },
    {
      id: 8,
      name: "Máy tính bảng",
      thumbnailUrl:
        "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/https://fptshop.com.vn/Uploads/images/2015/Other/tablet0409.png",
    },
    {
      id: 9,
      name: "Đồng hồ thông minh",
      thumbnailUrl:
        "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/https://fptshop.com.vn/Uploads/images/v5d/smart-watch.png",
    },
    {
      id: 10,
      name: "Đồng hồ thời trang",
      thumbnailUrl:
        "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/https://fptshop.com.vn/Uploads/images/2015/Other/donghothoitrang1308.png",
    },
    {
      id: 11,
      name: "Máy tính để bàn",
      thumbnailUrl:
        "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/https://fptshop.com.vn/Uploads/images/2015/PC1512.png",
    },
    {
      id: 12,
      name: "Máy in",
      thumbnailUrl:
        "https://images.fpt.shop/unsafe/fit-in/60x60/filters:quality(90):fill(transparent)/https://fptshop.com.vn/Uploads/images/v5d/may-in.png",
    },
  ];
  return (
    <>
      <InformationList informationList={informationList} />
    </>
  );
};

export default InformationFeature;
