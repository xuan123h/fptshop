// import RegisterHook from "./components/form/RegisterHook";
//   {/* <RegisterHook></RegisterHook> */}

import { Fragment, useState } from "react";
// import Modal from "./components/modal/Modal";
import Home from "./FptShop/pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./FptShop/components/Product";
import Products from "./FptShop/components/Products";
import Detail from "./FptShop/pages/Detail";
import Cart from "./FptShop/pages/Cart";
import Checkout from "./FptShop/pages/Checkout";
import PromotionFeature from "./FptShop/features/PromotionFeature";
import DetailTop from "./FptShop/components/DetailTop";
import HighlightFeature from "./FptShop/features/HighlightFeature";
import ProductHighlightDetail from "./FptShop/components/ProductHighlightDetail";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/:id" element={<Product />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/detail" element={<Detail />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/user" element={<PromotionFeature />} />
          <Route exact path="/user/:id" element={<DetailTop />} />
          <Route exact path="/mobilephone" element={<HighlightFeature />} />
          <Route
            exact
            path="/mobilephone/:id"
            element={<ProductHighlightDetail />}
          />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
