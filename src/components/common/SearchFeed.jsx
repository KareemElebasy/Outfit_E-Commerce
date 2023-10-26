import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import heartImg from "../../assets/images/heart.png";

export const SearchFeed = () => {
  const [items, setItems] = useState([]);

  const { searchedValue } = useParams();
  console.log(searchedValue);
  useEffect(() => {
    axios
      .get(
        `https://ecommerce.phpv8.aait-d.com/website/products/search?name=${searchedValue}`,
        {
          headers: {
            "Accept-language": "en",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        setItems(res.data.data);
      })
      .catch((err) => console.log("Error IS " + err));
  }, [searchedValue]);
  return (
    <div className="container mx-auto">
      <h5 className="text-[1.5rem]">Search For {searchedValue} ... </h5>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 mx-6">
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className="crad rounded p-2 flex flex-col"
            >
              <div className="relative">
                <img
                  src={item.product_details[0].images[0].url}
                  alt="card-image"
                  className="object-cover rounded-[1rem] w-full min-h-[25rem] max-h-[25rem]"
                />
                <button className="absolute rounded bottom-1 right-1">
                  <img src={heartImg} alt="icon" />
                </button>
              </div>
              <NavLink to="`/products/${item.id}`">
                <p className="text-gray font-[600] text-[1rem] pt-2">
                  {item.product_details[0].name}
                </p>
              </NavLink>
              <div className="pt-[5px] mt-auto">
                <div className="flex justify-between mb-auto">
                  <span className="text-gray font-[600] text-[1rem]">
                    Egp {item.product_details[0].price}
                  </span>
                  <span className="text-white p-1 rounded bg-gray text-[14px]">
                    Top Rated
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col items-center">
        <div className="inline-flex mt-2 xs:mt-0">
          <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-primary rounded-l hover:bg-white hover:text-primary">
            Prev
          </button>
          <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-primary border-0 border-l border-gray-700 rounded-r hover:bg-white">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
