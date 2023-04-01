import React, { useEffect } from 'react'
import './CardProject.scss'
import projectImage from '../../../assets/images/construction/thietkechungcu.jpg'
import { Link } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneProject } from '../../../redux/reducers/project.js';


const CardProject = ({ item, ...props }) => {
  const navigate = useNavigate()
  return (

    <div className='card-project-all'>
      <div {...props} className='card-project' onClick={() => {
        navigate(`/construction/project/${item.id}`)
        window.scrollTo(0,0)
      }} >
        <div className='image-group'>
          <img src={projectImage} alt='' />
        </div>
        <div className='card-content'>
          <span>{item?.name}</span>
        </div>
      </div>
    </div>

  )
}

export default CardProject
