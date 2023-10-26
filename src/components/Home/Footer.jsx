import { NavLink } from "react-router-dom";
import footerLogo from "../../assets/images/f-logo.png";
import insta from "../../assets/images/insta.png";
import twitter from "../../assets/images/twitter.png";
import snapchat from "../../assets/images/snapchat.png";
import pfooter from "../../assets/images/pfooter.png";
import youtube from "../../assets/images/youtube.png";
import toktok from "../../assets/images/tiktok.png";
import fb from "../../assets/images/fb.png";

export const Footer = () => {
  return (
    <>
    <div className="container mx-auto pt-10 pb-10 p-5 ">
    <div className="grid gap-2 sm:grid-col-12 md:grid-cols-12 items-center mx-6">
      <div className="sm:col-sapn-12 md:col-span-6 lg:col-span-3 ">
        <NavLink  to="/">
          <img src={footerLogo} alt="footer-logo "
        /></NavLink>
        <p className="pt-5 text-[1.2rem]">Copyright 2022 All Rights Reserved</p>
      </div>
      <div className="sm:col-sapn-12 md:col-span-6 lg:col-span-3">
        <h4 className="text-[1.2rem] font-[600] italic pb-2">Company Info</h4>
        <ul>
          <li className="text-[.9rem] text-gray-500 pb-1">
            <NavLink to="/">About Us</NavLink>
          </li>
          <li className="text-[.9rem] text-gray-500 pb-1">
            <NavLink to="/">How to Shop</NavLink>
          </li>
          <li className="text-[.9rem] text-gray-500 pb-1">
            <NavLink to="/">FAQS</NavLink>
          </li>
          <li className="text-[.9rem] text-gray-500 pb-1">
            <NavLink to="/">Terms of Service</NavLink>
          </li>
        </ul>
      </div>
      <div className="sm:col-sapn-12 md:col-span-6 lg:col-span-3">
        <h4 className="text-[1.2rem] italic font-[600] pb-2">Help & Support</h4>
        <ul>
          <li className="text-[.9rem] text-gray-500 pb-1">
            <NavLink to="/">Returns</NavLink>
          </li>
          <li className="text-[.9rem] text-gray-500 pb-1">
            <NavLink to="/">Contact Us</NavLink>
          </li>
          <li className="text-[.9rem] text-gray-500 pb-1">
            <NavLink to="/">Size Guide</NavLink>
          </li>
          <li className="text-[.9rem] text-gray-500 pb-1">
            <NavLink to="/">Returns Policy</NavLink>
          </li>
        </ul>
      </div>
      <div className="sm:col-sapn-12 md:col-span-6 lg:col-span-3">
        <h4 className="text-[1.2rem] italic font-[600] pb-2">Newsletter</h4>
        <div className="flex flex-wrap items-center gap-2">
          <input
            type="text"
            placeholder="Your Email Here"
            className="p-[5px] my-2 rounded-[5px] border-[2px] border-primary text-[12px]"
          />
          <button className="bg-primary text-white p-[5px] rounded-[5px]">
            Subscribe
          </button>
        </div>
        <h6 className="pt-[1rem]  font-[600]">Download the App</h6>
      </div>
    </div>
    <hr className="w-2/4 mx-auto mt-4" />
    <div className="flex justify-center pt-10">
      <NavLink to="/" className="px-5"
        ><img src={insta} alt="insta"
      /></NavLink>
      <NavLink to="/" className="px-5"
        ><img src={twitter}alt="twiter"
      /></NavLink>
      <NavLink to="/" className="px-5"
        ><img src={snapchat} alt="snapchat"
      /></NavLink>
      <NavLink to="/" className="px-5"
        ><img src={pfooter} alt="pfoteer"
      /></NavLink>
      <NavLink to="/" className="px-5"
        ><img src={youtube} alt="youtube"
      /></NavLink>
      <NavLink to="/" className="px-5"
        ><img src={toktok} alt="tiktok"
      /></NavLink>
      <NavLink to="/" className="px-5"
        ><img src={fb} alt="fb"
      /></NavLink>
    </div>
  </div>

    </>
  );
};
