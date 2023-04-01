import React from 'react';
import "./Service.scss"
import CardService from './CardService/CardService';

function Service() {
  const data = [
    {
      id: "1",
      title: "Thiết kế nội thất",
      content: "Với rất đa dạng các phong cách thiết kế trên thị trường, chúng ta không khỏi băn khoăn giữa 1 rừng lựa chọn.AKINA trân trọng những sở thích và phong cách cá nhân của khách hàng, khéo léo lồng ghép vào từng thiết kế trên cơ sở có sự tham vấn những ưu nhược điểm để ra được bản thiết kế khách hàng ưng ý nhất Với bề dày hoạt động cùng đội ngũ kiến trúc sư dày dặn kinh nghiệm,AKINA làm hài lòng những khách hàng kỹ tính nhất",
    },
    {
      id: "2",
      title: "Xây dựng - sửa chữa",
      content: "Với rất đa dạng các phong cách thiết kế trên thị trường, chúng ta không khỏi băn khoăn giữa 1 rừng lựa chọn.AKINA trân trọng những sở thích và phong cách cá nhân của khách hàng, khéo léo lồng ghép vào từng thiết kế trên cơ sở có sự tham vấn những ưu nhược điểm để ra được bản thiết kế khách hàng ưng ý nhất Với bề dày hoạt động cùng đội ngũ kiến trúc sư dày dặn kinh nghiệm,AKINA làm hài lòng những khách hàng kỹ tính nhất",
    },
    {
      id: "3",
      title: "Cung cấp vật liệu xây dựng",
      content: "Với rất đa dạng các phong cách thiết kế trên thị trường, chúng ta không khỏi băn khoăn giữa 1 rừng lựa chọn.AKINA trân trọng những sở thích và phong cách cá nhân của khách hàng, khéo léo lồng ghép vào từng thiết kế trên cơ sở có sự tham vấn những ưu nhược điểm để ra được bản thiết kế khách hàng ưng ý nhất Với bề dày hoạt động cùng đội ngũ kiến trúc sư dày dặn kinh nghiệm,AKINA làm hài lòng những khách hàng kỹ tính nhất",
    },
  ]


  return (
    <div className='service'>
      <div className='service_box'>
        {data?.map((item, index) => (
          <CardService item={item}/>
        ))}
      </div>
    </div>
  )
}

export default Service
