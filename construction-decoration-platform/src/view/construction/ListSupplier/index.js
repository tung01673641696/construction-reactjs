import React, { useEffect } from 'react'
import CardSupplier from '../CardSupplier'
import "./ListSupplier.scss"
import { useDispatch, useSelector } from 'react-redux'
import { getSupplier } from '../../../redux/reducers/supplier'

const ListSupplier = ({ supplierById }) => {
  const dispatch = useDispatch()
  const { supplier } = useSelector((state) => state.supplierReducer);

  useEffect(() => {
    dispatch(getSupplier())
  }, [])

  console.log("supplier", supplier)


  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      rowGap: '20px'
    }} className='list-supplier'>
      {
        supplierById?.data?.map((item) => {
          return (
            <CardSupplier item={item} />
          )
        })
      }
    </div>
  )
}

export default ListSupplier
