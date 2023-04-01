import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import NoMatch from "./components/404/NoMatch";
import "antd/dist/antd.css";
import ProtectedRoutes from "./helpers/ProtectedRoutes";
import React, { Suspense, useEffect } from "react";
import nprogress from "nprogress";
import { getMyInfo } from "./redux/reducers/user";
import Loading from "./components/Loading/Loading";
import ConfirmRegister from "./view/Auth/Register/ConfirmRegister";
import ManageProject from "./view/user/account/ManageProject/ManageProject";
import Construction from "./view/construction";
import ConstructionDetail from "./view/construction/ConstructionDetail";
import ProjectDetail from "./view/construction/ProjectDetail";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";
import ForgotPassword from "./components/Auth/Login/ForgotPassword/ForgotPassword";
import ChangePassword from "./components/Auth/ChangePassword/ChangePassword";
import PaymentOnepay from "./components/Order/PaymentOnepay";


import HomeAdmin from './view/admin/home'
import Store from './view/admin/store/Store'
import NewsManage from './view/admin/news/News'
import ProtectedAdmin from "./helpers/ProtectedAdmin";
import LoginAdmin from './components/Admin/login'
import AddStore from "./view/admin/store/AddStore";
import AddNews from "./view/admin/news/AddNews/AddNews";
import Project from "./view/admin/project/Project";
import AddProject from "./view/admin/project/AddProject/AddProject";
import GroupMana from "./view/admin/groupMana/GroupMana";
import AddGroup from "./view/admin/groupMana/AddGroup/AddGroup";

import Design from "./view/design/Design";
import DesignDetail from "./view/designDetail/DesignDetail";
import ServiceDetail from "./view/ServiceDetail/ServiceDetail";
import Forum from "./view/Forum/Forum";
import ForumDetail from "./view/ForumDetail/ForumDetail";
import Furnitures from "./view/Furnitures/Furnitures";
import FurnitureDetail from "./view/FurnitureDetail/FurnitureDetail";
import MaterialBuild from "./view/MaterialBuild/MaterialBuild";
import MaterialDetail from "./view/MaterialDetail/MaterialDetail";

const Account = React.lazy(() => import("./view/user/account/Account"));
const Home = React.lazy(() => import("./view/home/Home"));
const ProductDetail = React.lazy(() =>
  import("./view/product/ProductDetail/ProductDetail")
);
const Order = React.lazy(() => import("./view/order/Order"));
const Cart = React.lazy(() => import("./view/cart/Cart"));
const ProductCategory = React.lazy(() =>
  import("./view/category/ProductCategory/ProductCategory")
);
const News = React.lazy(() => import("./view/news/News"));
const NewsDetail = React.lazy(() =>
  import("./view/news/NewsDetail/NewsDetail")
);
const Search = React.lazy(() => import("./view/search/Search"));
const Group = React.lazy(() => import("./view/group/Group"));

const Supplier = React.lazy(() => import("./view/supplier/Supplier"));

const Article = React.lazy(() => import("./view/article"));
const Course = React.lazy(() => import("./view/course"));

function Routers() {
  const dispatch = useDispatch();

  const { user, error, loading } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getMyInfo());
  }, []);

  useEffect(() => {
    nprogress.start();
    nprogress.done();
  }, []);

  return (
    <div>

      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>


            {/*<Route path="/admin/login" element={<LoginAdmin />}/>*/}

            <Route element={<ProtectedRoutes />}>
              <Route path="/order" element={<Order />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/account/*" element={<Account />} />
              <Route path="/project/*" element={<ManageProject />} />
            </Route>


            {/*<Route element={<ProtectedAdmin />}>*/}
            {/*  <Route path="/admin" element={<HomeAdmin/>} />*/}
            {/*</Route>*/}

            <Route>
              <Route path="/admin" element={<HomeAdmin />} />
              {/*store*/}
              <Route path="/admin/storeManage" element={<Store />} />
              <Route path="/admin/storeManage/addStore/:id" element={<AddStore />} />
              <Route path="/admin/storeManage/addStore" element={<AddStore />} />

              <Route path="/admin/newsManage" element={<NewsManage />} />
              <Route path="/admin/newsManage/createNews" element={<AddNews />} />
              <Route path="/admin/newsManage/createNews/:id" element={<AddNews />} />

              <Route path="/admin/projectManage" element={<Project />} />
              <Route path="/admin/projectManage/createProject" element={<AddProject />} />
              <Route path="/admin/projectManage/createProject/:id" element={<AddProject />} />

              <Route path="/admin/groupManage" element={<GroupMana />} />
              <Route path="/admin/groupManage/createGroup" element={<AddGroup />} />
              <Route path="/admin/groupManage/createGroup/:id" element={<AddGroup />} />
            </Route>

            <Route
              path="/search/name=:name&desc=:desc&page=:page&size=:size"
              element={<Search />}
            />
            <Route path="/supplier/*" element={<Supplier />} />
            <Route path="/news/size=10&page=:page" element={<News />} />
            <Route path="/construction" element={<Construction />} />
            <Route path="/construction/:id" element={<ConstructionDetail />} />
            <Route path="/construction/project/:id" element={<ProjectDetail />} />
            <Route path="/register-confirm" element={<ConfirmRegister />} />
            <Route path="/" element={<Home />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/onepay/domestic/callback" element={<PaymentOnepay />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route
              path="/category/name=:name&page=:page&size=12&id=:id&:arrange=true"
              element={<ProductCategory />}
            />
            <Route path="/group/*" element={<Group />} />
            <Route path="/course/*" element={<Course />} />
            <Route path="/article/*" element={<Article />} />

            <Route path="/design/*" element={<Design />} />
            <Route path="/design/design-detail" element={<DesignDetail />} />
            <Route path="/service-detail" element={<ServiceDetail />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/forum-detail" element={<ForumDetail />}/>
            <Route path="/furnitures" element={<Furnitures />} />
            <Route path="/furnitures-detail/:id" element={<FurnitureDetail />} />
            <Route path="/material-build" element={<MaterialBuild />} />
            <Route path="/material-detail/:id" element={<MaterialDetail />} />


            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/verify-newpassword" element={<ChangePassword />} />


            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default Routers;
