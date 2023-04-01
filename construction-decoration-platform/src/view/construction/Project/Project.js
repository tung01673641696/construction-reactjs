import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CardProject from '../CardProject';
import "./Project.scss"
import { getProject } from '../../../redux/reducers/project.js';
import { useParams } from 'react-router-dom';

function Project() {
  const dispatch = useDispatch()
  const { projectList} = useSelector((state) => state.projectReducer)

  useEffect(() => {
    dispatch(getProject());
  },[])

  console.log("projectLitssssssss", projectList)

  return (
    <div className='projectAll'>
      <div className='projectAll-ele'>
        {
          projectList?.map((item) => {

            console.log("itemllllllll",item.id)
            return (
              <div className='project-ele'>
                    <CardProject item={item}/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Project