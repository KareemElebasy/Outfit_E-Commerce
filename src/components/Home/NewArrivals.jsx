import { NavLink } from "react-router-dom";
import Card from "../common/Card";

function NewArrivals(props) {
  const items = props.new_arrivals_highlights.data;
  console.log(items);
  return (
    <>
      <div className="container mx-auto mt-[5rem] mb-[2rem]">
        <div className="flex justify-between p-2">
          <h5 className="text-[2rem] font-[300] italic">New Arrivals</h5>
          <NavLink to="/">View All</NavLink>
        </div>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 mx-6">
        {items?.map((i) => (
          <Card key={i.id} item={i} />
        ))}
      </div>
    </>
  );
}

export default NewArrivals;
