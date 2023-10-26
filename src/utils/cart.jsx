import axios from "axios";
import { createContext, useContext, useState } from "react";

const BASE_URL = "https://ecommerce.phpv8.aait-d.com/website/";
const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  //   add to cart
  const addToCart = async (data) => {
    try {
      const req = await axios.post(
        `${BASE_URL}cart`,
        {
          product_detail_id: data.id,
          quantity: 1,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            "Accept-language": "ar",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(req);
    } catch (error) {
      console.log(error);
    }
  };
  //   Remove Item
  const RemoveFromCart = async (id) => {
    try {
      const req = await axios.delete(
        `${BASE_URL}delete_item/${id}`,
        {
          product_detail_id: id,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            "Accept-language": "ar",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(req);
    } catch (error) {
      console.log(error);
    }
  };
  //   Remove All Items
  const RemoveAllCart = async () => {
    try {
      const req = await axios.delete(
        `${BASE_URL}delete_all_cart`,

        {
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            "Accept-language": "ar",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(req);
    } catch (error) {
      console.log(error);
    }
  };

  //   add to Wishlist
  const addToWhishlist = async (id) => {
    try {
      const req = await axios.post(
        `${BASE_URL}products/${id}/fav`,
        {
          product_detail_id: id,
          quantity: 1,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            "Accept-language": "ar",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CartContext.Provider
      value={{ addToCart, addToWhishlist, RemoveFromCart, RemoveAllCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
