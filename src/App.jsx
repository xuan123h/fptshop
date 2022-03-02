// import RegisterHook from "./components/form/RegisterHook";
//   {/* <RegisterHook></RegisterHook> */}

import { Fragment, useState } from "react";
// import Modal from "./components/modal/Modal";
import Home from "./FptShop/pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import DropdownPortal from "./components/dropdown/DropdownPortal";
// import Tooltip from "./components/tooltip/Tooltip";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./FptShop/components/Product";
// import Register from "./FptShop/components/register";
// import Lognin from "./FptShop/components/lognin";
import Products from "./FptShop/components/Products";
import Detail from "./FptShop/pages/Detail";
import Success from "./FptShop/components/Success";
import ShoppingCart from "./FptShop/pages/ShoppingCart";
import Cart from "./FptShop/pages/Cart";
import ProductBonus from "./FptShop/components/ProductBonus";
import ProductDetail from "./FptShop/components/ProductDetail";
import Checkout from "./FptShop/pages/Checkout";
import PromotionFeature from "./FptShop/features/PromotionFeature";
import DetailTop from "./FptShop/components/DetailTop";
import HighlightFeature from "./FptShop/features/HighlightFeature";
import ProductHighlightDetail from "./FptShop/components/ProductHighlightDetail";
import SearchProduct from "./FptShop/components/SearchProduct";
function App() {
  // const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      {/* <div className="relative z-0">
        <Modal open={showModal} handleClose={() => setShowModal(false)}></Modal>
      </div>
      <button
        className="p-4 text-white bg-blue-500 rounded-md"
        onClick={() => setShowModal(true)}
      >
        {" "}
        Show modal{" "}
      </button>
      <div className="relative z-30">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, officia
        quidem non ut possimus accusamus aut dolor autem, inventore asperiores
        consequuntur eius maxime veniam totam, officiis explicabo iusto aliquam
        rem.
      </div>
      {/* <div className="overflow-hidden">
        <DropdownPortal></DropdownPortal>
      </div> */}
      {/* <div className="p-16 mt-16 ml-16 overflow-hidden">
        <Tooltip text="Hover me"> This is a tooltip content </Tooltip>
      </div>{" "}
      */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/:id" element={<Product />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/detail" element={<Detail />} />
          <Route exact path="/success" element={<Success />} />
          <Route exact path="/shopping-cart" element={<ShoppingCart />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/user" element={<PromotionFeature />} />
          <Route exact path="/user/:id" element={<DetailTop />} />
          <Route exact path="/mobilephone" element={<HighlightFeature />} />
          <Route
            exact
            path="/mobilephone/:id"
            element={<ProductHighlightDetail />}
          />

          <Route exact path="/product" element={<ProductBonus />} />
          <Route exact path="/product/:id" element={<ProductDetail />} />

          <Route exact path="/search" element={<SearchProduct />} />
          {/* <Route exact path="/register" element={<Register />} /> */}
          {/* <Route exact path="/login" element={<Lognin />} /> */}
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
