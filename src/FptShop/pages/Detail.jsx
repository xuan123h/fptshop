// khi đi vào trang chi tiết sản phẩm thì khi nhấn vào nút mua hàng thì sẽ cớ show ra modal về giỏ hàng mà mình đã mua
import React from "react";
import DetailBetween from "../components/DetailBetween";
import DetailBonus from "../components/DetailBonus";
import DetailBottom from "../components/DetailBottom";
import DetailTop from "../components/DetailTop";
import FooterDetail from "../components/FooterDetail";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Detail = () => {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <DetailTop></DetailTop>
      <DetailBetween></DetailBetween>
      <DetailBottom></DetailBottom>
      <DetailBonus></DetailBonus>
      <FooterDetail></FooterDetail>
      {/* <Modal></Modal> */}
    </>
  );
};

export default Detail;
