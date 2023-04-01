import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomeSearch from '../home/HomeSearch/HomeSearch'
import Footer from '../layouts/footer/Footer'
import Header from '../layouts/header/Header'
import introImage from '../../assets/images/construction/introImage.jpg'

import ConstructIntro from '../../components/Service/Service'
import './Renovator.scss'
import Aos from 'aos';
import 'aos/dist/aos.css';
import CardProject from '../construction/CardProject'
import CardSupplier from '../construction/CardSupplier'
import { useState } from 'react'
import ProjectAll from '../construction/ProjectAll/ProjectAll'
import ListSupplier from '../construction/ListSupplier'
import RenovatorInfor from './renovatorInfo/RenovatorInfo'

function Renovator() {
    const dispatch = useDispatch()



    const [dataCate, setDataCate] = useState([
        {
            id: 1,
            name: 'Chung cư',
            checked: true
        },
        {
            id: 2,
            name: 'Nhà phố',
            checked: false
        },
        {
            id: 3,
            name: 'Biệt thự',
            checked: false
        },
        {
            id: 4,
            name: 'Văn Phòng',
            checked: false
        },
        {
            id: 5,
            name: 'Cafe',
            checked: false
        },
    ])


    const handleChangeCate = (item) => {
        const newData = dataCate.map((itemCate) => {
            if (item.id === itemCate.id) {


                return {
                    ...itemCate,
                    checked: true
                }
            } else {
                return {
                    ...itemCate,
                    checked: false
                }
            }
        })
        setDataCate(newData)
    }

    return (
        <div className='construction-wrapper'>
            <Header />
            <HomeSearch />
            <div className='construction-content'>
                <div className='introduce-services'>
                    <h1>DỊCH VỤ THIẾT KẾ CỦA NHÀ CẢI TẠO</h1>
                </div>

                <div>
                    <RenovatorInfor />
                </div>

                <div className='project-wrap'>
                    <h2>Dự án nhà cải tạo</h2>
                    <div className='proj-cate'>
                        {
                            dataCate.map((item) => {
                                return <button
                                    onClick={() => handleChangeCate(item)} className={item.checked === true ? 'cate-btn active' : 'cate-btn'} >{item.name}
                                </button>
                            })
                        }
                    </div>
                    <div className='list-card'>
                        <ProjectAll />
                    </div>
                    <button className='show-more'>Xem thêm</button>
                </div>
                <div className='supplier-wrap'>
                    <h2>Nhà cung cấp</h2>
                    <ListSupplier />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Renovator