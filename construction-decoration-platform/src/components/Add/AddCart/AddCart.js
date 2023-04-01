import React, {useEffect, useState} from "react";
import "./AddCart.scss";
import Cart from "../../../assets/images/product/Cart.svg";
import { useDispatch,useSelector } from "react-redux";
import cartApi from "../../../api/cartApi";
import { useParams } from "react-router-dom";
import { token } from "../../../helpers/common";
import Snackbar from "@mui/material/Snackbar";
import { useNavigate } from "react-router-dom";
import arrowRight from "../../../assets/images/home/arrowright.svg";
import MuiAlert from "@mui/material/Alert";
import productApi from "../../../api/productApi";
import { toast } from "react-toastify";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { message } from "antd";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {getFavoriteProduct,addFavoriteProduct} from '../../../redux/reducers/product'

function AddCart({ count,detail }) {
  const dispatch = useDispatch()
  const { user, error } = useSelector((state) => state.userReducer);
  const { listFavoriteProduct } = useSelector((state) => state.productReducer);
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setOpen(true);
  };

  useEffect(()=>{
    dispatch(getFavoriteProduct())
  },[])

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setNoti(false);
    setOpen(false);
  };
  const [noti, setNoti] = useState(false);
  const handleNoti = () => {
    setNoti(true);
  };
  console.log(count)
  const params = useParams();
  const { storeDetailId } = useSelector((state) => state.productReducer);
  const handleAdd = async () => {
    if (!user.auth) {
      handleNoti();
      navigate("/");
    }
    try {
      const data = {
        product_id: params.id,
        quantity: count,
        store_id: storeDetailId,
      };
      // console.log("cartINADDCART", data);
      const res = await cartApi.add(data);
      handleClick();
    } catch (error) {
      console.log(error);
    }
  };

  const handleLike = () => {
    const res = dispatch(addFavoriteProduct({product_id: params.id}))
    // if(res.status === 200) {
    //   if(res?.data?.noti?.type === 1) {
    //     toast.success("Bỏ sản phẩm khỏi danh sách yêu thích");
    //     window.scrollTo(0,0)
    //   }
    //
    //   if(res?.data?.noti?.type === 0) {
    //     toast.success("Thêm sản phẩm vào danh sách yêu thích");
    //     window.scrollTo(0,0)
    //   }
    // } else {
    //   toast.error("Có lỗi xảy ra");
    //   window.scrollTo(0,0)
    // }
  }

  const handleBuyNow = async () => {
    if (!user.auth) {
      handleNoti();
      navigate("/");
    }
    try {
      const data = {
        product_id: params.id,
        quantity: count,
        store_id: storeDetailId,
      };
      await cartApi.add(data);
      navigate("/cart");
    } catch (error) {
      console.log(error);
    }
  };
  // const filter = listFavoriteProduct.find((x)=> x.product.id === detail.id)
  return (
    <div className="">
      <div className="" onClick={handleAdd}>
      <AddShoppingCartIcon />
         Thêm vào giỏ hàng
        {/* <img src={Cart} alt="" /> */}
      </div>
      {/* <div className={`${filter?.product?.id === detail.id ? "like" : "favorite-product"}`} onClick={handleLike}>
        <span>
          <FavoriteBorderIcon/>
        </span>
      </div> */}
      {/* <div className="add-buy-now" onClick={handleBuyNow}>
        <p> Mua ngay</p>
        <img src={arrowRight} alt="" />
      </div> */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Thêm sản phẩm vào giỏ hàng thành công !
        </Alert>
      </Snackbar>
      <Snackbar open={noti} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Bạn phải đăng nhập !
        </Alert>
      </Snackbar>
    </div>
  );
}

export default AddCart;
