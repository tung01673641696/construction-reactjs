import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  updateQuantity,
  removerCart,
  getCartAll,
} from "../../redux/reducers/cart";

import Loading from "../../components/Loading/Loading";
import CartSticky from "../../components/CartSticky/CartSticky";
import HeaderDetail from "../layouts/headerDetail/HeaderDetail";
import Footer from "../layouts/footer/Footer";
import Chat from "../../assets/images/cart/Chat.svg";
import Trash from "../../assets/images/cart/Trash.svg";

import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import "./Cart.scss";
import { openNotification } from "../../components/Alert/AlertProduct";
function Cart() {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { listCart, message, loadingproduct } = useSelector(
    (state) => state.cartReducer
  );
  useEffect(() => {
    dispatch(getCartAll());
  }, [dispatch]);

  const [checkout, setCheckout] = useState([]);
  const [isParentChecked, setIsParentChecked] = useState(false);
  const [dataCart,setDataCart] = useState(listCart?.store)

  useEffect(() => {
    const dataCheckout = listCart?.map((storeItem) => {
      return {
        ...storeItem,
        checked: false,
        type:"store",
        products: storeItem?.products?.map((prodItem) => {
          return {
            ...prodItem,
            checked: false,
            type: "product"
          }
        })
      }
    })
    setDataCart(dataCheckout)
  }, [listCart])

  const handleSubmit = async (product) => {
    const data = {
      id: [product?.id_order_detail]
    }
    const removedProduct = await dispatch(removerCart(data));
    if (removedProduct.type === "cart/removeCart/fulfilled") {
      openNotification("success", "Xóa sản phẩm thành công");
    } else {
      openNotification("error", "Xóa sản phẩm thất bại");
    }
  };

  const ascendingProduct = async (product, id) => {
    const newData = { ...product };
    if (newData.quantity >= product.quantity_in_stock) {
      return;
    }
    if (newData?.id_order_detail === id) {
      newData.quantity++;
    }

    let data = {
      quantity: newData.quantity,
      id,
    };
    await dispatch(updateQuantity(data));
  };

  const descendingProduct = async (product, id) => {
    const newData = { ...product };
    if (newData.quantity <= 1) {
      dispatch(removerCart())
      return;
    }
    if (newData.id_order_detail === id) {
      newData.quantity--;
    }
    let data = {
      quantity: newData.quantity,
      id,
    };
    await dispatch(updateQuantity(data));
    console.log(newData)
  };
  const changeCheckboxStatus = (e, type, id, item) => {
    const tpData = dataCart.map((storeItem) => {
      if(type === "allChecked") {
        if(e.target.checked === true) {
          return {
            ...storeItem,
            checked: true,
            products: storeItem.products.map((prodItem) => {
              return {
                ...prodItem,
                checked: true
              }
            })
          }
        } else {
          setIsParentChecked(false)
          return {
            ...storeItem,
            checked: false,
            products: storeItem.products.map((prodItem) => {
              return {
                ...prodItem,
                checked: false
              }
            })
          }
        }
      } 
      else if(type === "store") {
        if(storeItem.id === id) {
          if(e.target.checked) {
            return {
              ...storeItem,
              checked: true,
              products: storeItem.products.map((prodItem) => {
                return {
                  ...prodItem,
                  checked: true
                }
              })
            }
          } else {
            return {
              ...storeItem,
              checked: false,
              products: storeItem.products.map((prodItem) => {
                return {
                  ...prodItem,
                  checked: false
                }
              })
            }
          }
        } else {
          return {
            ...storeItem
          }
        }
      } else if(type === "product") {
        if(storeItem.id === item.id) {
          if(e.target.checked === true) {
            const prodChecked = storeItem.products.filter(item => item.checked === true)
            if(prodChecked.length === storeItem?.products.length - 1) {
              return {
                ...storeItem,
                checked: true,
                products: storeItem?.products?.map((prodItem) => {
                  return {
                    ...prodItem,
                    checked: true
                  }
                })
              }
            } else {
              return {
                ...storeItem,
                checked: false,
                products: storeItem.products.map((prodItem) => {
                  if(prodItem.id === id) {
                    return {
                      ...prodItem,
                      checked: true
                    }
                  } else {
                    return {
                      ...prodItem,
                    }
                  }
                })
              }
            }
          } else {
            const prodChecked = storeItem.products.filter(item => item.checked === true)
            if(prodChecked.length === storeItem?.products.length) {
              return {
                ...storeItem,
                checked: false,
                products: storeItem.products.map((prodItem) => {
                  if(prodItem.id === id) {
                    return {
                      ...prodItem,
                      checked: false
                    }
                  } else {
                    return {
                      ...prodItem
                    }
                  }
                })
              }
            } else {
              return {
                ...storeItem,
                products: storeItem.products.map((prodItem) => {
                  if(prodItem.id === id) {
                    return {
                      ...prodItem,
                      checked: false
                    }
                  } else {
                    return {
                      ...prodItem
                    }
                  }
                })
              }
            }
          }
        } else {
          return {
            ...storeItem
          }
        }
      }
    })
    
    const checkAllProduct = tpData.filter(item => item.checked === true);
    if(checkAllProduct.length === dataCart.length) {
      setIsParentChecked(true)
      setDataCart(tpData)
    } else {
      setIsParentChecked(false)
      setDataCart(tpData)
    }


    // if (id == "allChecked") {
    //   setIsParentChecked(!isParentChecked);
    //   setIsChildrenChecked(!isChildrenChecked);
    //   setIsProductChecked(!isProductChecked);
    //   setCheckout([]);
    // }

    // if(id !== "allChecked"){
    //   setIsChildrenChecked(!isChildrenChecked);
    //   setIsProductChecked(!isProductChecked);
    // }
  };

  const handleCheckoutCart = () => {
    const tpData = []
    console.log(tpData);
    const tpOrder = dataCart.map((storeItem) => {
      if(storeItem.checked === true) {
        const {checked, type, ...rest} = storeItem
        const tpStore = {
          ...rest,
          products: storeItem?.products?.map((prodItem) => {
            const {checked, type, ...restProd} = prodItem
            return restProd
          })
        }
        tpData.push(tpStore)
      } else {
        const productChecked = storeItem.products.filter(item => item.checked === true)
        if(productChecked.length !== 0) {
          const {checked, type, ...restStore} = storeItem;
          const tpStore = {
            ...restStore,
            products: productChecked.map((prodItem) => {
              const {checked, type, ...restProd} = prodItem
              return restProd
            })
          }
          tpData.push(tpStore)
        }
      }
    })

    if(tpData.length !== 0) {
      localStorage.setItem("cart", JSON.stringify(tpData))
      navigate("/order")
    }
  }


  return (
    <>
      <HeaderDetail />
      <div>
        <div className="cart-page">
          {dataCart?.length !== 0 ? (
            <>
              <div className="cart-choose-all box-shadow mt-30">
                <div className="cart-page-title text-title mb-30">
                  Giỏ hàng của tôi
                </div>
                <input
                  type="checkbox"
                  onChange={(e) => changeCheckboxStatus(e, "allChecked")}
                  checked={isParentChecked}
                />
                CHỌN TẤT CẢ
              </div>
              
              {dataCart?.map((item) => {
                return (
                  <div
                    className="cart-page-list box-shadow mt-30"
                    key={`${item?.id}`}
                  >
                    <div className="cart-page-supplier">
                      <input
                        type="checkbox"
                        value={item?.id}
                        onChange={(e) => changeCheckboxStatus(e, item.type, item.id)}
                        checked={item?.checked}
                      />
                      <Link to="/">{item?.name}</Link>
  
                      <img src={Chat} alt="" />
                    </div>
                    <div className="h-line"></div>
                    {item?.products?.map((product) => (
                      <div className="cart-page-item" key={`${product.id}`}>
                        <input
                          type="checkbox"
                          className="cart-page-item-checkbox"
                          onChange={(e) => changeCheckboxStatus(e, product.type ,product.id, item)}
                          checked={product.checked}
                        />
                        <img
                          src={`${process.env.REACT_APP_API_URL}${product?.image_url[0].url}`}
                          alt=""
                          className="cart-item-img"
                        />
                        <div className="cart-page-name-product">
                          <p>{product.name}</p>
                          <p>
                            Màu: <span>NULL</span> Size:{" "}
                            <span>{product.weight} ml</span>
                          </p>
                        </div>
                        <p className="cart-page-item-price">
                          {product.price?.toLocaleString("de-DE")} VNĐ{" "}
                        </p>
                        <div className="detail-info-count">
                          <div
                            onClick={() => {
                              descendingProduct(product, product.id_order_detail);
                              product?.quantity === 1 && handleSubmit(product)
                            }}
                          >
                            <HorizontalRuleIcon />
                          </div>
  
                          <div className="height-line"></div>
                          <p>{product.quantity}</p>
                          <div className="height-line"></div>
                          <div
                            onClick={() => {
                              ascendingProduct(product, product.id_order_detail);
                            }}
                          >
                            <AddIcon />
                          </div>
                        </div>
                        <div
                          className="cart-page-trash"
                          onClick={() => {
                            handleSubmit(product);
                          }}
                        >
                          <img src={Trash} alt="" />
                        </div>
                      </div>
                    ))}
                  </div>
                )
              })}
              <CartSticky checkout={checkout} handleCheckoutCart={handleCheckoutCart} />
            </>
          ) : (
            <>
              <div className="cart-page-title text-title">
                Giỏ hàng chưa có sản phẩm
              </div>
              <Link to="/" className="cart-page-title text-title">
                Trở lại
              </Link>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
