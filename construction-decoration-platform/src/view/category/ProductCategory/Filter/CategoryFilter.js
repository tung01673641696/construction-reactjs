import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import item from "../../../../assets/images/product/item.jpg";
import "./CategoryFilter.scss";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { listProductCategory } from "../../../../redux/reducers/category";
import { useNavigate } from "react-router-dom";

function CategoryFilter() {
  const params = useParams();
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const { id, page } = params;
  const { listproductCategory } = useSelector((state) => state.categoryReducer);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(listProductCategory({ id, page }));
  }, [page, id]);

  console.log("listproductCategory", listproductCategory);

  const selectValue = (value) => {
    let url = `/category/name=${params.name}&page=${params.page}&size=12&id=${params.id}&${value}=true`;
    navigate(url);
  };

  const [isActive, setIsActive] = useState(false);
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    if (isActive1 || isActive2) {
      setIsActive1(false);
      setIsActive2(false);
    }
    // if (arrange) {
    //   dispatch(listProductCategory({ id, page, arrange }));
    // }
    // if (!arrange) {
    //   dispatch(listProductCategory({ id, page }));
    // }
    dispatch(listProductCategory({ id, page }));
  };

  const handleClick1 = () => {
    setIsActive1(!isActive1);
    if (isActive || isActive2) {
      setIsActive(false);
      setIsActive2(false);
    }
  };

  const handleClick2 = () => {
    setIsActive2(!isActive2);
    if (isActive || isActive1) {
      setIsActive(false);
      setIsActive1(false);
    }
  };
  return (
    <div className="search-filter-container">
      <div className="search-filter-btn">
        <div className="search-filter-title">Sắp xếp theo</div>

        <div
          style={{
            backgroundColor: isActive ? "#f87e0a" : "",
            color: isActive ? "white" : "",
            cursor: "pointer",
          }}
          className="search-filter-btn-common"
          onClick={() => handleClick()}
        >
          Phổ Biến
        </div>
        <div
          style={{
            backgroundColor: isActive1 ? "#f87e0a" : "",
            color: isActive1 ? "white" : "",
            cursor: "pointer",
          }}
          className="search-filter-btn-common"
          onClick={() => handleClick1()}
        >
          Bán Chạy Nhất
        </div>
        <div
          style={{
            backgroundColor: isActive2 ? "#f87e0a" : "",
            color: isActive2 ? "white" : "",
            cursor: "pointer",
          }}
          className="search-filter-btn-common"
          onClick={() => handleClick2()}
        >
          Hot
        </div>

        {/* <div className="search-filter-btn-price">
          <select onChange={(e) => selectValue(e.target.value)}>
            <option value={"noArrange"}>{"Giá"}</option>
            <option value={"isAsc"}>{"Giá Tăng Dần"}</option>
            <option value={"isDesc"}>{"Giá Giảm Dần"}</option>
          </select>
        </div> */}
        {/* 


        <Box sx={{ minWidth: 150 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Sắp Xếp Theo:{" "}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={1}>
                <Link
                  to={`/category/name=${params.name}&page=${params.page}&size=12&id=${params.id}&isAsc=true`}
                >
                  Giá Tăng Dần
                </Link>
              </MenuItem>
              <MenuItem value={2}>
                <Link
                  to={`/category/name=${params.name}&page=${params.page}&size=12&id=${params.id}&isDesc=true`}
                >
                  Giá Giảm Dần
                </Link>
              </MenuItem>
            </Select>
          </FormControl>
        </Box> */}
      </div>
      <div className="search-filter-list">
        {listproductCategory.map((product) => (
          <Link to={"/product/" + product.id} key={`${product.id}`}>
            <div className="search-filter-item">
              <div className="search-item-img">
                {
                  !product.image_url ? <img
                    src={""}
                    alt="Error" /> : <img
                    src={`${process.env.REACT_APP_API_URL}/${product?.image_url[0]?.url}`}
                    alt="Error"
                  />
                }

              </div>
              <p className="search-item-name">{product.name}</p>
              <p className="search-item-price">
                {product.price?.toLocaleString("de-DE")} VNĐ
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;
