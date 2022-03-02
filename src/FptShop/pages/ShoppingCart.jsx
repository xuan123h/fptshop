import React from "react";
import HeaderMain from "../../components/HeaderMain";
import { AuthProvider } from "../components/context/auth-context";
import { GalleryProvider } from "../components/context/gallery-context";
import CartList from "../components/gallery/CartList";
import PhotoList from "../components/gallery/PhotoList";

const ShoppingCart = () => {
  return (
    <div>
      <AuthProvider>
        <GalleryProvider>
          <HeaderMain></HeaderMain>
          <PhotoList></PhotoList>
          <CartList></CartList>
        </GalleryProvider>
      </AuthProvider>
    </div>
  );
};

export default ShoppingCart;
