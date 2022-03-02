import React, { useEffect, useState } from "react";
import ProductFetch from "./ProductFetch";

const ProductBonus = () => {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(
        "https://61dba40d4593510017aff960.mockapi.io/product"
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

  const Loading = () => {
    return <>Loading ...</>;
  };
  const ShowProducts = () => {
    return (
      <>
        <ul className="flex items-center">
          {products.map((productFetch) => (
            <li
              key={productFetch.id}
              className="ml-[15px] mt-[30px] w-[300px] h-[550px] border border-orange-400"
            >
              <ProductFetch productFetch={productFetch} />
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <>
      <div className="absolute z-50 mt-[2090px] w-[1285px] h-[689px] border border-white bg-white ml-[330px]">
        <div className="mt-[40px] ml-[30px]">
          <h2 className="w-[281px] h-[26px] text-red-900 text-[20px] font-bold uppercase">
            Tablet giảm đến 10%++
          </h2>
        </div>
        <div>{loading ? <Loading /> : <ShowProducts />}</div>
      </div>
    </>
  );
};

export default ProductBonus;
