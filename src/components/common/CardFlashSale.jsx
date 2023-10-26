import { NavLink } from "react-router-dom";
import thunderSaleImg from "../../assets/images/thunder-icon.png";
import cartImg from "../../assets/images/cart0.png";
import { useCart } from "../../utils/cart";
export const CardFlashSale = (props) => {
  const cart = useCart();
  const item = props.item;
  return (
    <div className="crad rounded p-2 flex flex-col">
      <div className="relative ">
        <img
          src={item.flash_sale_product?.product_details[0]?.images[0]?.url}
          alt="card-image"
          className="object-cover rounded-[1rem]  w-full max-h-[25rem] min-h-[25rem]"
        />
        <div className="absolute rounded top-0 bg-yellow p-3">
          <img src={thunderSaleImg} alt="icon" />
          <span className="text-[12px]">
            {Math.trunc(
              item?.flash_sale_product?.product_details[0]?.have_sale.percentage
            )}
            %
          </span>
        </div>
      </div>
      <div className="pt-[5px]">
        <NavLink to="`/products/${item.flash_sale_product.id}`">
          <p className="text-gray text-[1rem] font-[600]">
            {item.flash_sale_product.product_details[0].name}
          </p>
        </NavLink>
        <div className="mt-1">
          <span className="text-gray text-[14px] font-[600]">
            {item.flash_sale_product.product_details[0].have_sale.price_after}
            {item.flash_sale_product.product_details[0].currency}
          </span>
          <span className="text-gray px-2 text-[12px] line-through">
            {item.flash_sale_product.product_details[0].currency}
            {item.flash_sale_product.product_details[0].price}
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center mt-auto">
        <div className="block bg-yellow h-auto font-[600] rounded text-[12px] px-[5px] w-9/12">
          Out of Stock
          {item.flash_sale_product.product_details[0].quantity}
        </div>
        <button
          onClick={() =>
            cart.addToCart(item.flash_sale_product.product_details[0])
          }
        >
          <img src={cartImg} alt="cart" />
        </button>
      </div>
    </div>
  );
};
