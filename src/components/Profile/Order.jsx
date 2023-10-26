import axios from "axios";
import { useEffect, useState } from "react";

export const Order = () => {
  const [orderItems, setOrderItems] = useState([]);
  useEffect(() => {
    axios
      .get(`https://ecommerce.phpv8.aait-d.com/website/order`, {
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "Accept-language": "en",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setOrderItems(res.data.available_status);
        console.log(res);
      });
  }, []);
  return (
    <>
      <div className="p-2">
        <div>
          { orderItems.map((item)=>(
            <button 
              key={item.key}
              className="uppercase text-white bg-primary m-[.2rem] px-[.5rem] py-[.2rem] rounded-md"
            >
              {item.value}
            </button>
          ))
          }
        </div>
        <div>
          <div v-for="order in 3" key="order.id" className="p-2">
            <div>
              <div className="flex items-center justify-between">
                <p className="text-[1rem] text-black font-[600]">Order</p>
                <h4 className="text-[1rem] text-primary font-[600]">Price</h4>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[.8rem] text-grayDark font-[600]">Data</p>
              <h4 className="text-[.8rem] text-grayDark font-[600]">
                Shipping
              </h4>
            </div>
            <div className="flex items-center justify-between">
              <p>image</p>
              <div className="flex items-center justify-between">
                <button className="text-black bg-white border-[1px] m-[.2rem] px-[.5rem] py-[.2rem] rounded-md">
                  Details
                </button>
                <button className="text-white bg-primary m-[.2rem] px-[.5rem] py-[.2rem] rounded-md">
                  Repeat Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
