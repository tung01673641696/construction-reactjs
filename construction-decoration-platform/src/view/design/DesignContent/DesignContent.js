import React from 'react'
import designChild from "../../../assets/images/design/designChild.png"
import "./DesignContent.scss"
import { useNavigate } from 'react-router-dom'

function DesignContent() {
  const navigate = useNavigate()

  const data = [
    {
      id: "1",
      title: "Thiết kế nội thất căn hộ Hawai"
    },
    {
      id: "2",
      title: "Mipec Rubik 360 - Mr Hung CH.A05 3 Phòng Ngủ"
    },
    {
      id: "3",
      title: "Tinh tế trong mẫu thiết kế nội thất"
    },
    {
      id: "4",
      title: "Thiết kế nội thất chung cư The Matrix One hiện đại luxury"
    },
    {
      id: "5",
      title: "Nhìn là mê với thiết kế nội thất chung cư The Matrix One"
    },
    {
      id: "6",
      title: "Thiết kế nội thất căn hộ Hawai"
    },
    {
      id: "7",
      title: "Thiết kế nội thất căn hộ Hawai"
    },
    {
      id: "8",
      title: "Thiết kế nội thất căn hộ Hawai"
    },
    {
      id: "9",
      title: "Thiết kế nội thất chung cư The Matrix One hiện đại luxury"
    },
    {
      id: "10",
      title: "Thiết kế nội thất căn hộ Hawai"
    },
  ]

  function handleClick() {
    navigate("/design/design-detail")
    window.scrollTo(0,0)
  }

  return (
    <div class="page_design_content">
      <div class="page_design_content_grid">
        {data?.map((item) => (
          <figure 
            class={`gallery__item gallery__item--${item.id}`} 
            onClick={() => handleClick()}
          >
            <img src={designChild} class="gallery__img" />
            <span>{item.title}</span>
          </figure>
        ))}
      </div>

      <button>Xem thêm</button>
    </div>
  )
}

export default DesignContent