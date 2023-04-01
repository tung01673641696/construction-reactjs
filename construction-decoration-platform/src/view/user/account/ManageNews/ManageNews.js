import { Footer } from 'antd/lib/layout/layout'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AccountList from '../../../../components/Auth/AccountList/AccountList'
import CreateNews from '../../../../components/News/CreateNews/CreateNews'
import NewsManage from '../../../../components/News/NewsManage/NewsManage'
import EditNews from '../../../../components/News/EditNews/EditNews'
import Header from '../../../layouts/header/Header'
import HeaderDetail from '../../../layouts/headerDetail/HeaderDetail'
import Wrapper from '../Wrapper/Wrapper'

const ManageNews = () => {

  return (
    <>
        {/* <HeaderDetail /> */}
        <Header />
        <div className="account-user">
            <div className="account-user-list">
                <AccountList />
            </div>
            <div className="account-user-info">
                <Wrapper>
                    <Routes>
                        <Route path="/manage-news/" element={<NewsManage />} />
                        <Route path="/manage-news/edit-news/:id" element={<EditNews />}/> 
                        <Route path="/create-news" element={<CreateNews />} />
                    </Routes>
                </Wrapper>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default ManageNews