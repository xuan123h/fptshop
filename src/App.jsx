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
import SignInPage from "./FptShop/pages/SignInPage";
import SignUpPage from "./FptShop/pages/SignUpPage";
import { AuthProvider } from "./FptShop/contexts/auth-context";
import Success from "./FptShop/components/Success";

function App() {
  return (
    <Fragment>
      <Router>
        <AuthProvider>
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
            <Route exact path="/sign-in" element={<SignInPage />} />
            <Route exact path="/sign-up" element={<SignUpPage />} />
            <Route exact path="/success" element={<Success />} />
          </Routes>
        </AuthProvider>
      </Router>
    </Fragment>
  );
}

export default App;
