import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { NavLink }       from 'react-router-dom'
import { IoBulbOutline } from 'react-icons/io5'
import { VscPinned }     from 'react-icons/vsc'
import { FaTrash }       from 'react-icons/fa'


const Navbar = () => {
  // ========== state
  const [toggleValue, setToggleValue] = useState(false);



  // ========== saving the mode when user visitor
  useEffect(() => {
    const savedMode = localStorage.getItem("mode") || "light";
    localStorage.setItem("mode", savedMode);
    document
      .querySelector("html")
      .classList.toggle("dark", savedMode === "dark");
  }, []);


  // ========== changing the mode on toggle
  const handelMode = () => {
    if (localStorage.getItem("mode") == "light") {
      localStorage.setItem("mode", "dark");
      document.querySelector("html").classList.add("dark");
      setToggleValue(!toggleValue);
    } else {
      localStorage.setItem("mode", "light");
      document.querySelector("html").classList.remove("dark");
      setToggleValue(!toggleValue);
    }
  };


  return (
    <nav id = 'navbar'>
        <ul>
          <li>
          <NavLink
              to        = "/"
              className = {({ isActive }) =>
                isActive ? "link bg-[#77d9f7]": "link hover:bg-gray-400"
              }
            >
           <IoBulbOutline />All Notes
          </NavLink>
          </li>
          <li>
          <NavLink
              to        = "/pinNote"
              className = {({ isActive }) =>
                isActive ? "link bg-[#77d9f7]": "link hover:bg-gray-400"
              }
            >
            <VscPinned />
            Pinned Notes
          </NavLink>
          </li>
          <li>
          <NavLink
              to        = "/bin"
              className = {({ isActive }) =>
                isActive ? "link bg-[#77d9f7]": "link hover:bg-gray-400"
              }
            >
            <FaTrash />
            Trash
          </NavLink>
          </li>
        </ul>

        {
        localStorage.getItem("mode") == "light" ? (
          <button
            className = "modeButton bg-black text-white"
            onClick   = {handelMode}
          >
            Dark
          </button>
        ) : (
          <button
            className = "modeButton bg-white"
            onClick   = {handelMode}
          >
            Light
          </button>
        )
        }
    </nav>
  )
}

export default Navbar