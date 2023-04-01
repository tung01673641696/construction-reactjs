import "./Order.scss";
import HeaderDetail from "../layouts/headerDetail/HeaderDetail";
import ProductInOrder from "../../components/Order/ProductInOrder/ProductInOrder";

function Order() {
  return (
    <>
      <HeaderDetail />
      <div className="order-page">
        <div className="order-page-list">
          <ProductInOrder />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Order;
