import React, { useEffect, useState } from "react";
import "./Group.scss";
import HeaderDetail from "../../view/layouts/headerDetail/HeaderDetail";
import { listNews } from "../../redux/reducers/news";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import { useParams, Link } from "react-router-dom";
import pedri from "../../assets/images/home/pedri.jpg";
import Footer from "../layouts/footer/Footer";
import IconNews from "../../components/IconNews/IconNews";
import GroupSidebarLeft from "../../components/Group/GroupSidebarLeft";
import { getAllGroup , getAllGroupJoined ,getAllGroupCreated} from "../../redux/reducers/group";
import IGroup from "../../assets/images/group/group.png";
import GroupSuggest from "../../components/Group/GroupSuggest/GroupSuggest";
import GroupSuggestContainer from "../../components/Group/GroupSuggest/GroupSuggestContainer";
import { Routes, Route } from "react-router-dom";
import GroupId from "../../components/Group/GroupId/GroupId";
import Wrapper from "../../view/user/account/Wrapper/Wrapper";
import GroupCreateForm from "../../components/Group/GroupCreate/components/GroupCreateForm";
import Header from "../layouts/header/Header";
import HomeSearch from "../home/HomeSearch/HomeSearch";
function Group() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const params = useParams();
  const { total_page } = useSelector((state) => state.newsReducer);
  const size = 10;
  useEffect(() => {
    dispatch(listNews({ page, size }));
  }, [page]);
  const onChange = (e, p) => {
    setPage(p);
    // params.page = page
  };
  useEffect(() => {
    //get group user joined
    let typeJoined = 1;
    dispatch(getAllGroupJoined(typeJoined));

    //get group user created
    let typeCreate = 2;
    dispatch(getAllGroupCreated(typeCreate));

    //get group user doesn't joined
    let type = 3;
    dispatch(getAllGroup(type));
  }, [])

  return (
    <>
      <div className="group-page">
        {/* <HeaderDetail /> */}
        <Header />
        <HomeSearch />
        <div className="group-content">
          <GroupSidebarLeft />

          <Wrapper>
            <Routes>
              <Route path="/" element={<GroupSuggestContainer />} />
              <Route path=":id" element={<GroupId />} />
              <Route path="/create" element={<GroupCreateForm />} />
            </Routes>
          </Wrapper>
        </div>
        <Pagination
          count={total_page}
          shape="rounded"
          page={page}
          hidePrevButton
          className="pagination-btn-pgn"
          onChange={onChange}
        />

        <Footer />
      </div>
    </>
  );
}

export default Group;
