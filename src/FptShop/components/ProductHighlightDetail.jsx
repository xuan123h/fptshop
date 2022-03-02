import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addCart } from "../redux/action";
import FooterDetail2 from "./FooterDetail2";
import Header from "./Header";

const ProductHighlightDetail = () => {
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
        `https://61dba40d4593510017aff960.mockapi.io/mobilephone/${id}`
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
      <>
        <div className="w-[1355px] h-[800px] border border-white bg-white relative ml-[320px] mt-[60px] flex items-center">
          <div className="absolute top-[40px] left-[100px]">
            <h2 className="text-[20px] font-bold"> {product.name} </h2>
            <img
              src={product.image}
              alt={product.name}
              className="absolute top-[95px] w-[200px] h-[200px]"
            />
            <div className="absolute top-[350px] font-semibold text-red-400">
              <li> {product.cpu} </li>
              <li> {product.mobile} </li>
              <li> {product.ram} </li>
              <li> {product.hdd} </li>
            </div>
          </div>
          <div className="absolute top-[38px] left-[500px]">
            <div>
              <span className="text-[20px] font-bold text-red-500">
                {new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "VND",
                }).format(product.price01)}
              </span>
              <span className="ml-[80px] line-through">{product.price02}</span>
            </div>
          </div>
          <div className="absolute flex items-center left-[500px] top-[200px] font-semibold text-white">
            <button
              className="w-[200px] h-[60px] bg-red-400"
              onClick={() => addProduct(product)}
            >
              {" "}
              MUA NGAY{" "}
            </button>
            <button className="ml-[80px] w-[200px] h-[60px] bg-gray-400">
              {" "}
              XEM GIỎ HÀNG
            </button>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Header />
      {loading ? <Loading /> : <ShowProduct />}
      <FooterDetail2 />
    </>
  );
};

export default ProductHighlightDetail;
