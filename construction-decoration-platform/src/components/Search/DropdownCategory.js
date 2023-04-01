import React from "react";
import { Dropdown } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categorygetAll } from '../../redux/reducers/category'
import './DropdownCategory.scss'

function DropdownCategory() {
  const { categoryList } = useSelector((state) => state.categoryReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categorygetAll())
  }, [dispatch])
  return (
    
      <Dropdown>
        <Dropdown.Toggle style={{
          color: 'white',
          fontSize: 18,
        }} variant="success" id="dropdown-basic">
          Danh mục
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
          {categoryList?.map((item) => (
            <Dropdown.Item href={`/category/name=${item.name}&page=1&size=12&id=${item.id}&notArrange=true`} key={`${item.name}1`}>{item.name}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    
  );
}

export default DropdownCategory;
