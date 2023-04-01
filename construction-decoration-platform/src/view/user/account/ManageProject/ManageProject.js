import React, { useEffect } from "react";

import HeaderDetail from "../../../layouts/headerDetail/HeaderDetail";
import Footer from "../../../layouts/footer/Footer";
import AccountList from "../../../../components/Auth/AccountList/AccountList";


import Wrapper from "../Wrapper/Wrapper";

import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import StoreAddProject from "../../../../components/Store/AddProject/AddProject";
import ManageProjects from "../../../../components/Store/ManageProject/ManageProject";
import EditProject from "../../../../components/Store/EditProject/EditProject";

function ManageProject() {

    return (
        <>
            <HeaderDetail />
            <div className="account-user">
                <div className="account-user-list">
                    <AccountList/>
                </div>
                <div className="account-user-info">
                    <Wrapper>
                        <Routes>
                            <Route path="/manage-project" element={<ManageProjects/>}/>
                            <Route path="/manage-project/edit-project/:id" element={<EditProject/>}/>
                            <Route path="/add-project" element={<StoreAddProject />} />
                        </Routes>
                    </Wrapper>
                </div>
            </div>
            <Footer />
        </>
        // <div>Account</div>
    );
}

export default ManageProject;
