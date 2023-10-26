import { TopRated } from "./TopRated";
import NewArrivals from "./NewArrivals";
import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../../utils/fetchApi";
import Loading from "../common/Loading";
import { FlashSale } from "./FlashSale";
import { FallCollection } from "./FallCollection";
import { MostOrder } from "./MostOrder";
import { InstagramSection } from "./InstagramSection";
import { SaleSection } from "./SaleSection";
import { CategorySection } from "./CategorySection";
import { HeroSection } from "./HeroSection";
// import { HeroSection } from "./HeroSection";

function Home() {
  const [loading, setLoading] = useState(true);
  const [shop_by_category, setShop_by_category] = useState([]);
  const [divided_slider, setDivided_slider] = useState([]);
  const [most_orders, setMost_orders] = useState([]);
  const [flash_sale, setFlash_sale] = useState([]);
  const [banner, setBanner] = useState([]);
  const [top_rated, setTop_rated] = useState([]);
  const [new_arrivals_highlights, setNew_arrivals_highlights] = useState([]);
  const [refresh, setRefresh] = useState(false);
const fetchData =()=>{
  fetchDataFromApi(`home`)
  .then((res) => {
    // slider
    setDivided_slider(
      res.data.find((item) => {
        return item.type == "divided_slider";
      })
    );
    // Category
    setShop_by_category(
      res.data.find((item) => item.type === "shop_by_category")
    );
    // Most Order
    setMost_orders(
      res.data.find((item) => {
        return item.type == "most_orders";
      })
    );
    // Flash Sale
    setFlash_sale(
      res.data.find((item) => {
        return item.type == "flash_sale";
      })
    );
    // Banner
    setBanner(
      res.data.find((item) => {
        return item.type == "banner";
      })
    );
    // top Rated
    setTop_rated(
      res.data.find((item) => {
        return item.type == "top_rated";
      })
    );
    // new_arrivals_highlights
    setNew_arrivals_highlights(
      res.data.find((item) => {
        return item.type == "new_arrivals_highlights";
      })
    );
    setLoading(false);
  })
  .catch((err) => {
    console.log(err);
  });
}
const reload=()=>{
  fetchData()
  // setRefresh(true)
}

  useEffect(() => {
    fetchData()
  }, []);

  console.log(shop_by_category);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h3 className="bg-black text-white">Home</h3>
          <HeroSection divided_slider={divided_slider} />
          <CategorySection shop_by_category={shop_by_category} />
          <FlashSale flash_sale={flash_sale} />
          <TopRated top_rated={top_rated} reload={reload} />
          <FallCollection banner={banner} />
          <MostOrder most_orders={most_orders} />
          <FallCollection banner={banner} />
          <NewArrivals new_arrivals_highlights={new_arrivals_highlights} />
          <InstagramSection />
          <SaleSection />
        </div>
      )}
    </>
  );
}

export default Home;
