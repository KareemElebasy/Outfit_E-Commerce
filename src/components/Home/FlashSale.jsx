import { NavLink } from "react-router-dom";
import { CardFlashSale } from "../common/CardFlashSale";

export const FlashSale = (props) => {
  console.log(props.flash_sale.data.products);
  const items = props.flash_sale.data.products;
  return (
    <>
      <div className="container mx-auto mt-[5rem] mb-[2rem]">
        <div className="flex justify-between p-2">
          <h5 className="text-[2rem] font-[300] italic">Flash Sale</h5>
          <NavLink to="/">View All</NavLink>
        </div>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2">
        {items?.map((i) => (
          <CardFlashSale key={i.id} item={i} />
        ))}
      </div>
    </>
  );
};
