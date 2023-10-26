import { useEffect, useState } from "react";
import isFavImg from "../../assets/images/heart.png";
import NotFavImg from "../../assets/images/wishlisticon.png";
import { useCart } from "../../utils/cart";
function Card(props) {
  const reload = props.reload;
  const cart = useCart();
  // const item = props.item;
  const [item, setItem] = useState(props.item);

  useEffect(() => {}, []);
  return (
    <>
      <div className="crad rounded p-2 flex flex-col">
        <div className="relative">
          <img
            src={item?.product_details[0]?.images[0]?.url}
            alt="card-image"
            className="object-cover rounded-[1rem] w-full min-h-[25rem] max-h-[25rem]"
          />
          <button
            onClick={() => {
              cart.addToWhishlist(item.product_details[0].id);
              reload()
            }}
            className="absolute rounded bottom-1 right-1"
          >
            {!item.product_details[0].is_fav ? (
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
              {item.product_details[0].price}
              {item.product_details[0].currency}
            </span>
            <span className="text-white p-1 rounded bg-gray text-[14px]">
              Top Rated
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
