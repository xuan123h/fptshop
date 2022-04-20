import React, { useState } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
// Modal
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Header from "../components/Header";
import { Link } from "react-router-dom";
const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };
  const handleDel = (item) => {    dispatch(delCart(item));
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4 mt-[300px] ml-[100px] text-[22px] absolute">
          <div className="row">
            <h3 className="text-orange-600">
              Bạn chưa có sản phẩm nào trong giỏ hàng{" "}
            </h3>
            <button className="w-[300px] h-[60px] bg-red-400 text-white mt-[20px]">
              {" "}
              <Link to="/"> Quay về trang chủ </Link>
            </button>
          </div>
        </div>
      </div>
    );
  };
  const cartItems = (product) => {
    return (
      <>
        <div className="mt-[100px] ml-[331px] relative w-[1300px] h-[155px] border border-white bg-white rounded-lg">
          <div className="">
            <div className="flex items-center absolute top-7 left-[180px]">
              {/* <div className="absolute left-[100px]"> */}
              <img
                src={product.image}
                alt={product.title}
                height="100px"
                width="100px"
              />
              {/* </div> */}
              <div className="absolute left-[200px]">
                <h3 className="text-[18px] text-orange-500 w-[350px]">
                  {product.title}
                </h3>
                <button
                  className="text-black"
                  onClick={() => handleDel(product)}
                >
                  <FaMinus />
                </button>
                <span className="ml-7 text-[18px] text-orange-400 font-bold">
                  {product.qty} *{" "}
                  {new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "VND",
                  }).format(product.price01)}
                  =
                  {new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "VND",
                  }).format(product.qty * product.price01)}
                </span>
                <button
                  className="text-black ml-[20px] mt-[2px]"
                  onClick={() => handleAdd(product)}
                >
                  <FaPlus />
                </button>
                <div className="absolute flex items-center left-[550px] top-[10px] list-none">
                  <li
                    className="w-[10px] h-[12px] text-blue-500"
                    onClick={() => handleDel(product)}
                  >
                    {" "}
                    <Link to="/cart">
                      {" "}
                      <FaTrash />
                    </Link>{" "}
                  </li>
                  <li
                    className="w-[36px] h-[20px] text-[#939CA3] text-[12px] ml-[30px] mt-[10px] absolute cursor-pointer font-bold"
                    onClick={() => handleDel(product)}
                  >
                    <Link to="/cart"> Xóa</Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const buttons = () => {
    // const [totalCart, setTotalCart] = useState(33990000);
    // const [quantity, setQuantity] = useState(1);
    // const removeToCart = () => {
    //   if (quantity <= 1) return;
    //   const newQuantity = quantity - 1;
    //   setQuantity(newQuantity);
    // };
    // const addToCart = () => {
    //   const newQuantity = quantity + 1;
    //   setQuantity(newQuantity);
    // };
    return (
      <>
        <div className="container">
          <div className="absolute top-[1100px] left-[900px] w-[200px] h-[40px] bg-purple-800 text-white flex items-center justify-center cursor-pointer">
            <Button color="inherit">
              {" "}
              <Link to="/checkout"> Tiến hành đặt hàng</Link>{" "}
            </Button>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div>
        {state.length === 0 && emptyCart()}
        <div>
          <Header />
          {state.length !== 0 && state.map(cartItems)}
        </div>
        {state.length !== 0 && buttons()}
      </div>
    </>
  );
};

export default Cart;
