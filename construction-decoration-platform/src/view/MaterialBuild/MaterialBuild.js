import React, { useEffect } from 'react'
import "./MaterialBuild.scss"
import Header from '../layouts/header/Header'
import Footer from '../layouts/footer/Footer'
import ButtonFor from '../../components/Button/ButtonFor/ButtonFor'
import Material from '../../components/Material/Material'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBasicMaterials, getBasicMaterials } from '../../redux/reducers/product'

function MaterialBuild() {
  const { listMaterials } = useSelector(state => state.productReducer)

  const data = [
    {
      name: "Vật liệu xây dựng cơ bản",
      id: 730
    },
    {
      name: "Vật liệu xây dựng kết cấu",
      id: 731
    },
    {
      name: "Vật liệu xây dựng hoàn thiện",
      id: 732
    },
  ]
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllBasicMaterials())
  }, []);

  return (
    <div className='material_build'>
      <Header />
      <ButtonFor text="VẬT LIÊU XÂY DỰNG" />

      <div className='material_build_ele'>

        <Material id={730} />
        {data.map((item) => {
          const listMaterialByCate = listMaterials.filter(itemMater => itemMater?.category?.id === item?.id)
          return (<>
            <h3>{item.name}</h3>
            <Material listMaterialByCate={listMaterialByCate} />
          </>)
        })}
        {/* <h3>Vật liệu xây dựng cơ bản</h3>
        <Material id={730} /> */}
      </div>

      {/* <div className='material_build_ele'>
        <h3>Vật liệu xây dựng kết cấu</h3>
        <Material id={731} />
      </div>

      <div className='material_build_ele'>
        <h3>Vật liệu xây dựng hoàn thiện</h3>
        <Material id={732} />
      </div> */}
      <Footer />
    </div>
  )
}

export default MaterialBuild
