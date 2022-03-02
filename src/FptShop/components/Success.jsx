import React from "react";
import { FaCheckDouble, FaGratipay } from "react-icons/fa";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="list-none w-[1200px] h-[800px] border border-white bg-white ml-[350px] mt-[100px] relative">
      <div className="mt-[60px] ml-[550px] flex items-center text-[40px] absolute text-orange-400">
        <li>
          {" "}
          <FaCheckDouble />{" "}
        </li>
        <li className="ml-[20px]">
          {" "}
          <FaGratipay />{" "}
        </li>
      </div>
      <h2 className="absolute top-[200px] z-20 left-[370px] text-[white] font-medium w-[500px]">
        {" "}
        Bạn đã đặt hàng thành công đơn hàng #3211 của FPTShop. Chúng tôi sẽ sớm
        liên hệ và giao hàng sớm nhất cho bạn.{" "}
      </h2>
      <div className="absolute">
        <img
          src="https://wall.vn/wp-content/uploads/2019/11/hinh-anh-canh-dong-hoa-48.jpg"
          alt=""
          className="w-[900px] h-[600px] mt-[130px] ml-[150px]"
        />
      </div>
      <button className="w-[240px] h-[40px] bg-red-500 text-[white] absolute top-[760px] left-[480px]">
        <Link to="/">Quay về trang chủ</Link>
      </button>
    </div>
  );
};

export default Success;
