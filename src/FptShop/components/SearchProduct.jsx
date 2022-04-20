import React, { useState, useEffect } from "react";

const SearchProduct = () => {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState(data);
  const [loading, setLoading] = useState(false);
  let ComponentMounted = true;

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(
        "https://61dba40d4593510017aff960.mockapi.io/product"
      );
      if (ComponentMounted) {
        setData(await response.clone().json());
        setProduct(await response.json());
        setLoading(false);
      }
      return () => {
        ComponentMounted = false;
      };
    };
    getProduct();
  }, []);
  const Loading = () => {
    return <>Loading ...</>;
  };
  // const ShowProduct = () => {
  //   return (
  //     <>
  //       <ul className="ml-[800px] mt-[200px] text-red-600 font-bold">
  //         {product
  //           .filter((val) => {
  //             if (searchProduct == "") {
  //               return null;
  //             } else if (
  //               val.name.toLowerCase().includes(searchProduct.toLowerCase())
  //             ) {
  //               return val;
  //             }
  //           })
  //           .map((val, key) => {
  //             return (
  //               <div key={key}>
  //                 <div>
  //                   <img src={val.image} alt={val.name} />
  //                   <p> {val.name} </p>
  //                   <div>
  //                     {new Intl.NumberFormat("de-DE", {
  //                       style: "currency",
  //                       currency: "VND",
  //                     }).format(val.price01)}
  //                     <span> {val.price02} </span>
  //                     <div className="flex items-center">
  //                       <img src={val.promotion01} alt={val.name} />
  //                       <img
  //                         src={val.promotion02}
  //                         alt={val.name}
  //                         className="ml-[50px]"
  //                       />
  //                     </div>
  //                     <p className="w-[200px]">{val.promotion03}</p>
  //                   </div>
  //                 </div>
  //               </div>
  //             );
  //           })}
  //       </ul>
  //     </>
  //   );
  // };
  const [searchProduct, setSearchProduct] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Nhập sản phẩm mà bạn muốn tìm kiếm"
        onChange={(event) => {
          setSearchProduct(event.target.value);
        }}
        className="absolute top-[60px] left-[800px] w-[400px] h-[60px] p-4 outline-none"
      />
      {/* {loading ? <Loading /> : <ShowProduct />} */}
    </div>
  );
};

export default SearchProduct;
