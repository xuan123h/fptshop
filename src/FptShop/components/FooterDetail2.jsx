import React from "react";

const FooterDetail2 = () => {
  return (
    <div className="relative flex items-center list-none mt-[60px] ml-[313px] h-[283px] border border-white bg-white w-[1360px] ">
      <div className="absolute top-[50px] left-[15px] text-orange-700 text-[14px]">
        <li> Giới thiệu về công ty </li>
        <li className="mt-[10px]"> Câu hỏi thường gặp mua hàng </li>
        <li className="mt-[10px]"> Chính sách hoạt động </li>
        <li className="mt-[10px]"> Quy chế hoạt động </li>
        <li className="mt-[10px]"> Kiểm tra hóa đơn điện tử </li>
        <li className="mt-[10px]"> Tra cứu thông tin bảo hành </li>
      </div>
      <div className="absolute top-[50px] left-[290px] text-[#3399D2] text-[14px]">
        <li> Tin tuyển dụng </li>
        <li className="mt-[10px]"> Tin khuyến mãi </li>
        <li className="mt-[10px]"> Hướng dẫn mua online </li>
        <li className="mt-[10px]"> Hướng dẫn mua trả góp </li>
        <li className="mt-[10px]"> Chính sách trả góp </li>
      </div>
      <div className="absolute top-[50px] left-[510px] text-green-600 text-[14px]">
        <li> Hệ thống cửa hàng </li>
        <li className="mt-[10px]"> Hệ thống cửa hàng </li>
        <li className="mt-[10px]"> Bán hàng doanh nghiệp </li>
        <li className="mt-[10px]"> Giới thiệu máy đổi trả </li>
        <li className="mt-[10px]"> Chính sách đổi trả </li>
      </div>
      <div className="absolute top-[50px] left-[710px]">
        <li className="text-[#4A4A4A] text-[15px]">
          {" "}
          Tư vấn mua hàng (Miễn phí){" "}
        </li>
        <li className="text-[D0021B] text-[20px] font-medium">
          {" "}
          1800 6601 (Nhánh 1){" "}
        </li>
        <li className="text-[#4A4A4A] text-[15px]"> Hỗ trợ kỹ thuật </li>
        <li className="text-[D0021B] text-[20px] font-medium">
          {" "}
          1800 6601 (Nhánh 2){" "}
        </li>
        <li className="text-[#4A4A4A] text-[14px]"> Hỗ trợ thanh toán: </li>
        <div className="flex items-center mt-[30px]">
          <img
            src="http://www.pngall.com/wp-content/uploads/2017/05/Visa-Logo-PNG-Pic.png"
            alt=""
            className="w-[50px] h-[30px]"
          />
          <img
            src="https://www.techcombank.com.vn/zerofee4/ATM.png"
            alt=""
            className="w-[50px] h-[30px] ml-[20px]"
          />
        </div>
      </div>
      <div className="absolute top-[50px] left-[950px]">
        <li className="text-[#4A4A4A] text-[15px]">
          {" "}
          Góp ý, khiếu nại dịch vụ (8h00 - 22h00){" "}
        </li>
        <li className="text-[D0021B] text-[20px] font-medium"> 1800 6616 </li>
      </div>
      <p className="mt-[550px] w-[1886px] h-[35px] text-[#6D6D6D] text-[10px] bg-gray-200  border border-white">
        {" "}
        © 2007 - 2021 Công Ty Cổ Phần Bán Lẻ Kỹ Thuật Số FPT / Địa chỉ: 261 -
        263 Khánh Hội, P2, Q4, TP. Hồ Chí Minh / GPĐKKD số 0311609355 do Sở KHĐT
        TP.HCM cấp ngày 08/03/2012. GP số 47/GP-TTĐT do sở TTTT TP HCM cấp ngày
        02/07/2018. Điện thoại: (028)73023456. Email: fptshop@fpt.com.vn. Chịu
        trách nhiệm nội dung: Nguyễn Trịnh Nhật Linh.
      </p>
    </div>
  );
};

export default FooterDetail2;
