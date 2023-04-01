import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import CardProject from '../CardProject/index.js';
import "./ProjectAll.scss"
import { getProject } from '../../../redux/reducers/project.js';


function ProjectAll({allProjectByCategory}) {

  const dispatch = useDispatch()
  
  // const { projectList } = useSelector((state) => state.projectReducer)

  // useEffect(() => {
  //   dispatch(getProject())
  // },[])


  return (
    <div className='projectAll'>
      <div className='projectAll-ele'>
        {
          allProjectByCategory?.data?.map((item) => {
            return (
              <CardProject item={item}/>  
            )
          })
        }
      </div>
    </div>
  )
}

export default ProjectAll
