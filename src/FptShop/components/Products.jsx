import React, { useEffect, useState } from "react";
import ProductRender from "./ProductRender";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(
        "https://61dba40d4593510017aff960.mockapi.io/products"
      );
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
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

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5 mt-[100px] ml-[320px] w-[700px]">
          <button
            className="btn btn-outline-dark me-2 font-bold text-orange-800"
            onClick={() => setFilter(data)}
          >
            Tất cả
          </button>
          <button
            className="btn btn-outline-dark me-2 ml-[40px] font-bold text-green-800"
            onClick={() => filterProduct("MacBook")}
          >
            MacBook
          </button>
          <button
            className="btn btn-outline-dark me-2 ml-[40px] font-bold text-gray-800"
            onClick={() => filterProduct("Acer")}
          >
            Acer
          </button>
          <button
            className="btn btn-outline-dark me-2 ml-[40px] font-bold text-purple-800"
            onClick={() => filterProduct("MSI")}
          >
            MSI
          </button>
          <button
            className="btn btn-outline-dark me-2 ml-[40px] font-bold text-orange-800"
            onClick={() => filterProduct("ASUS")}
          >
            ASUS
          </button>
          <button
            className="btn btn-outline-dark me-2 ml-[40px] font-bold text-green-800"
            onClick={() => filterProduct("HP")}
          >
            HP
          </button>
          <button
            className="btn btn-outline-dark me-2 ml-[40px] font-bold text-gray-800"
            onClick={() => filterProduct("Microsoft")}
          >
            Microsoft
          </button>
          <button
            className="btn btn-outline-dark me-2 ml-[40px] font-bold text-orange-800"
            onClick={() => filterProduct("Lenovo")}
          >
            Lenovo
          </button>
        </div>
        <ul className="flex items-center w-[1200px] h-[100px] flex-wrap">
          {filter.map((product) => (
            <li key={product.id} className="w-[300px] ml-[100px] mt-[20px]">
              <ProductRender product={product} />
            </li>
          ))}
        </ul>
      </>
    );
  };
  return (
    <div className="w-[1280px] h-[2000px] border border-white bg-white ml-[335px] absolute mt-[40px]">
      <div className="mt-[20px] ml-[30px]">
        <h2 className="w-[650px] h-[26px] text-blue-900 text-[20px] font-bold ">
          LAPTOP BÁN CHẠY
        </h2>
        <hr />
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Products;
