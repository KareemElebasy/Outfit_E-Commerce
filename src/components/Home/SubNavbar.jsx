import { useState } from "react";
import searchIcon from "../../assets/images/Iconsearch.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/auth";
export const SubNavbar = () => {
  const [searchedValue, setSearchedValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchedValue) {
      navigate(`/search/${searchedValue}`);
      setSearchedValue("");
    }
  };
  return (
    <div className="container mx-auto p-2">
      <div className="bg-primary-light flex justify-between items-center">
        <div>Categories Types</div>
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            placeholder="Search..."
            value={searchedValue}
            onChange={(e) => setSearchedValue(e.target.value)}
            className="p-[5px] rounded-[5px] border-[2px] border-primary text-[12px]"
          />
          <button type="submit" className="mx-1 bg-primary p-[5px] rounded-[5px]">
            <img src={searchIcon} alt="searchicon" />
          </button>
        </form>
      </div>
    </div>
  );
};
