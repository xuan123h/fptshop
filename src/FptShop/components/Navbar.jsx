import React from "react";
import {
  FaMobile,
  FaLaptop,
  FaAppleAlt,
  FaDesktop,
  FaHeadphones,
  FaArrowRight,
  FaHouseUser,
  FaSimCard,
  FaPercent,
  FaStar,
} from "react-icons/fa";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
const longText = `title`;

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    // width: 250,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));
const Navbar = () => {
  return (
    <div className="relative bg-[#252525] h-9 flex items-center list-none">
      <div className="flex items-center text-white absolute ml-[310px]">
        <li className="cursor-pointer">
          {" "}
          <FaMobile />{" "}
        </li>
        <HtmlTooltip
          title={
            <React.Fragment>
              <div className="w-[760px] flex border border-white bg-white">
                <div className="mt-[20px]">
                  <Typography color="inherit"> HÃNG SẢN XUẤT </Typography>
                  <div>
                    <li>Apple (iPhone)</li>
                    <li>Xiaomi</li>
                    <li>Nokia</li>
                    <li>Vsmart</li>
                  </div>
                  <div>
                    <li> Samsung </li>
                    <li> Vivo </li>
                    <li> Masstel </li>
                  </div>
                  <div>
                    <li> OPPO </li>
                    <li> Tecno </li>
                    <li> Realme </li>
                  </div>
                </div>
                <div className="ml-[30px] mt-[20px]">
                  <Typography color="inherit"> ĐỒNG HỒ THÔNG MINH </Typography>
                  <div>
                    <li> Apple Watch </li>
                    <li> Masstel </li>
                    <li> Huawei </li>
                  </div>
                  <div>
                    <li> Samsung </li>
                    <li> Xiaomi </li>
                  </div>
                  <div>
                    <li> Oppo </li>
                    <li> Garmin </li>
                  </div>
                </div>
                <div className="ml-[420px] absolute w-[120px] mt-[20px]">
                  <Typography color="inherit"> MỨC GIÁ </Typography>
                  <div>
                    <li> Dưới 2 triệu </li>
                    <li> Từ 2-4 triệu </li>
                    <li> Từ 6-8 triệu </li>
                    <li> Từ 8 triệu trở lên </li>
                  </div>
                </div>
                <div className="ml-[230px]">
                  <div className="flex items-center">
                    <img
                      src="https://priceinsouthafrica.com/wp-content/uploads/2021/06/Samsung-Galaxy-A22-5G-Price-in-South-Africa-1024x1024.jpg"
                      alt=""
                      className="w-[30px] h-[30px] mt-[20px]"
                    />
                    <div className="flex items-center list-none relative ml-[10px]">
                      <li> Samsung Galaxy A22 5G </li>
                      <span className="absolute top-[20px]"> 6.290.000 đ </span>
                    </div>
                  </div>
                  <div className="list-none flex items-center mt-[20px]">
                    <img
                      src="https://www.mobilebazar.com.bd/assets/img/Oppo-A55.jpg"
                      alt=""
                      className="w-[30px] h-[30px] mt-[10px]"
                    />
                    <div className="ml-[10px]">
                      <li> OPPO A55 4GB - 64GB </li>
                      <span className="absolute top-[120px] w-[100px]">
                        {" "}
                        4.990.000 đ{" "}
                      </span>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://images.fpt.shop/unsafe/fit-in/248x248/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/8/637772392778576314_F-H4_248x248.png"
                      alt=""
                      className="w-[80px] h-[80px] mt-[25px] ml-[10px]"
                    />
                  </div>
                </div>
              </div>
            </React.Fragment>
          }
        >
          <li className="text-white text-sm ml-2 mt-1 cursor-pointer">
            {" "}
            ĐIỆN THOẠI{" "}
          </li>
        </HtmlTooltip>
      </div>
      <div className="flex items-center text-white absolute ml-[440px]">
        <li className="cursor-pointer">
          {" "}
          <FaLaptop />{" "}
        </li>
        <HtmlTooltip
          title={
            <React.Fragment>
              <div className="w-[700px] flex border border-white bg-white">
                <div className="mt-[20px]">
                  <Typography color="inherit" className="w-[200px]">
                    {" "}
                    HÃNG SẢN XUẤT{" "}
                  </Typography>
                  <div>
                    <li>Apple (MacBook)</li>
                    <li>Acer</li>
                    <li>Dell</li>
                    <li>Fujitsu</li>
                  </div>
                  <div>
                    <li> Asus </li>
                    <li> MSI </li>
                    <li> Microsoft (surface) </li>
                    <li> Chuwi </li>
                  </div>
                  <div>
                    <li> HP </li>
                    <li> Nelovo </li>
                    <li> Gigabyte </li>
                    <li> Avita </li>
                  </div>
                </div>
                <div className="ml-[30px] mt-[20px]">
                  <Typography color="inherit" className="w-[200px]">
                    {" "}
                    Phần mềm{" "}
                  </Typography>
                  <div>
                    <li> Diệt Virus </li>
                    <li> Phần mềm khác </li>
                  </div>
                  <div>
                    <li> Microsoft Office </li>
                  </div>
                  <div>
                    <li> Windows </li>
                  </div>
                </div>
                <div className="ml-[420px] absolute w-[120px] mt-[20px]">
                  <Typography color="inherit"> MỨC GIÁ </Typography>
                  <div>
                    <li> Dưới 5 triệu </li>
                    <li> Từ 5-8 triệu </li>
                    <li> Từ 8-10 triệu </li>
                    <li> Từ 10 triệu trở lên </li>
                  </div>
                </div>
                <div className="ml-[130px] mt-[20px]">
                  <img
                    src="https://images.fpt.shop/unsafe/fit-in/248x248/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/21/637783691776655508_F-H4_248x248.png"
                    alt=""
                    className="w-[120px] h-[120px] "
                  />
                  <p className="text-center mt-[20px] text-[16px] text-orange-500">
                    {" "}
                    Maccbook Air 13{" "}
                  </p>
                </div>
              </div>
            </React.Fragment>
          }
        >
          <li className="text-white text-sm ml-2 mt-1 cursor-pointer">
            {" "}
            LAPTOP{" "}
          </li>
        </HtmlTooltip>
      </div>
      <div className="flex items-center text-white absolute ml-[545px]">
        <li className="cursor-pointer">
          {" "}
          <FaAppleAlt />{" "}
        </li>
        <HtmlTooltip
          title={
            <React.Fragment>
              <div className="w-[700px] flex border border-white bg-white">
                <div className="mt-[20px]">
                  <Typography color="inherit" className="w-[200px]">
                    {" "}
                    CÁC SẢN PHẨM APPLE{" "}
                  </Typography>
                  <div>
                    <li>iPhone</li>
                    <li>Apple Watch</li>
                    <li> Mac Mini </li>
                    <li>Apple TV</li>
                    <li>AirTag</li>
                  </div>
                  <div>
                    <li> iPad </li>
                    <li> Apple Tai nghe </li>
                    <li> Sạc & Cáp </li>
                    <li> Chuột & Trackpad </li>
                    <li> Hàng dự án </li>
                  </div>
                  <div>
                    <li> Macbook </li>
                    <li> iMac </li>
                    <li> Ốp lưng & Bao da </li>
                    <li> Bàn phím </li>
                  </div>
                </div>
                <div className="ml-[30px] mt-[20px]">
                  <Typography color="inherit" className="w-[200px]">
                    {" "}
                    Bán chạy nhất{" "}
                  </Typography>
                  <div className="flex items-center">
                    <img
                      src="https://priceinsouthafrica.com/wp-content/uploads/2021/06/Samsung-Galaxy-A22-5G-Price-in-South-Africa-1024x1024.jpg"
                      alt=""
                      className="w-[30px] h-[30px] mt-[20px]"
                    />
                    <div className="flex items-center list-none relative ml-[10px]">
                      <li> Samsung Galaxy A22 5G </li>
                      <span className="absolute top-[20px]"> 6.290.000 đ </span>
                    </div>
                  </div>
                  <div className="list-none flex items-center mt-[20px]">
                    <img
                      src="https://www.mobilebazar.com.bd/assets/img/Oppo-A55.jpg"
                      alt=""
                      className="w-[30px] h-[30px] mt-[10px]"
                    />
                    <div className="ml-[10px]">
                      <li> OPPO A55 4GB - 64GB </li>
                      <span className="absolute top-[160px] w-[100px]">
                        {" "}
                        4.990.000 đ{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="ml-[130px] mt-[20px]">
                  <img
                    src="https://images.fpt.shop/unsafe/fit-in/248x248/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/12/637775797317535731_F-H4_248x248.png"
                    alt=""
                    className="w-[120px] h-[120px] "
                  />
                  <p className="text-center mt-[20px] text-[16px] text-orange-500">
                    {" "}
                    Ipad Pro 11 M1{" "}
                  </p>
                </div>
              </div>
            </React.Fragment>
          }
        >
          <li className="text-white text-sm ml-2 mt-1 cursor-pointer">
            {" "}
            APPLE{" "}
          </li>
        </HtmlTooltip>
      </div>
      <div className="flex items-center text-white absolute ml-[650px]">
        <li className="cursor-pointer">
          {" "}
          <FaDesktop />{" "}
        </li>
        <HtmlTooltip
          title={
            <React.Fragment>
              <div className="list-none text-center text-[16px] bg-white">
                <li> PC </li>
                <li> Linh kiện </li>
                <li> Màn hình </li>
                <li> Xây dựng PC </li>
              </div>
            </React.Fragment>
          }
        >
          <li className="text-white text-sm ml-2 mt-1 cursor-pointer">
            {" "}
            PC - LINH KIỆN{" "}
          </li>
        </HtmlTooltip>
      </div>
      <div className="flex items-center text-white absolute ml-[810px]">
        <li className="cursor-pointer">
          {" "}
          <FaHeadphones />{" "}
        </li>
        <HtmlTooltip
          title={
            <React.Fragment>
              <div className="w-[700px] flex border border-white bg-white">
                <div className="mt-[20px]">
                  <Typography color="inherit" className="w-[250px]">
                    {" "}
                    CÁC SẢN PHẨM PHỤ KIỆN{" "}
                  </Typography>
                  <div>
                    <li>Router</li>
                    <li>Thẻ nhớ</li>
                    <li> Loa </li>
                    <li>Tai nghe</li>
                    <li>Balo - Túi xách</li>
                    <li>Phụ kiện khẩu trang lọc khí</li>
                  </div>
                  <div>
                    <li> Bao da ốp lưng </li>
                    <li> Phụ kiện Apple </li>
                    <li> USB - Ổ cứng </li>
                    <li> Chuột </li>
                    <li> TV BOX </li>
                    <li> Bàn phím </li>
                  </div>
                  <div>
                    <li> Sạc dự phòng </li>
                    <li> Miếng dán màn hình </li>
                    <li> Sạc cáp </li>
                    <li> Bàn ghế gaming </li>
                    <li> Phụ kiện khác </li>
                  </div>
                </div>
                <div className="ml-[30px] mt-[20px]">
                  <Typography color="inherit" className="w-[200px]">
                    {" "}
                    Bán chạy nhất{" "}
                  </Typography>
                  <div className="flex items-center">
                    <img
                      src="https://1.bp.blogspot.com/-jnJhNjuphiw/YKZ3kLrd9_I/AAAAAAAAVNI/G1CKdDFNUsU5K-kPv8tJaLBSYvCfAC5aACLcBGAsYHQ/s657/Mo-ta-san-pham-loa-bluetooth-i-value-f1265n-1.jpg"
                      alt=""
                      className="w-[30px] h-[30px] mt-[20px]"
                    />
                    <div className="flex items-center list-none relative ml-[10px]">
                      <li>
                        {" "}
                        Combo Loa Bluetooth Karaoke i.value F12-65N <br /> Nhựa
                        đen + Mic không dây{" "}
                      </li>
                      <span className="absolute top-[20px] mt-[25px]">
                        {" "}
                        1.395.000 đ{" "}
                      </span>
                    </div>
                  </div>
                  <div className="list-none flex items-center mt-[40px]">
                    <img
                      src="https://gimi.vn/upload/product/637140804126825269sacume11-1884.jpg"
                      alt=""
                      className="w-[30px] h-[30px] mt-[10px]"
                    />
                    <div className="ml-[10px]">
                      <li>
                        {" "}
                        Pin sạc dự phòng Quick Charge Li-polymer <br /> 10000mAH
                        UMETRAVEL TRIP10000{" "}
                      </li>
                      <span className="absolute top-[160px] w-[100px] mt-[43px]">
                        {" "}
                        390.000 đ{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-[250px] absolute ml-[200px]">
                  <img
                    src="https://images.fpt.shop/unsafe/fit-in/248x248/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/1/637765965983904759_PK%20DV%20H4.png"
                    alt=""
                    className="w-[80px] h-[80px] "
                  />
                </div>
              </div>
            </React.Fragment>
          }
        >
          <li className="text-white text-sm ml-2 mt-1 cursor-pointer">
            {" "}
            PHỤ KIỆN{" "}
          </li>
        </HtmlTooltip>
      </div>
      <div className="flex items-center text-white absolute ml-[930px]">
        <li className="cursor-pointer">
          {" "}
          <FaArrowRight />{" "}
        </li>
        <HtmlTooltip
          title={
            <React.Fragment>
              <div className="w-[760px] flex border border-white bg-white">
                <div className="mt-[20px]">
                  <Typography color="inherit"> HÃNG SẢN XUẤT </Typography>
                  <div>
                    <li>Apple (iPhone)</li>
                    <li>Xiaomi</li>
                    <li>Nokia</li>
                    <li>Vsmart</li>
                  </div>
                  <div>
                    <li> Samsung </li>
                    <li> Vivo </li>
                    <li> Masstel </li>
                  </div>
                  <div>
                    <li> OPPO </li>
                    <li> Tecno </li>
                    <li> Realme </li>
                  </div>
                </div>
                <div className="ml-[30px] mt-[20px]">
                  <Typography color="inherit"> ĐỒNG HỒ THÔNG MINH </Typography>
                  <div>
                    <li> Apple Watch </li>
                    <li> Masstel </li>
                    <li> Huawei </li>
                  </div>
                  <div>
                    <li> Samsung </li>
                    <li> Xiaomi </li>
                  </div>
                  <div>
                    <li> Oppo </li>
                    <li> Garmin </li>
                  </div>
                </div>
                <div className="ml-[420px] absolute w-[120px] mt-[20px]">
                  <Typography color="inherit"> MỨC GIÁ </Typography>
                  <div>
                    <li> Dưới 2 triệu </li>
                    <li> Từ 2-4 triệu </li>
                    <li> Từ 6-8 triệu </li>
                    <li> Từ 8 triệu trở lên </li>
                  </div>
                </div>
                <div className="ml-[230px]">
                  <div className="flex items-center">
                    <img
                      src="https://priceinsouthafrica.com/wp-content/uploads/2021/06/Samsung-Galaxy-A22-5G-Price-in-South-Africa-1024x1024.jpg"
                      alt=""
                      className="w-[30px] h-[30px] mt-[20px]"
                    />
                    <div className="flex items-center list-none relative ml-[10px]">
                      <li> Samsung Galaxy A22 5G </li>
                      <span className="absolute top-[20px]"> 6.290.000 đ </span>
                    </div>
                  </div>
                  <div className="list-none flex items-center mt-[20px]">
                    <img
                      src="https://www.mobilebazar.com.bd/assets/img/Oppo-A55.jpg"
                      alt=""
                      className="w-[30px] h-[30px] mt-[10px]"
                    />
                    <div className="ml-[10px]">
                      <li> OPPO A55 4GB - 64GB </li>
                      <span className="absolute top-[120px] w-[100px]">
                        {" "}
                        4.990.000 đ{" "}
                      </span>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://images.fpt.shop/unsafe/fit-in/248x248/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/8/637772392778576314_F-H4_248x248.png"
                      alt=""
                      className="w-[80px] h-[80px] mt-[25px] ml-[10px]"
                    />
                  </div>
                </div>
              </div>
            </React.Fragment>
          }
        >
          <li className="text-white text-sm ml-2 mt-1 cursor-pointer">
            {" "}
            MÁY CŨ GIÁ RẺ{" "}
          </li>
        </HtmlTooltip>
      </div>
      <div className="flex items-center text-white absolute ml-[1088px]">
        <li className="cursor-pointer">
          {" "}
          <FaHouseUser />{" "}
        </li>
        <HtmlTooltip
          title={
            <React.Fragment>
              <div className="w-[760px] flex border border-white bg-white">
                <div className="mt-[20px]">
                  <Typography color="inherit"> HÃNG SẢN XUẤT </Typography>
                  <div>
                    <li>Apple (iPhone)</li>
                    <li>Xiaomi</li>
                    <li>Nokia</li>
                    <li>Vsmart</li>
                  </div>
                  <div>
                    <li> Samsung </li>
                    <li> Vivo </li>
                    <li> Masstel </li>
                  </div>
                  <div>
                    <li> OPPO </li>
                    <li> Tecno </li>
                    <li> Realme </li>
                  </div>
                </div>
                <div className="ml-[30px] mt-[20px]">
                  <Typography color="inherit"> ĐỒNG HỒ THÔNG MINH </Typography>
                  <div>
                    <li> Apple Watch </li>
                    <li> Masstel </li>
                    <li> Huawei </li>
                  </div>
                  <div>
                    <li> Samsung </li>
                    <li> Xiaomi </li>
                  </div>
                  <div>
                    <li> Oppo </li>
                    <li> Garmin </li>
                  </div>
                </div>
                <div className="ml-[420px] absolute w-[120px] mt-[20px]">
                  <Typography color="inherit"> MỨC GIÁ </Typography>
                  <div>
                    <li> Dưới 2 triệu </li>
                    <li> Từ 2-4 triệu </li>
                    <li> Từ 6-8 triệu </li>
                    <li> Từ 8 triệu trở lên </li>
                  </div>
                </div>
                <div className="ml-[230px]">
                  <div className="flex items-center">
                    <img
                      src="https://priceinsouthafrica.com/wp-content/uploads/2021/06/Samsung-Galaxy-A22-5G-Price-in-South-Africa-1024x1024.jpg"
                      alt=""
                      className="w-[30px] h-[30px] mt-[20px]"
                    />
                    <div className="flex items-center list-none relative ml-[10px]">
                      <li> Samsung Galaxy A22 5G </li>
                      <span className="absolute top-[20px]"> 6.290.000 đ </span>
                    </div>
                  </div>
                  <div className="list-none flex items-center mt-[20px]">
                    <img
                      src="https://www.mobilebazar.com.bd/assets/img/Oppo-A55.jpg"
                      alt=""
                      className="w-[30px] h-[30px] mt-[10px]"
                    />
                    <div className="ml-[10px]">
                      <li> OPPO A55 4GB - 64GB </li>
                      <span className="absolute top-[120px] w-[100px]">
                        {" "}
                        4.990.000 đ{" "}
                      </span>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://images.fpt.shop/unsafe/fit-in/248x248/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/1/8/637772392778576314_F-H4_248x248.png"
                      alt=""
                      className="w-[80px] h-[80px] mt-[25px] ml-[10px]"
                    />
                  </div>
                </div>
              </div>
            </React.Fragment>
          }
        >
          <li className="text-white text-sm ml-2 mt-1 cursor-pointer">
            {" "}
            HÀNG GIA DỤNG{" "}
          </li>
        </HtmlTooltip>
      </div>
      <div className="flex items-center text-white absolute ml-[1260px]">
        <li className="cursor-pointer">
          {" "}
          <FaSimCard />{" "}
        </li>
        <HtmlTooltip
          title={
            <React.Fragment>
              <div className="w-[540px] flex border border-white bg-white">
                <div className="mt-[20px]">
                  <Typography color="inherit"> HÃNG SẢN XUẤT </Typography>
                  <div>
                    <li>Apple (iPhone)</li>
                    <li>Xiaomi</li>
                    <li>Nokia</li>
                    <li>Vsmart</li>
                  </div>
                  <div>
                    <li> Samsung </li>
                    <li> Vivo </li>
                    <li> Masstel </li>
                  </div>
                  <div>
                    <li> OPPO </li>
                    <li> Tecno </li>
                    <li> Realme </li>
                  </div>
                </div>
                <div className="ml-[30px] mt-[20px]">
                  <Typography color="inherit"> ĐỒNG HỒ THÔNG MINH </Typography>
                  <div>
                    <li> Apple Watch </li>
                    <li> Masstel </li>
                    <li> Huawei </li>
                  </div>
                  <div>
                    <li> Samsung </li>
                    <li> Xiaomi </li>
                  </div>
                  <div>
                    <li> Oppo </li>
                    <li> Garmin </li>
                  </div>
                </div>
                <div className="ml-[420px] absolute w-[120px] mt-[20px]">
                  <Typography color="inherit"> MỨC GIÁ </Typography>
                  <div>
                    <li> Dưới 2 triệu </li>
                    <li> Từ 2-4 triệu </li>
                    <li> Từ 6-8 triệu </li>
                    <li> Từ 8 triệu trở lên </li>
                  </div>
                </div>
              </div>
            </React.Fragment>
          }
        >
          <li className="text-white text-sm ml-2 mt-1 cursor-pointer">
            {" "}
            SIM & THẺ{" "}
          </li>
        </HtmlTooltip>
      </div>
      <div className="flex items-center text-white absolute ml-[1390px]">
        <li className="cursor-pointer">
          {" "}
          <FaStar />{" "}
        </li>
        <HtmlTooltip
          title={
            <React.Fragment>
              <div className="list-none text-center text-[16px] w-[250px] bg-white">
                <li> Thông tin trao thưởng </li>
                <li> Tất cả khuyến mãi </li>
              </div>
            </React.Fragment>
          }
        >
          <li className="text-white text-sm ml-2 mt-1 cursor-pointer">
            {" "}
            KHUYẾN MÃI{" "}
          </li>
        </HtmlTooltip>
      </div>
      <div className="flex items-center text-white absolute ml-[1535px]">
        <li className="cursor-pointer">
          {" "}
          <FaPercent />{" "}
        </li>
        <HtmlTooltip
          title={
            <React.Fragment>
              <div className="w-[360px] flex border border-white bg-white">
                <div className="mt-[20px]">
                  <Typography color="inherit"> HÃNG SẢN XUẤT </Typography>
                  <div>
                    <li>Apple (iPhone)</li>
                    <li>Xiaomi</li>
                    <li>Nokia</li>
                    <li>Vsmart</li>
                  </div>
                  <div>
                    <li> Samsung </li>
                    <li> Vivo </li>
                    <li> Masstel </li>
                  </div>
                  <div>
                    <li> OPPO </li>
                    <li> Tecno </li>
                    <li> Realme </li>
                  </div>
                </div>
                <div className="ml-[30px] mt-[20px]">
                  <Typography color="inherit"> ĐỒNG HỒ THÔNG MINH </Typography>
                  <div>
                    <li> Apple Watch </li>
                    <li> Masstel </li>
                    <li> Huawei </li>
                  </div>
                  <div>
                    <li> Samsung </li>
                    <li> Xiaomi </li>
                  </div>
                  <div>
                    <li> Oppo </li>
                    <li> Garmin </li>
                  </div>
                </div>
              </div>
            </React.Fragment>
          }
        >
          <li className="text-white text-sm ml-2 mt-1 cursor-pointer">
            {" "}
            TRẢ GÓP 0%{" "}
          </li>
        </HtmlTooltip>
      </div>
    </div>
  );
};

export default Navbar;
