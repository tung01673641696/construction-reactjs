import React from 'react'
import "./OutstandDesign.scss"
import OutstandDetailItem from './OutstandDetailItem/OutstandDetailItem'

function OutstandDesign() {
  const data = [
    {
      id: 1,
      name: "Thiết kế nội thất chung cư 93m2"
    },
    {
      id: 2,
      name: "Thiết kế nội thất Biệt thự"
    },
    {
      id: 3,
      name: "Thiết kế nội thất chung cư 93m2"
    },
    {
      id: 4,
      name: "Thiết kế nội thất nhà vườn"
    },
    {
      id: 5,
      name: "Thiết kế nội thất chung cư 93m2"
    },
    {
      id: 6,
      name: "Thiết kế nội thất nhà dân"
    },
  ]

  return (
    <div className='outstand-design'>
      {data?.map((item,index) => (
        <OutstandDetailItem item={item}/>
      ))}
    </div>
  )
}

export default OutstandDesign