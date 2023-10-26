import { NavLink } from "react-router-dom";
import Card from "../common/Card";

export const MostOrder = (props) => {
  const items = props.most_orders.data;
  console.log(items);
  return (
    <>
      <div className="container mx-auto mt-[5rem] mb-[2rem]">
        <div className="flex justify-between p-2">
          <h5 className="text-[2rem] font-[300] italic">Most Orders</h5>
          <NavLink to="/">View All</NavLink>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 mx-6">
        {items?.map((i) => (
          <Card key={i.id} item={i} />
        ))}
      </div>
    </>
  );
};
