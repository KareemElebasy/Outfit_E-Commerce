import { NavLink } from "react-router-dom";
import isFavImg from "../../assets/images/heart.png";
import NotFavImg from "../../assets/images/wishlisticon.png";
import cartempty from "../../assets/images/cartempty.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../../utils/cart";
export const WishList = () => {
  const BASE_URL = "https://ecommerce.phpv8.aait-d.com/website/";
  const cart = useCart();
  const [favs, setFavs] = useState([]);
  const [refreshData, setRefreshData] = useState(false);
  useEffect(() => {
    axios
      .get(`${BASE_URL}favourites`, {
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "Accept-language": "en",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setFavs(res.data.data);
        console.log(favs);
        setRefreshData(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refreshData]);
  return     <>
  {favs.length == 0 ? <div className="container mx-auto">
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
  </div>:
  <div className="container mx-auto">
    <h3 className="text-[1.2rem] italic p-2">Favorites</h3>
    <div className="grid md:grid-cols-4 sm:grid-cols-2">
      {favs.map((item) => (
        <div key={item.id} className="crad rounded p-2 flex flex-col">
          <div className="relative">
            <img
              src={item?.images[0]?.url}
              alt="card-image"
              className="object-cover rounded-[1rem] w-full min-h-[25rem] max-h-[25rem]"
            />
            <button
              onClick={() => {
                cart.addToWhishlist(item.id);
                setRefreshData(!refreshData);
              }}
              className="absolute rounded bottom-1 right-1"
            >
              {!item.is_fav ? (
                <img src={isFavImg} alt="icon" />
              ) : (
                <img src={NotFavImg} alt="icon" />
              )}
            </button>
          </div>
          <p className="text-black font-[700] py-[1rem] text-[1rem]">
            {item.name}
          </p>
          <div className="mt-auto">
            <div className="flex justify-between">
              <span className="text-gray text-[.9rem] font-[600]">
                {item.price}
                {item.currency}
              </span>
              <span className="text-white p-1 rounded bg-gray text-[14px]">
                Top Rated
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>}
</>;
};
