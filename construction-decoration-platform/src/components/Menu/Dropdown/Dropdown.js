import MenuItems from "../MenuItems/MenuItems"
import { Link } from "react-router-dom"
import "./Dropdown.scss"

const Dropdown = ({ submenu, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : ""
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenu.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel}/>
      ))}
    </ul>
  )
}

export default Dropdown