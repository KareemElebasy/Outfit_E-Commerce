import { NavLink } from "react-router-dom";
import Card from "../common/Card";

export const TopRated = (props) => {
  const items = props.top_rated.data;
  console.log(props);
  return (
    <>
      <div className="container mx-auto mt-[5rem] mb-[2rem]">
        <div className="flex justify-between p-2">
          <h5 className="text-[2rem] font-[300] italic">Top Rated</h5>
          <NavLink to="/">View All</NavLink>
        </div>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 mx-6">
        {items?.map((i) => (
          <Card key={i.id} item={i} reload={props.reload} />
        ))}
      </div>
    </>
  );
};
