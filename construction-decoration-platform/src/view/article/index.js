import React from "react";
import { Routes, Route } from "react-router-dom";

import HeaderDetail from "../../view/layouts/headerDetail/HeaderDetail";
import Footer from "../layouts/footer/Footer";
import Wrapper from "../../view/user/account/Wrapper/Wrapper";

import InfoduceWeb from "../../components/Article/InfoduceWeb/InfoduceWeb";
import Commodity from "../../components/Article/Commodity/Commodity";
import Juridical from "../../components/Article/Juridical/Juridical";
import Procedure from "../../components/Article/Procedure/Procedure";
import Support from "../../components/Article/Support/Support";
import Complain from "../../components/Article/Complain/Complain";
import Policy from "../../components/Article/Policy/Policy";
import Header from "../layouts/header/Header";

const Article = () => {
  return (
    <div className="group-page">
      {/* <HeaderDetail /> */}
      <Header />
      {/* <div className="group-content"> */}

      <Wrapper>
        <Routes>
          <Route path="/introduce" element={<InfoduceWeb />} />
          <Route path="/commodity" element={<Commodity />} />
          <Route path="/juridical" element={<Juridical />} />
          <Route path="/procedure" element={<Procedure />} />

          <Route path="/support" element={<Support />} />

          <Route path="/policy" element={<Policy />} />

          <Route path="/complain" element={<Complain />} />


          {/* <Route path=":id" element={<GroupId />} />
            <Route path="/create" element={<GroupCreateForm />} /> */}
        </Routes>
      </Wrapper>
      {/* </div> */}

      <Footer />
    </div>
  );
};

export default Article;
