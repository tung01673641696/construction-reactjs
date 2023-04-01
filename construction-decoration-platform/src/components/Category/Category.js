import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categorygetAll } from "../../redux/reducers/category";
import { Link } from "react-router-dom";
import "./Category.scss";

function Category() {
  const { categoryList } = useSelector((state) => state.categoryReducer);

  console.log('categoryList', categoryList);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categorygetAll());
  }, []);
  return (
    <div className="category-icon">
      {categoryList?.map((item) => (
        <Link
          to={`/category/name=${item.name}&page=1&size=12&id=${item.id}&notArrange=true`}
          key={`${item.id}asd123`}
        >
          <div className="category-icon-item">
            <div className="category-icon-img">
              <img
                src={`${process.env.REACT_APP_API_URL}${item?.image_url}`}
                alt=""
              />
            </div>
            <p className="category-icon-text">{item.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Category;
