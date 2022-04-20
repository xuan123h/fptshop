import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import Header from "./Header";
import { Link } from "react-router-dom";

import Slider from "react-slick";
const Product = () => {
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
        `https://61dba40d4593510017aff960.mockapi.io/products/${id}`
      );
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  // react-slick
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const Loading = () => {
    return <>Loading ...</>;
  };
  const ShowProduct = () => {
    return (
      <>
        <Header></Header>
        <div className="flex items-center w-[1300px] h-[1450px] border border-white bg-white ml-[335px] mt-[100px]">
          <div className="absolute top-[140px] left-[200px]">
            <h3 className="text-[20px] absolute top-[55px] left-[260px] font-medium">
              {" "}
              Trang chủ / {product.category}{" "}
            </h3>
            <h2 className="w-[440px] h-[32px] text-[#212529] text-[24px] ml-[20px] font-bold absolute top-[100px] left-[230px]">
              {" "}
              {product.name}{" "}
            </h2>
            <img
              src={product.image}
              alt={product.name}
              className="w-[400px] h-[400px] mt-[200px] ml-[210px]"
            />
            <div className="absolute top-[599px] left-[280px] font-semibold">
              <li className="w-[370px] h-[24px] text-[#495057] text-[16px]">
                {product.cpu}
              </li>
              <li className="w-[370px] h-[24px] text-[#495057] text-[16px]">
                {product.mobile}
              </li>
              <li className="w-[370px] h-[24px] text-[#495057] text-[16px]">
                {product.ram}
              </li>
              <li className="w-[370px] h-[24px] text-[#495057] text-[16px]">
                {product.hdd}
              </li>
            </div>
          </div>
          <div className="ml-[700px] absolute top-[200px]">
            <div className="flex items-center absolute top-[100px]">
              <span className="w-[199px] h-[40px] text-[#CB1C22] text-[32px]">
                {new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "VND",
                }).format(product.price01)}
              </span>
              <span className="w-[199px] h-[40px] text-[#CB1C22] text-[22px] line-through ml-[60px] mt-[5px]">
                {" "}
                {product.price02}{" "}
              </span>
            </div>
            <div className="flex items-center list-none absolute top-[200px]">
              <li className="w-[292px] h-[52px] font-semibold">
                {" "}
                {product.size01}{" "}
              </li>
              <li className="w-[292px] h-[52px] font-semibold">
                {" "}
                {product.size02}{" "}
              </li>
            </div>
            <div className="flex items-center list-none absolute top-[290px]">
              <li className="font-medium">
                {" "}
                <img
                  src={product.color01}
                  alt={product.name}
                  className="w-[36px] h-[36px]"
                />{" "}
                Xám
              </li>
              <li className="ml-[20px] font-medium">
                {" "}
                <img
                  src={product.color02}
                  alt={product.name}
                  className="w-[36px] h-[36px]"
                />{" "}
                Xanh
              </li>
              <li className="ml-[20px] font-medium">
                {" "}
                <img
                  src={product.color03}
                  alt={product.name}
                  className="w-[36px] h-[36px]"
                />{" "}
                Bạc
              </li>
            </div>
            <div className="flex items-center mt-[400px]">
              <button
                className="w-[200px] h-[60px] bg-black text-white"
                onClick={() => addProduct(product)}
              >
                {" "}
                Thêm vào giỏ hàng{" "}
              </button>
              <button className="w-[200px] h-[60px] bg-orange-600 text-white ml-[20px] ">
                <Link to="/cart"> Xem giỏ hàng</Link>
              </button>
            </div>
          </div>
          <div className="absolute top-[920px] left-[400px]">
            <h2 className="w-[665px] h-[28px] text-[#212529] text-[20px] font-bold">
              {" "}
              Đặc điểm nổi bật của {product.name}{" "}
            </h2>
            <div className="w-[1000px] h-[900px]">
              <Slider {...settings}>
                <div>
                  <img
                    src={product.image01}
                    alt={product.name}
                    className="w-[665px] h-[374px]"
                  />
                </div>
                <div>
                  <img
                    src={product.image02}
                    alt={product.name}
                    className="w-[665px] h-[374px]"
                  />
                </div>
                <div>
                  <img
                    src={product.image03}
                    alt={product.name}
                    className="w-[665px] h-[374px]"
                  />
                </div>
                <div>
                  <img
                    src={product.image04}
                    alt={product.name}
                    className="w-[665px] h-[374px]"
                  />
                </div>
                <div>
                  <img
                    src={product.image05}
                    alt={product.name}
                    className="w-[665px] h-[374px]"
                  />
                </div>
              </Slider>
            </div>
            <b className="w-[665px] h-[92px] text-[#495057] text-[16px] absolute top-[500px]">
              {" "}
              {product.description}{" "}
            </b>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;
