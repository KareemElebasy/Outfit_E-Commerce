import arrowImg from "../../assets/images/arrow-right.png";
import cardImg from "../../assets/images/cart0.png";
import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import editImg from "../../assets/images/edit-profile.png"
import axios from "axios";
import Loading from "../common/Loading";
const BASE_URL = "https://ecommerce.phpv8.aait-d.com/website/";

export const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [userProfile, setUserProfile] = useState({});
  useEffect(() => {
    axios
      .get(`${BASE_URL}profile`, {
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "Accept-language": "en",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setUserProfile(res.data.data);
        console.log(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-12">
          <div className="md:col-span-4 sm:col-span-12">
            <div className="flex justify-between items-center">
              <div className="px-1">
                <img
                  src={userProfile?.avatar}
                  alt="profile-image"
                  className="w-full"
                />
              </div>
              <div>
                <h4>{userProfile.fullname}</h4>
                <h5 className="text-gray">
                  {userProfile?.phone_code}
                  {userProfile?.phone}
                </h5>
              </div>
              <button>
                <img
                  src={editImg}
                  alt="profile-edit"
                />
              </button>
            </div>
            <div>
              <NavLink
                to="orders"
                className="flex justify-between items-center text-gray border-gray-light border-b-[1px] pt-4 pb-4"
              >
                <div className="flex items-center gap-2">
                  <img src={cardImg} alt="orders" />
                  <h4>Orders</h4>
                </div>
                <img src={arrowImg} alt="arrow" />
              </NavLink>
              <NavLink
                to="wishlist"
                className="flex justify-between items-center text-gray border-gray-light border-b-[1px] pt-4 pb-4"
              >
                <div className="flex items-center gap-2">
                  <img src={cardImg} alt="orders" />
                  <h4>Wishlist</h4>
                </div>
                <img src={arrowImg} alt="arrow" />
              </NavLink>
              <NavLink
                to="gifts"
                className="flex justify-between items-center text-gray border-gray-light border-b-[1px] pt-4 pb-4"
              >
                <div className="flex items-center gap-2">
                  <img src={cardImg} alt="orders" />
                  <h4>Gift & Voucher</h4>
                </div>
                <img src={arrowImg} alt="arrow" />
              </NavLink>
              <NavLink
                to="reviews"
                className="flex justify-between items-center text-gray border-gray-light border-b-[1px] pt-4 pb-4"
              >
                <div className="flex items-center gap-2">
                  <img src={cardImg} alt="orders" />
                  <h4>My Reviews</h4>
                </div>
                <img src={arrowImg} alt="arrow" />
              </NavLink>
              <NavLink
                to="/"
                className="flex justify-between items-center text-gray border-gray-light border-b-[1px] pt-4 pb-4"
              >
                <div className="flex items-center gap-2">
                  <img src={cardImg} alt="orders" />
                  <h4>My Wallet</h4>
                </div>
                <img src={arrowImg} alt="arrow" />
              </NavLink>

              <NavLink
                to="/"
                className="flex justify-between items-center text-red-700 border-gray-light border-b-[1px] pt-4 pb-4"
              >
                <div className="flex items-center gap-2">
                  <img src={cardImg} alt="orders" />
                  <h4>Delete My Account</h4>
                </div>
                <img src={arrowImg} alt="arrow" />
              </NavLink>
              <NavLink
                to="/"
                className="flex justify-between items-center text-red-700 border-gray-light border-b-[1px] pt-4 pb-4"
              >
                <div className="flex items-center gap-2">
                  <img src={cardImg} alt="orders" />
                  <h4>Log Out</h4>
                </div>
                <img src={arrowImg} alt="arrow" />
              </NavLink>
            </div>
          </div>
          <div className="md:col-span-8 sm:col-span-12">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};
