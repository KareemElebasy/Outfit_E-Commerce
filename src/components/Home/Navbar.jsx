import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import profile from "../../assets/images/profile.png";
import liked from "../../assets/images/liked.png";
import cart from "../../assets/images/cart0.png";
import { useAuth } from "../../utils/auth";
import { useCart } from "../../utils/cart";
function Navbar() {
  const auth = useAuth();
  const cart_store = useCart()
  const isLogged = localStorage.getItem('token')
  return (
    <>
      <div className="bg-primary py-2 flex items-center justify-center gap-5">
        <p className="text-white text-[.8rem]">
          Buy 2 Get 1 Of Them <span className="text-[#FE6C4C]">50% Off</span>
        </p>
        <p className="text-white text-[.9rem]">
          <span className="text-[#FE6C4C]">22</span> h :
          <span className="text-[#FE6C4C]">25</span> m :
          <span className="text-[#FE6C4C]"></span> s
        </p>
      </div>
      <nav className="container bg-white h-[60px] flex items-center justify-between mx-auto px-[12px]">
        <button>Lang</button>
        <div>
          <NavLink to="/">
            <img className="w-full" src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="flex items-center justify-between">
          <NavLink to={isLogged ? "/profile/orders" : "/login"}>
            <img src={profile} alt="profile-image" />
          </NavLink>
          <NavLink className="px-[.8rem]" to="/wishlist">
            <img src={liked} alt="Liked-product" />
          </NavLink>
          <NavLink to="cart">
            <img src={cart} alt="card " />
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
