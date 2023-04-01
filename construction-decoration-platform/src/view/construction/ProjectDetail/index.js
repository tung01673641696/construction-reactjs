import React, { useEffect } from 'react'
import Footer from '../../layouts/footer/Footer'
import Header from '../../layouts/header/Header'
import CardProject from '../CardProject'
import './ProjectDetail.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getOneProject } from '../../../redux/reducers/project'
import { useParams } from 'react-router-dom'
import parse from "html-react-parser";

import Project from '../Project/Project'

function ProjectDetail() {
	const dispatch = useDispatch()
	const { project } = useSelector((state) => state.projectReducer)
	const { id } = useParams()

	useEffect(() => {
		dispatch(getOneProject(id))
	}, [])

	const content = parse(`${project?.content}`)

  return (
    	<div className='project-details' >
        <Header />
        <div className='projet-detail-wrap'>
            <div className='project-info'>
                <h2>Thông tin dự án</h2>
                <div className='project-info-group'>
                    <div className='proj-row'>
                        <label>Phong cách</label>
                        <span>Tân cổ điển</span>
                    </div>
                    <div className='proj-row'>
                        <label>Nhà cung cấp</label>
                        <span>{project?.supplier_id?.company_name}</span>
                    </div>
                    <div className='proj-row'>
                        <label>Khu vực xây dựng</label>
                        <span>{project?.construction_area}</span>
                    </div>
                    <div className='proj-row'>
                        <label>Vị trí</label>
                        <span>{project?.city_id?.name}</span>
                    </div>
                    <div className='proj-row'>
                        <label>Công năng bố trí</label>
                        <span>{project?.room_layout}</span>
                    </div>
                    <div className='proj-row'>
                        <label>Thời điển triển khai</label>
                        <span>{project?.time_start}</span>
                    </div>
                    <div className='proj-row'>
                        <label>Diện tích đất</label>
                        <span>{project?.area}</span>
                    </div>
                </div>
            </div>
            <div className='project-content'>
								{content}
            </div>
            <div className='project-suggest'>
                <h2>Dự án liên quan</h2>
                <div className='list-project'>
                    <Project />
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default ProjectDetail