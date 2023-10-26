// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Home/Navbar";
import { Login } from "./components/auth/Login";
import { Footer } from "./components/Home/Footer";
import { SignUp } from "./components/auth/SignUp";
import { Profile } from "./components/Profile";
import { AuthProvider } from "./utils/auth";
import { VerifyCode } from "./components/auth/VerifyCode";
import { SubNavbar } from "./components/Home/SubNavbar";
import { SearchFeed } from "./components/common/SearchFeed";
import { Wishlist } from "./components/Wishlist";
import { Cart } from "./components/Cart";
import { CartProvider } from "./utils/cart";
import { Order } from "./components/Profile/Order";
import { WishList } from "./components/Profile/WishList";
import { Gifts } from "./components/Profile/Gifts";
import { Reviews } from "./components/Profile/Reviews";

export const App = () => {
  return (
    <>
      <AuthProvider>
        <CartProvider>
        <BrowserRouter>
          <Navbar />
          <SubNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/verify" element={<VerifyCode />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile/>}>
              <Route path="orders" element={<Order/>}/>
              <Route path="wishlist" element={<WishList/>}/>
              <Route path="gifts" element={<Gifts/>}/>
              <Route path="reviews" element={<Reviews/>}/>
            </Route>
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search/:searchedValue" element={<SearchFeed />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </>
  );
};
