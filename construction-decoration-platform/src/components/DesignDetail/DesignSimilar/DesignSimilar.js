import React from 'react'
import { useState } from 'react';
import ReactDOM from "react-dom";
import { Pagination } from 'antd';
import DesignCard from './DesignCard/DesignCard'
import "./DesignSimilar.scss"

function DesignSimilar() {
  const data = [
    {
      id: 1,
      title: "Thiết kế nội thất chung cư 93m2"
    },
    {
      id: 2,
      title: "Thiết kế nội thất biệt thự"
    },
    {
      id: 3,
      title: "Thiết kế nội thất chung cư 93m2"
    },
    {
      id: 4,
      title: "Thiết kế nội thất Khách sạn"
    },
    {
      id: 5,
      title: "Thiết kế nội thất nhà nghỉ"
    },
    {
      id: 6,
      title: "Thiết kế nội thất nhà dân"
    },
    {
      id: 7,
      title: "Thiết kế nội thất nhà dân"
    },
    {
      id: 8,
      title: "Thiết kế nội thất nhà dân"
    },
    {
      id: 9,
      title: "Thiết kế nội thất nhà dân"
    },
    {
      id: 10,
      title: "Thiết kế nội thất nhà dân"
    },
  ]

  const pageSize = 3
  const [current, setCurrent] = useState(1)
  const [minIndex, setMinIndex] = useState(0)
  const [maxIndex, setMaxIndex] = useState(pageSize)

  const handleChange = (page) => {
    setCurrent(page)
    setMinIndex((page - 1) * pageSize)
    setMaxIndex(page * pageSize)
  }

  return (
    <div className='design_similar'>
      {data?.map((item, index) =>
        index >= minIndex &&
        index < maxIndex && 
      (
        <DesignCard item={item} />
      ))}

      <div className='design_similar_pagination'>
        <Pagination
          pageSize={pageSize}
          current={current}
          total={data.length}
          onChange={(page) => handleChange(page)}
        />
      </div>
    </div>
  )
}

export default DesignSimilar
