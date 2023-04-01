import React, { useEffect ,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Slider from "react-slick";
import { getBasicMaterials } from '../../redux/reducers/product';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Material.scss"
import MaterialCard from './MaterialCard/MaterialCard'


function Material({listMaterialByCate}) {
const [numberShow, setNumberShow] = useState(6);

  const { material } = useSelector(state => state.productReducer)

  const setNumber=()=>{
    if(listMaterialByCate?.length<6){
      setNumberShow(listMaterialByCate?.length)
    }
  }
  useEffect(() => {
    setNumber()
   }, []);
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:numberShow ,
    slidesToScroll: 3
  };

  return (
    <div className='material_parent'>


      <Slider {...settings}>
        {listMaterialByCate?.map((item, index) => (
          <MaterialCard item={item} />
        ))}

      </Slider>
    </div>
  )
}

export default Material
