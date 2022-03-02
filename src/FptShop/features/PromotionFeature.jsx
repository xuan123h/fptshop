import React, { useEffect, useState } from "react";
// import PromotionList from "../components/PromotionList";
import { FaCertificate } from "react-icons/fa";
import ProductFetch2 from "../components/ProductFetch2";

const PromotionFeature = () => {
  // api
  // https://61dba40d4593510017aff960.mockapi.io/user
  const [data, setData] = useState([]);
  const [products, setProducts] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(
        "https://61dba40d4593510017aff960.mockapi.io/user"
      );
      if (componentMounted) {
        setData(await response.clone().json());
        setProducts(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  // Loading
  const Loading = () => {
    return <>Loading ...</>;
  };
  const ShowProducts = () => {
    return (
      <ul className="flex items-center">
        {products.map((productFetch2) => (
          <li key={productFetch2.id}>
            <ProductFetch2 productFetch2={productFetch2} />
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div className="mt-[90px] w-[1280px] ml-[331px] h-[552px] border border-white bg-white">
      <div className="flex items-center ml-[30px] mt-[5px]">
        <li className="list-none w-[25px] h-[30px] text-gray-600 mt-5">
          <FaCertificate />
        </li>
        <h2 className="w-[280px] font-bold h-[26px] text-[#CD1817] text-[22px]">
          KHUYẾN MÃI HOT
        </h2>
      </div>
      {loading ? <Loading /> : <ShowProducts />}
    </div>
  );
};

export default PromotionFeature;
