import { createContext, useContext, useState } from "react";

const GalleryContext = createContext();

const fakeData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1645593911087-10e22bb6c555?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1139&q=80",
    isFavorite: false,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1645599551186-717c2ca6c8f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    isFavorite: false,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1645556341414-6de6c85dae67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    isFavorite: false,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1645552153173-92f3599ec979?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=741&q=80",
    isFavorite: false,
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1645596352869-1261b91bf853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    isFavorite: false,
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1645592241237-3b05af6c194f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    isFavorite: false,
  },
];

function GalleryProvider(props) {
  const [photos, setPhotos] = useState(fakeData);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteList, setFavoriteList] = useState([]);

  // khi bam vao trai tim se co mau do
  // tim xem cai minh chon co giong ko , neu co thi minh se set lai gia tri cua no : dung id
  function toggleFavorite(photoId) {
    const updateedArray = photos.map((photo) => {
      if (photo.id === photoId) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setPhotos(updateedArray);
  }

  // lam chuc nang add to cart
  function addToCart(newItem) {
    // 3. Cap nhat lai state gio hang (cartItems)
    // su dung callback de lay cac chuc nang cua no
    // some kiem tra neu chir thoa 1 dieu kien thi no se thanh true
    setCartItems((prevItems) => {
      const isExisted = prevItems.some((item) => item.id === newItem.id);
      // setCartItems((prevItems) => [...prevItems, newItem]);
      if (isExisted) return [...prevItems];
      return [...prevItems, newItem];
    });
  }

  // tim cai san pham co id va loc , tim nhung cai ma ta khong chon den
  function removeFromCart(photoId) {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== photoId)
    );
  }

  const value = {
    photos,
    cartItems,
    favoriteList,
    setCartItems,
    setFavoriteList,
    setPhotos,
    toggleFavorite,
    addToCart,
    removeFromCart,
  };
  return (
    <GalleryContext.Provider value={value} {...props}></GalleryContext.Provider>
  );
}

function useGallery() {
  const context = useContext(GalleryContext);
  if (typeof context === "undefined")
    throw new Error("useGallery must be used with in a GalleryProvider");
  return context;
}
export { useGallery, GalleryProvider };
