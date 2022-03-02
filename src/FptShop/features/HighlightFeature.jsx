import React, { useEffect, useState } from "react";
import ProductHighlight from "../components/ProductHighlight";

const HighlightFeature = () => {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(
        "https://61dba40d4593510017aff960.mockapi.io/mobilephone"
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
      <>
        <ul className="flex items-center ml-[34px] mt-[30px] flex-wrap ">
          {products.map((productHighlight) => (
            <li
              key={productHighlight.id}
              className="w-[300px] mb-[80px] border border-white bg-yellow-100 h-[530px] ml-[5px] rounded-[10px] hover:bg-neutral-200 hover:-translate-y-3 transition-all delay-100"
            >
              <ProductHighlight productHighlight={productHighlight} />
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <div className="mt-[400px] ml-[330px] w-[1300px] h-[1322px] border border-white bg-white relative">
      <div className="flex items-center justify-between">
        <h2 className="w-[280px] h-[26px] text-green-900 text-[20px] font-bold mt-[20px] ml-[30px]">
          {" "}
          ĐIỆN THOẠI NỔI BẬT{" "}
        </h2>
        <p className="w-[87px] h-[13px] text-[#0168FA] text-[14px] mr-[300px] font-semibold absolute left-[1170px] mt-[20px]">
          {" "}
          Xem tất cả{" "}
        </p>
      </div>
      {loading ? <Loading /> : <ShowProducts />}
    </div>
  );
};

export default HighlightFeature;
