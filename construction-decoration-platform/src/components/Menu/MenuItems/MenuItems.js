import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from "../Dropdown/Dropdown.js"
import { useState,useEffect,useRef } from 'react'
import "./MenuItems.scss"

function MenuItems({ items, depthLevel }) {
  const [dropdown, setDropdown] = useState(false)
  
  let ref = useRef();

  useEffect(() => {
      const handler = (event) => {
          if (dropdown && ref.current && !ref.current.contains(event.target)) {
              setDropdown(false);
          }
      };
      document.addEventListener("mousedown", handler);
      document.addEventListener("touchstart", handler);
      return () => {
          // Cleanup the event listener
          document.removeEventListener("mousedown", handler);
          document.removeEventListener("touchstart", handler);
      };
  }, [dropdown]);

  const onMouseEnter = () => {
      window.innerWidth > 960 && setDropdown(true);
  };
  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  return (
    <li 
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.url && items.submenu ?
        (<>
          <Link
            className='nav_item'
            aria-haspopup="menu"
            to={items.url}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title} {" "}
            {depthLevel > 0 ? <span></span> : ""}
          </Link>
          <Dropdown depthLevel={depthLevel} submenu={items.submenu} dropdown={dropdown}/>
        </>
        ) :
        (<Link className='nav_item' to={items.url}>{items.title}</Link>)
      }
    </li>
  )
}

export default MenuItems