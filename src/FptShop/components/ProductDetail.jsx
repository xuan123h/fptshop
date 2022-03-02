import React, { useState } from "react";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import Header from "./Header";
import { addCart } from "../redux/action";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(
        `https://61dba40d4593510017aff960.mockapi.io/product/${id}`
      );
      // console.log(response);
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
      <>
        <Header />
        <div className="mt-[60px] w-[1300px] h-[840px] border border-white bg-white ml-[325px] flex items-center relative">
          <div className="top-[30px] ml-[20px] absolute">
            <h2 className="w-[840px] h-[32px] text-[#212529] text-[24px] ml-[20px] font-bold">
              {" "}
              {product.name}{" "}
            </h2>
            <img
              src={product.image}
              alt={product.name}
              className="mt-[30px] w-[585px] h-[390px]"
            />
            <div className="ml-[30px] mt-[30px] font-semibold">
              <li className="w-[370px] h-[24px] text-[#495057] text-[16px]">
                {" "}
                {product.cpu}{" "}
              </li>
              <li className="w-[370px] h-[24px] text-[#495057] text-[16px]">
                {" "}
                {product.mobile}{" "}
              </li>
              <li className="w-[370px] h-[24px] text-[#495057] text-[16px]">
                {" "}
                {product.ram}{" "}
              </li>
              <li className="w-[370px] h-[24px] text-[#495057] text-[16px]">
                {" "}
                {product.hdd}{" "}
              </li>
            </div>
          </div>
          <div className="absolute top-[40px] left-[700px]">
            <div className="list-none flex items-center">
              <li className="mt-[6px] absolute font-bold">{product.star}</li>
              <p className="w-[14px] h-[15px] ml-[30px] text-orange-500">
                {" "}
                <FaStar />{" "}
              </p>
              <p className="w-[14px] h-[15px] text-orange-500 ml-[4px]">
                {" "}
                <FaStar />{" "}
              </p>
              <p className="w-[14px] h-[15px] text-orange-500 ml-[4px]">
                {" "}
                <FaStar />{" "}
              </p>
              <p className="w-[14px] h-[15px] text-orange-500 ml-[4px]">
                {" "}
                <FaStar />{" "}
              </p>
              <p className="w-[14px] h-[15px] text-orange-500 ml-[4px]">
                {" "}
                <FaStar />{" "}
              </p>
            </div>
            <div className="list-none flex items-center mt-[16px] font-semibold">
              <li className="w-[250px] h-[40px] text-[#CB1C22] text-[32px]">
                {new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "VND",
                }).format(product.price01)}
              </li>
              <li className="w-[182px] h-[40px] text-[#CB1C22]  text-[22px] line-through ml-[80px]">
                {" "}
                {product.price02}{" "}
              </li>
            </div>
            <div className="list-none mt-[28px] flex items-center font-medium">
              <li className="w-[180px] h-[20px] text-[#444B52]">
                {" "}
                {product.size01}{" "}
              </li>
              <li className="w-[180px] h-[20px] text-[#444B52] ml-[15px]">
                {" "}
                {product.size02}{" "}
              </li>
              <li className="w-[180px] h-[20px] text-[#444B52] ml-[15px]">
                {" "}
                {product.size03}{" "}
              </li>
            </div>
            <div className="flex items-center list-none mt-[28px] font-medium">
              <li>
                {" "}
                <img
                  src={product.color01}
                  alt=""
                  className="w-[36px] h-[36px] ml-[15px]"
                />{" "}
                Màu xám{" "}
              </li>
              <li className="ml-[20px]">
                {" "}
                <img
                  src={product.color02}
                  alt=""
                  className="w-[36px] h-[36px] ml-[15px]"
                />{" "}
                Màu bạc{" "}
              </li>
            </div>
            <div className="flex items-center mt-[90px]">
              <button
                className="w-[285px] h-[61px] bg-[#CB1C22] p-2 text-white"
                onClick={() => addProduct(product)}
              >
                {" "}
                MUA NGAY{" "}
              </button>
              <button className="w-[285px] h-[61px] bg-[#0664F9] p-2 text-[white] ml-[10px]">
                {" "}
                TỚI GIỎ HÀNG{" "}
              </button>
            </div>
          </div>
          <div className="absolute top-[650px] left-[50px]">
            <h4 className="w-[665px] h-[28px] text-[#212529] text-[20px] font-bold">
              {" "}
              Đặc điểm nổi bật của Ipad Pro 11 2021 M1 Wi-Fi 128GB{" "}
            </h4>
            <p className="w-[665px] h-[68px] text-[#495057] text-[16px] mt-[30px] font-semibold">
              {" "}
              {product.description}{" "}
            </p>
          </div>
        </div>
      </>
    );
  };
  return <>{loading ? <Loading /> : <ShowProduct />}</>;
};

export default ProductDetail;
