import React, { useEffect, useState } from "react";
import {
  FaMobile,
  FaServer,
  FaDesktop,
  FaCircleNotch,
  FaCar,
  FaStar,
  // FaTrash,
} from "react-icons/fa";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import DetailBetween from "./DetailBetween";
import Header from "./Header";
import FooterDetail from "./FooterDetail";
import DetailBottom from "./DetailBottom";
import DetailBonus from "./DetailBonus";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

// React Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DetailTop = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  // React Toastify
  const notify = () =>
    toast("🦄 Bạn đã thêm sản phẩm vào giỏ hàng thành công", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(
        `https://61dba40d4593510017aff960.mockapi.io/user/${id}`
      );
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return <>Loading ...</>;
  };
  const ShowProduct = () => {
    return (
      <div className="h-[930px] w-[1360px] border border-white bg-white ml-[310px] mt-[50px] relative list-none">
        <div className="text-[14px] text-[#0664F9] w-[400px] h-[20px] ml-[10px] mt-[20px] font-extralight">
          {product.category}
        </div>
        <div>
          <div>
            <h2 className="w-[840px] h-[46px] text-[#212529] text-[24px] ml-[10px] mt-[12px] font-bold">
              {product.name}
            </h2>
            <div className="flex items-center">
              <li className="w-[88px] h-[18px] text-[#99A2AA] text-[13px] absolute left-[317px] top-[87px]">
                {product.nameId}
              </li>
              <div className="flex items-center left-[850px] absolute top-[57px]">
                <li className="w-[95px] h-[19px] flex text-orange-400">
                  <p>
                    {" "}
                    <FaStar />{" "}
                  </p>
                  <p>
                    {" "}
                    <FaStar />{" "}
                  </p>
                  <p>
                    {" "}
                    <FaStar />{" "}
                  </p>
                  <p>
                    {" "}
                    <FaStar />{" "}
                  </p>
                  <p>
                    {" "}
                    <FaStar />{" "}
                  </p>
                </li>
                <li className="w-[72px] h-[40px] text-[#0168FA] text-[14px] absolute ml-[100px] mt-[20px]">
                  {product.star} Đánh giá
                </li>
              </div>
              <div className="flex items-center absolute left-[1070px] top-[55px]">
                <li className="w-[4px] h-[40px] text-[#444B52] text-[14px]">
                  {" "}
                  |{" "}
                </li>
                <li className="w-[95px] h-[40px] text-[#0168FA] text-[14px] ml-[8px]">
                  {product.question} Hỏi & đáp
                </li>
              </div>
              <div className="flex items-center absolute left-[1210px] top-[55px]">
                <li className="absolute top-[0px]"> + </li>
                <li className="w-[68px] h-[40px] text-[#0168FA] text-[14px] ml-[22px]">
                  {" "}
                  So sánh{" "}
                </li>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <div className="absolute w-[600px] top-[140px] ml-[20px]">
                <Slider {...settings}>
                  <div>
                    <img
                      src={product.image01}
                      alt={product.name}
                      className="w-full h-[400px] object-contain"
                    />
                  </div>
                  <div>
                    <img
                      src={product.image02}
                      alt={product.name}
                      className="w-full h-[400px] object-contain"
                    />
                  </div>
                  <div>
                    <img
                      src={product.image03}
                      alt={product.name}
                      className="w-full h-[400px] object-contain"
                    />
                  </div>
                  <div>
                    <img
                      src={product.image04}
                      alt={product.name}
                      className="w-full h-[400px] object-contain"
                    />
                  </div>
                  <div>
                    <img
                      src={product.image05}
                      alt={product.name}
                      className="w-full h-[400px] object-contain"
                    />
                  </div>
                </Slider>
              </div>
              <div className="absolute top-[630px] w-[585px] h-[180px] border border-gray-400 ml-[10px] bg-green-100">
                <div className="flex items-center mt-[20px] ml-[20px]">
                  <li className="w-[9px] h-[17px] text-gray-700">
                    {" "}
                    <FaMobile />{" "}
                  </li>
                  <li className="w-[357px] h-[24px] text-[#495057] text-[16px] ml-[20px] mt-[3px]">
                    {product.mobile}
                  </li>
                </div>
                <div className="flex items-center mt-[30px] ml-[20px]">
                  <li className="w-[17px] h-[17px] text-gray-700">
                    {" "}
                    <FaServer />{" "}
                  </li>
                  <li className="w-[136px] h-[24px] text-[#495057] text-[16px] ml-[20px]">
                    {product.cpu}
                  </li>
                </div>
                <div className="flex items-center mt-[30px] ml-[20px]">
                  <li className="w-[17px] h-[17px] text-gray-700">
                    {" "}
                    <FaDesktop />{" "}
                  </li>
                  <li className="w-[52px] h-[24px] text-[#495057] text-[16px] ml-[20px]">
                    {product.desktop}
                  </li>
                </div>
              </div>
              <div className="absolute top-[840px] flex items-center">
                <div className="flex items-center ml-[20px]">
                  <li className="w-[16px] h-[20px] text-orange-400">
                    {" "}
                    <FaCircleNotch />{" "}
                  </li>
                  <li className="w-[276px] h-[20px] text-[#444B52] text-[14px] ml-[10px]">
                    {" "}
                    Hàng chính hãng - bảo hành 12 Tháng{" "}
                  </li>
                </div>
                <div className="flex items-center ml-[70px]">
                  <li className="w-[20px] h-[20px] text-orange-400">
                    {" "}
                    <FaCar />{" "}
                  </li>
                  <li className="w-[153px] h-[20px] text-[#444B52] text-[14px] ml-[10px]">
                    {" "}
                    Giao hàng toàn quốc{" "}
                  </li>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-center absolute left-[650px]">
                <li className="w-[212px] h-[40px] text-[#CB1C22] text-[32px] mt-[50px] font-medium">
                  {new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "VND",
                  }).format(product.price01)}
                </li>
                <li className="text-[#555555] text-[14px] w-[300px] h-[14px] absolute left-[550px]">
                  {" "}
                  Trả góp chỉ từ <br /> 2.220.500đ/tháng{" "}
                </li>
              </div>
              <div className="absolute flex items-center left-[660px] top-[250px] font-semibold">
                <div>
                  <div className="w-[63px] h-[20px] text-[#444B52] text-[14px]">
                    <input type="radio" name="two" id="" />
                    <span className="ml-[10px] absolute">
                      {" "}
                      {product.size01}{" "}
                    </span>
                  </div>
                  <p className="w-[99px] h-[20px] text-[#444B52] text-[14px]">
                    {new Intl.NumberFormat("de-DE", {
                      style: "currency",
                      currency: "VND",
                    }).format(product.price01)}
                  </p>
                </div>
                <div className="ml-[70px]">
                  <div className="w-[63px] h-[20px] text-[#444B52] text-[14px]">
                    <input type="radio" name="two" id="" />
                    <span className="ml-[10px] absolute">
                      {" "}
                      {product.size02}{" "}
                    </span>
                  </div>
                  <p className="w-[99px] h-[20px] text-[#444B52] text-[14px]">
                    {new Intl.NumberFormat("de-DE", {
                      style: "currency",
                      currency: "VND",
                    }).format(product.price01 * 1.001)}
                  </p>
                </div>
                <div className="ml-[70px]">
                  <div className="w-[63px] h-[20px] text-[#444B52] text-[14px]">
                    <input type="radio" name="two" id="" />
                    <span className="ml-[10px] absolute">
                      {" "}
                      {product.size03}{" "}
                    </span>
                  </div>
                  <p className="w-[99px] h-[20px] text-[#444B52] text-[14px]">
                    {new Intl.NumberFormat("de-DE", {
                      style: "currency",
                      currency: "VND",
                    }).format(product.price01 * 1.006)}
                  </p>
                </div>
                <div className="ml-[70px]">
                  <div className="w-[46px] h-[20px] text-[#444B52] text-[14px]">
                    <input type="radio" name="two" id="" />
                    <span className="ml-[10px] absolute">
                      {" "}
                      {product.size04}{" "}
                    </span>
                  </div>
                  <p className="w-[99px] h-[20px] text-[#444B52] text-[14px]">
                    {new Intl.NumberFormat("de-DE", {
                      style: "currency",
                      currency: "VND",
                    }).format(product.price01 * 1.1)}
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute top-[330px] left-[670px] flex items-center ">
              <div>
                <img
                  src={product.color01}
                  alt={product.name}
                  className="w-[36px] h-[36px] hover:border border-orange-300 cursor-pointer bg-orange-400"
                />
                <li className="w-[44px] h-[20px] text-[#495057] text-[15px] mt-[5px]">
                  {" "}
                  Vàng{" "}
                </li>
              </div>
              <div className="ml-[30px]">
                <img
                  src={product.color02}
                  alt={product.name}
                  className="w-[36px] h-[36px] hover:border border-orange-300 cursor-pointer bg-orange-400"
                />
                <li className="w-[44px] h-[20px] text-[#495057] text-[15px] mt-[5px]">
                  {" "}
                  Xanh{" "}
                </li>
              </div>
              <div className="ml-[30px]">
                <img
                  src={product.color03}
                  alt={product.name}
                  className="w-[36px] h-[36px] hover:border border-orange-300 cursor-pointer bg-orange-400"
                />
                <li className="w-[44px] h-[20px] text-[#495057] text-[15px] mt-[5px]">
                  {" "}
                  Xám{" "}
                </li>
              </div>
              <div className="ml-[30px]">
                <img
                  src={product.color04}
                  alt={product.name}
                  className="w-[36px] h-[36px] hover:border border-orange-300 cursor-pointer bg-orange-400"
                />
                <li className="w-[44px] h-[20px] text-[#495057] text-[15px] mt-[5px] ml-[4px]">
                  {" "}
                  Bạc{" "}
                </li>
              </div>
            </div>
            <div className="w-[585px] h-[40px] text-[#212529] text-[14px] p-2 absolute left-[650px] top-[430px] border border-gray-400 bg-green-300">
              <h4 className="font-semibold">
                {" "}
                Chọn 1 trong 2 khuyến mãi sau :{" "}
              </h4>
              <div className="w-[583px] h-[130px] border border-gray-400 bg-orange-200 absolute left-[0px] top-[40px]">
                <div className="w-[97px] h-[20px] mt-[30px] flex items-center font-medium ">
                  <input
                    type="radio"
                    name="three"
                    id=""
                    className="w-[16px] h-[16px]"
                  />
                  <li className="w-[123px] h-[20px] text-[#444B52] text-[14px] ml-[30px] absolute">
                    {" "}
                    Trả góp 0%{" "}
                  </li>
                </div>
                <div className="w-[281px] h-[20px] flex items-center mt-[30px] font-medium ">
                  <input
                    type="radio"
                    name="three"
                    id=""
                    className="w-[16px] h-[16px]"
                  />
                  <li className="w-[337px] h-[20px] text-[#444B52] text-[14px] absolute ml-[30px]">
                    {" "}
                    Lì xì ngay 3.000.000đ áp dụng đến hết năm 2021{" "}
                  </li>
                </div>
              </div>
            </div>
            <div className="w-[585px] h-[61px] bg-[#CB1C22] p-[10px] absolute top-[640px] left-[650px]">
              {" "}
              <button
                className="w-[105px] h-[22px] text-[#FFFFFF] text-[20px] left-[240px] absolute"
                color="primary"
                onClick={() => addProduct(product)}
              >
                <p onClick={notify}>MUA NGAY</p>
              </button>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
              <li className="w-[517px] h-[13px] text-[#FFFFFF] text-[13px] absolute mt-[24px] ml-[150px]">
                {" "}
                Giao hàng miễn phí hoặc nhận tại shop{" "}
              </li>
            </div>
            <div className="absolute top-[740px] left-[650px] flex items-center">
              <div className="w-[290px] h-[61px] bg-[#0664F9] p-2">
                <li className="w-[144px] h-[26px] text-[#FFFFFF] text-[20px] ml-[67px]">
                  {" "}
                  TRẢ GÓP 0%{" "}
                </li>
                <p className="w-[222px] h-[13px] text-[#FFFFFF] text-[13px] ml-[39px]">
                  {" "}
                  Duyệt nhanh qua điện thoại{" "}
                </p>
              </div>
              <div className="w-[290px] h-[61px] bg-[#0664F9] p-2 ml-[5px]">
                <li className="w-[190px] h-[26px] text-[#FFFFFF] text-[20px] ml-[51px]">
                  {" "}
                  TRẢ GÓP QUA THẺ{" "}
                </li>
                <p className="w-[222px] h-[13px] text-[#FFFFFF] text-[13px] ml-[65px]">
                  {" "}
                  Visa,Master Card, JCB{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <DetailBetween product={product} />
        <DetailBottom product={product} />
        <DetailBonus product={product} />
      </div>
    );
  };

  return (
    <>
      <Header />
      {loading ? <Loading /> : <ShowProduct />}
      <FooterDetail />
    </>
  );
};

export default DetailTop;
