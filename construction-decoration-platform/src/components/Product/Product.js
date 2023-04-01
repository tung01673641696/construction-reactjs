import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import itemm from "../../assets/images/product/item.jpg";
import { Link } from "react-router-dom";
import { productgetAll } from "../../redux/reducers/product";
import "./Product.scss";

import ImageError from "../../assets/images/error/imageerror.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProductCard from "../ProductCard/ProductCard";

function Product({ page, size, type }) {
  const dispatch = useDispatch();
  const { productlist } = useSelector((state) => state.productReducer);
  useEffect(() => {
    dispatch(productgetAll({ page, size, type }));
  }, [dispatch, page]);
  return (
    <div className="product-for ">
      <div className="product-for-list">
        {productlist?.data?.map((item) => (
            <ProductCard item={item}/>
        ))}
      </div>
    </div>
  );
        }

export default Product;
