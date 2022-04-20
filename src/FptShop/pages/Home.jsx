import React from "react";
import Beautiful from "../components/Beautiful";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hot from "../components/Hot";
import ImageFor from "../components/ImageFor";
import ImageOne from "../components/ImageOne";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import SliderSlick from "../components/SliderSlick";
import HighlightFeature from "../features/HighlightFeature";
import InformationFeature from "../features/InformationFeature";
import PromotionFeature from "../features/PromotionFeature";
import ModalList from "../hooks/ModalList";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <SliderSlick></SliderSlick>
      <InformationFeature></InformationFeature>
      <PromotionFeature></PromotionFeature>
      <ImageOne></ImageOne>
      <HighlightFeature></HighlightFeature>
      <ImageFor></ImageFor>
      <Hot></Hot>
      <Beautiful></Beautiful>
      <Products></Products>
      <Footer></Footer>
      <ModalList></ModalList>
    </div>
  );
};

export default Home;
