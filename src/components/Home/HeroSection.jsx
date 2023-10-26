import { NavLink } from "react-router-dom";

export const HeroSection = (props) => {
  const items = props.divided_slider.data[0];
  console.log(props.divided_slider.data[0]);
  return (
    <div className="container mx-auto bg-white">
      <div className="grid gap-2 md:grid-cols-2 px-[8px]">
        <div className="my-auto">
          <h2 className="md:text-[2rem] italic pb-[5px] pt-[5px] text-[1rem]">
            {items?.name}
          </h2>
          <p className="md:text-[2.5rem] text-[2rem] uppercase font-[600] pb-[10px]">
            {items?.desc}
          </p>
          <NavLink
            className="block w-fit ms-auto italic text-[1.2rem] text-primary"
            to="/products"
          >
            Shop Now
          </NavLink>
        </div>
        <div>
          <img src={items?.image} alt={items?.desc} />
        </div>
      </div>
    </div>
  );
};
