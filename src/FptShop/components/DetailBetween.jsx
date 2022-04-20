import React from "react";
import Slider from "react-slick";
const DetailBetween = ({ product }) => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="w-[1360px] h-[1000px] border border-white bg-white ml-[0px] mt-[850px] relative">
      <div>
        <div className="w-[1250px] absolute top-[50px] left-[50px]">
          <h2 className="w-[665px] h-[28px] text-[#212529] text-[20px] font-bold">
            Đặc điểm nổi bật của{" "}
            <b className="text-red-400"> {product.name} </b>
          </h2>
          <br />
          <br />
          <div className="">
            <Slider {...settings}>
              <div>
                <img
                  src={product.image06}
                  alt={product.name}
                  className="w-full h-[374px] object-contain"
                />
              </div>
              <div>
                <img
                  src={product.image07}
                  alt={product.name}
                  className="w-full h-[374px] object-contain"
                />
              </div>
              <div>
                <img
                  src={product.image08}
                  alt={product.name}
                  className="w-full h-[374px] object-contain"
                />
              </div>
              <div>
                <img
                  src={product.image09}
                  alt={product.name}
                  className="w-full h-[374px] object-contain"
                />
              </div>
              <div>
                <img
                  src={product.image10}
                  alt={product.name}
                  className="w-full h-[374px] object-contain"
                />
              </div>
              <div>
                <img
                  src={product.image11}
                  alt={product.name}
                  className="w-full h-[374px] object-contain"
                />
              </div>
              <div>
                <img
                  src={product.image12}
                  alt={product.name}
                  className="w-full h-[374px] object-contain"
                />
              </div>
              <div>
                <img
                  src={product.image13}
                  alt={product.name}
                  className="w-full h-[374px] object-contain"
                />
              </div>
              <div>
                <img
                  src={product.image14}
                  alt={product.name}
                  className="w-full h-[374px] object-contain"
                />
              </div>
              <div>
                <img
                  src={product.image15}
                  alt={product.name}
                  className="w-full h-[374px] object-contain"
                />
              </div>
            </Slider>
          </div>
        </div>
        <div className="absolute top-[600px] ml-[60px]">
          <h2 className="w-[665px] h-[28px] text-[#212529] text-[20px] font-bold">
            {" "}
            Đánh giá chi tiết {product.name}{" "}
          </h2>
          <b className="w-[665px] h-[68px] text-[#495057] text-[16px] mt-[30px] absolute">
            {product.description}
          </b>
        </div>
      </div>
      <div className="absolute top-[800px] ml-[60px] font-medium">
        <div>
          <h2 className="w-[425px] h-[28px] text-[#212529] text-[20px] font-bold">
            {" "}
            Thông số kỹ thuật{" "}
          </h2>
          <table className="mt-[20px]">
            <thead>
              <th className="w-[126px] h-[54px] text-[#444B52] text-[14px] p-2 ">
                {" "}
                Màn hình{" "}
              </th>
              <th className="w-[126px] h-[34px] text-[#444B52] text-[14px] p-2">
                {" "}
                RAM{" "}
              </th>
              <th className="w-[126px] h-[34px] text-[#444B52] text-[14px] p-2">
                {" "}
                CPU{" "}
              </th>
              <th className="w-[136px] h-[34px] text-[#444B52] text-[14px] p-2">
                {" "}
                Dung lượng pin{" "}
              </th>
              <th className="w-[126px] h-[34px] text-[#444B52] text-[14px] p-2">
                {" "}
                Xuất xứ{" "}
              </th>
              <th className="w-[146px] h-[34px] text-[#444B52] text-[14px] p-2">
                {" "}
                Thời gian ra mắt{" "}
              </th>
            </thead>
            <tbody>
              <td className="w-[291px] h-[38px] text-[#444B52] text-[14px]">
                {product.mobile}
              </td>
              <td className="w-[100px] h-[18px] text-[#444B52] text-[14px] ml-[44px] absolute">
                {product.ram}
              </td>
              <td className="w-[297px] h-[34px] text-[#444B52] text-[14px] ml-[154px] absolute">
                {product.cpu}
              </td>
              <td className="w-[84px] h-[18px] text-[#444B52] text-[14px] ml-[299px] absolute">
                {product.pin}
              </td>
              <td className="w-[92px] h-[18px] text-[#444B52] text-[14px] ml-[415px] absolute">
                {product.country}
              </td>
              <td className="w-[53px] h-[18px] text-[#444B52] text-[14px] ml-[550px] absolute">
                {product.time}
              </td>
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-[585px] h-[64px] p-2 absolute left-[750px] top-[610px] list-none font-bold border border-orange-500 bg-orange-100">
        <li className="w-[350px] h-[20px] text-[#495057] text-[14px] absolute ml-[145px]">
          {" "}
          Mua hàng cũ : iPhone 13 Pro Max 128GB{" "}
        </li>
        <li className="w-[561px] h-[20px] text-[#6A737A] text-[14px] absolute top-[33px] left-[215px] ">
          {" "}
          Giá từ : 27.874.000 đ{" "}
        </li>
      </div>
    </div>
  );
};

export default DetailBetween;
