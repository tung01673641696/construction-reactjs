import React, { useState } from "react";
// import SearchIcon from '@mui/icons-material/Search';
import DropdownCategory from "./DropdownCategory";
import "./Search.scss";
import search from "../../assets/images/home/search.svg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Search() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  return (
    <div className="search">
      <div className="search-category">
        <DropdownCategory />
      </div>
      <div className="search-input">
        <input
          type="text"
          placeholder="Tìm kiếm..."
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              if (name == "") {
                toast.error("Vui lòng nhập tên sản phẩm cần tìm");
                return;
              } else {
                navigate(
                  `/search/name=${name.toLowerCase()}&desc=false&page=1&size=12`
                );
              }
            }
          }}
        />
      </div>
      <div
        className="search-btn"
        onClick={() => {
          navigate(
            `/search/name=${name.toLowerCase()}&desc=false&page=1&size=12`
          );
        }}
      >
        <img src={search} alt="" />
      </div>
    </div>
  );
}

export default Search;
