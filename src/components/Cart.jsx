import { NavLink } from "react-router-dom";
import cartempty from "../assets/images/cartempty.png";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./common/Loading";
import { useCart } from "../utils/cart";

export const Cart = () => {
  const BASE_URL = "https://ecommerce.phpv8.aait-d.com/website/";
  const cart = useCart();

  const [cartItems, setCartItems] = useState([]);
  const [count_of_cart, setCount_of_cart] = useState(0);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    axios
      .get(`${BASE_URL}cart`, {
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "Accept-language": "en",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data.data.items);
        setCount_of_cart(res.data.count_of_cart);
        setCartItems(res);
        console.log(cartItems);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]);

  return (
    <>
      {count_of_cart == 0 ? (
        <div className="container mx-auto">
          <div className="flex flex-col justify-between items-center pt-5 pb-5">
            <div>
              <img className="max-h-[10rem]" src={cartempty} alt="emptycart" />
            </div>
            <h5 className="text-[1rem] pb-2">Wishlist is empty!</h5>
            <h6 className="text-[.9rem] pb-2">let's do some shopping</h6>
            <NavLink
              className="bg-primary px-[.8rem] py-[.4rem] rounded-md text-white"
              to="/"
            >
              Back To Home
            </NavLink>
          </div>
        </div>
      ) : (
        <div className="container mx-auto">
          <div className="grid-cols-12">
            <div className="sm:col-span-12 md:col-span-8">
              <div className="flex justify-between items-center pt-5 pb-5">
                <h5 className="italic text-[1.1rem] font-[400]">
                  Shopping Cart
                </h5>
                <NavLink to="/products" className="text-[.8rem] text-gray">
                  Continue Shopping
                </NavLink>
              </div>
              <h6>Item Summary()</h6>
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Image</span>
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Product
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Qty
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems?.data?.data?.items.map((item) => (
                      <tr
                        key={item?.product_details?.id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <td className="w-32 p-4">
                          <img
                            src={item?.product_details?.image}
                            alt="item.name"
                          />
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                          {item.name}
                        </td>
                        <td className="px-6 py-4">
                          <h6 className="text-center">{item.quantity}</h6>
                          <div className="flex items-center space-x-3">
                            <button
                              className="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                              type="button"
                            >
                              <span className="sr-only">Quantity button</span>
                              <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 2"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M1 1h16"
                                />
                              </svg>
                            </button>
                            <div>
                              <input
                                type="number"
                                id="first_product"
                                className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="1"
                                required
                              />
                            </div>
                            <button
                              className="inline-flex items-center justify-center h-6 w-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                              type="button"
                            >
                              <span className="sr-only">Quantity button</span>
                              <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 18"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M9 1v16M1 9h16"
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                          {item.price}
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => {
                              cart.RemoveFromCart(item.id);
                              setRefresh(!refresh);
                            }}
                            className="bg-sale px-[.8rem] py-[.4rem] rounded-md text-white mt-2 mx-auto"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              cart.RemoveAllCart();
              setRefresh(!refresh);
            }}
            className="bg-sale px-[.8rem] py-[.4rem] rounded-md text-white mt-2 "
          >
            Delete All Items
          </button>
        </div>
      )}
    </>
  );
};
