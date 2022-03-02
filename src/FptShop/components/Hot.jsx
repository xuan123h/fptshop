import React from "react";
import {
  FaApple,
  FaMedal,
  FaStackOverflow,
  FaBatteryFull,
  FaSdCard,
  FaMobileAlt,
  FaHeadphones,
  FaPrint,
  FaSpeakerDeck,
  FaUsb,
  FaAccessibleIcon,
  FaArrowAltCircleDown,
  FaKeyboard,
  FaShoppingBag,
  FaTv,
  FaEllipsisH,
} from "react-icons/fa";
const Hot = ({ hot }) => {
  return (
    <div className=" relative h-[340px] list-none mt-[40px] border border-white bg-white ml-[325px] mr-[260px] ">
      <div className="mt-[20px] ml-[30px]">
        {" "}
        <h2 className="w-[281px] h-[26px] text-gray-900 text-[20px] font-bold ">
          {" "}
          PHỤ KIỆN HOT{" "}
        </h2>{" "}
      </div>
      <div className="flex items-center mt-[60px] flex-wrap w-[1270px] ml-[80px]">
        <div className="w-[118px] h-[129px]  text-sm ">
          <li className="w-[40px] h-[45px] ml-[43px] text-blue-500 font-bold">
            {" "}
            <FaMedal />{" "}
          </li>
          <li className="w-[128px] h-[39px]  text-[15px] text-blue-500 font-bold">
            {" "}
            Phụ kiện nổi bật{" "}
          </li>
        </div>
        <div className="w-[128px] h-[129px]  text-sm ml-[45px]">
          <li className="w-[40px] h-[45px] ml-[40px] font-bold text-orange-500">
            {" "}
            <FaStackOverflow />{" "}
          </li>
          <li className="w-[128px] h-[39px] text-[15px] font-bold text-orange-500">
            {" "}
            Bao da ốp lưng{" "}
          </li>
        </div>
        <div className="w-[128px] h-[129px]  text-sm ml-[40px]">
          <li className="w-[40px] h-[45px] ml-[40px] text-gray-500 font-bold">
            {" "}
            <FaBatteryFull />{" "}
          </li>
          <li className="w-[128px] h-[39px] text-gray-500 font-bold text-[15px]">
            {" "}
            Sạc dự phòng{" "}
          </li>
        </div>
        <div className="w-[128px] h-[129px]  text-sm ml-[40px] font-bold">
          <li className="w-[40px] h-[45px] ml-[18px] text-yellow-500">
            {" "}
            <FaSdCard />{" "}
          </li>
          <li className="w-[128px] h-[39px] text-[15px] text-yellow-500">
            {" "}
            Thẻ nhớ{" "}
          </li>
        </div>
        <div className="w-[128px] h-[129px]  text-sm font-bold">
          <li className="w-[40px] h-[45px] ml-[60px] text-violet-500">
            {" "}
            <FaMobileAlt />{" "}
          </li>
          <li className="w-[158px] h-[39px] text-violet-500 text-[15px] ">
            {" "}
            Miếng dán màn hình{" "}
          </li>
        </div>
        <div className="w-[128px] h-[129px]  text-sm ml-[90px] font-bold">
          <li className="w-[40px] h-[45px] ml-[16px] text-orange-500">
            {" "}
            <FaHeadphones />{" "}
          </li>
          <li className="w-[128px] h-[39px] text-orange-500 text-[15px]">
            {" "}
            Tai nghe{" "}
          </li>
        </div>
        <div className="w-[128px] h-[129px]  text-sm font-bold">
          <li className="w-[40px] h-[45px] ml-[13px] text-[#FF69B4]">
            {" "}
            <FaPrint />{" "}
          </li>
          <li className="w-[128px] h-[39px] text-[#FF69B4] text-[15px]">
            {" "}
            Mực in{" "}
          </li>
        </div>
        <div className="w-[128px] h-[129px]  text-sm font-bold">
          <li className="w-[40px] h-[45px] text-[#E9967A]">
            {" "}
            <FaSpeakerDeck />{" "}
          </li>
          <li className="w-[128px] h-[39px] text-[#E9967A] text-[15px]">
            {" "}
            Loa{" "}
          </li>
        </div>
        <div className="w-[128px] h-[129px]  text-sm font-bold">
          <li className="w-[40px] h-[45px] ml-[38px] text-[#FFD700]">
            {" "}
            <FaUsb />{" "}
          </li>
          <li className="w-[128px] h-[39px] text-[#FFD700] text-[15px]">
            {" "}
            USB - Ổ cứng{" "}
          </li>
        </div>
        <div className="w-[128px] h-[129px]  text-sm ml-[36px] font-bold">
          <li className="w-[40px] h-[45px] ml-[20px] text-orange-500">
            {" "}
            <FaAccessibleIcon />{" "}
          </li>
          <li className="w-[128px] h-[39px] text-orange-500 text-[15px]">
            {" "}
            Sạc cáp{" "}
          </li>
        </div>
        <div className="w-[128px] h-[129px]  text-sm font-bold">
          <li className="w-[40px] h-[45px] ml-[40px] text-[#BDB76B]">
            {" "}
            <FaApple />{" "}
          </li>
          <li className="w-[128px] h-[39px] text-[#BDB76B] text-[15px]">
            {" "}
            Phụ kiện Apple{" "}
          </li>
        </div>
        <div className="w-[128px] h-[129px]  text-sm ml-[40px] font-bold">
          <li className="w-[40px] h-[45px] ml-[10px] text-[#ADFF2F]">
            {" "}
            <FaArrowAltCircleDown />{" "}
          </li>
          <li className="w-[128px] h-[39px] text-[#ADFF2F] text-[15px]">
            {" "}
            Chuột{" "}
          </li>
        </div>
        <div className="w-[128px] h-[129px]  text-sm font-bold">
          <li className="w-[40px] h-[45px] ml-[22px] text-blue-500">
            {" "}
            <FaKeyboard />{" "}
          </li>
          <li className="w-[128px] h-[39px] text-[15px] text-blue-500">
            {" "}
            Bàn phím{" "}
          </li>
        </div>
        <div className="w-[128px] h-[129px]  text-sm ml-[20px] font-bold">
          <li className="w-[40px] h-[45px] ml-[40px] text-green-500">
            {" "}
            <FaShoppingBag />{" "}
          </li>
          <li className="w-[128px] h-[39px] text-green-500 text-[15px]">
            {" "}
            Balo - Túi xách{" "}
          </li>
        </div>
        <div className="w-[128px] h-[129px]  text-sm ml-[43px] font-bold">
          <li className="w-[40px] h-[45px] ml-[16px] text-purple-500">
            {" "}
            <FaTv />{" "}
          </li>
          <li className="w-[128px] h-[39px] text-[15px] text-purple-500">
            {" "}
            TV BOX{" "}
          </li>
        </div>
        <div className="w-[128px] h-[129px]  text-sm font-bold">
          <li className="w-[40px] h-[45px] ml-[38px] text-gray-500">
            {" "}
            <FaEllipsisH />{" "}
          </li>
          <li className="w-[128px] h-[39px] text-gray-500 text-[15px]">
            {" "}
            Phụ kiện khác{" "}
          </li>
        </div>
      </div>
    </div>
  );
};

export default Hot;
