import React, { useEffect } from 'react'
import HomeSearch from '../../home/HomeSearch/HomeSearch'
import Footer from '../../layouts/footer/Footer'
import Header from '../../layouts/header/Header'
import CardProject from '../CardProject'
import CardSupplier from '../CardSupplier'
import ListSupplier from '../ListSupplier'
import './ConstructionDetail.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getOneSupplier } from '../../../redux/reducers/supplier'
import { useParams } from 'react-router-dom'

const ConstructionDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { oneSupplier } = useSelector((state) => state.supplierReducer)

  useEffect(() => {
    dispatch(getOneSupplier(id))
  }, [])

  console.log("oneSupplier", oneSupplier)

  return (
    <div className='construction-detail' >
      <Header />
      {/* <HomeSearch /> */}
      <div className='construction-detail-content'>
        <div className="card-supplier-wrap">
          <CardSupplier item={oneSupplier} />
        </div>
        <div className='introduce'>
          <h2>Giới thiệu chung</h2>
          <div className='introduce-content'>
            <span>Công ty Mộc Việt là công ty chuyên thực hiện thiết kế, thi công lắp đặt và sản xuất các sản phẩm: Nội thất văn phòng, trường học, khách sạn, nhà hàng, siêu thị, biệt thự, nhà phố như bàn làm việc, tủ hồ sơ, bàn họp, quầy tiếp tân, phòng tiếp khách, đại sảnh, phòng ngủ khách sạn, quầy kệ siêu thị, nội thất phòng ngủ, phòng khách, phòng ăn,.. Với những ý tưởng sáng tạo và được sự ủng hộ nhiệt tình của các đối tác và quý khách hàng trong lĩnh vực trang trí nội thất giúp cho tập thể công ty Mộc Việt nỗ lực hết mình để làm ra những sản phẩm tốt nhất.
              Nhằm đáp ứng nhu cầu ngày càng cao của khách hàng, Công ty chúng tôi đầu tư mới các trang thiết bị hiện đại, quy mô sản xuất kinh doanh dây chuyền hiện đại. Đồng thời với đội ngũ nhân viên tập hợp những người thợ có tay nghề giỏi chuyên thực hiện các sản phẩm đồ gỗ cao cấp để xuất khẩu.</span>
          </div>
        </div>
        <div className='project-wrap'>
          <h2>Dự án</h2>
          <div className="list-project">
            <CardProject />
            <CardProject />
            <CardProject />
            <CardProject />
            <CardProject />
            <CardProject />
            <CardProject />
          </div>
        </div>
        <div className='supplier-wrap'>
          <h2>Nhà cung cấp tương tự</h2>
          <div className='supplier-group'>
            <ListSupplier />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ConstructionDetail
