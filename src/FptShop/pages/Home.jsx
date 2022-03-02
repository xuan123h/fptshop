import React from "react";
import Beautiful from "../components/Beautiful";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hot from "../components/Hot";
import ImageFor from "../components/ImageFor";
import ImageOne from "../components/ImageOne";
import Navbar from "../components/Navbar";
import ProductBonus from "../components/ProductBonus";
import Products from "../components/Products";
import SliderSlick from "../components/SliderSlick";
import Toggle from "../components/Toggle";
import HighlightFeature from "../features/HighlightFeature";
import InformationFeature from "../features/InformationFeature";
import PromotionFeature from "../features/PromotionFeature";
import ModalList from "../hooks/ModalList";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <Toggle></Toggle>
      <SliderSlick></SliderSlick>
      <InformationFeature></InformationFeature>
      <PromotionFeature></PromotionFeature>
      <ImageOne></ImageOne>
      <HighlightFeature></HighlightFeature>
      <ImageFor></ImageFor>
      <Hot></Hot>
      <Beautiful></Beautiful>
      <Products></Products>
      <ProductBonus></ProductBonus>
      <Footer></Footer>
      <ModalList></ModalList>
    </div>
  );
};

export default Home;
