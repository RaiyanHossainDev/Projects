import React, { useEffect, useState } from 'react'
import './MobileNav.css'
import { NavLink }       from 'react-router-dom'
import { IoBulbOutline } from 'react-icons/io5'
import { VscPinned }     from 'react-icons/vsc'
import { FaTrash }       from 'react-icons/fa'
import { FiSliders } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { navValue } from '../../slice/navSlice'



const MobileNav = () => {
  // ========== state
  const [toggleValue, setToggleValue] = useState(false);
  const [navShow,setNavShow]          = useState(false)
  // ========================= Redux
  const dispatch = useDispatch()


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
    <div className={`flex flex-col ${navShow?'h-[840px]':'h-[60px]'} items-center lg:hidden`}>
      <section className='nav_show'>
        <div className="show_btn">
          <FiSliders className={`${navShow?'hidden':'block'}`} onClick={()=>{setNavShow(true),dispatch(navValue(true))}}/>
        </div>
      </section>
      <nav id = 'MobileNavbar' className={`${navShow?'w-[320px]':'w-0 '} h-full transition-all`}>
          <div className={`trainary transition-all ${navShow?'block pr-[20px]':'hidden pr-0'}`}>
            <ul>
              <li>
              <NavLink onClick={()=>{setNavShow(false),dispatch(navValue(false))}}
                  to        = "/"
                  className = {({ isActive }) =>
                    isActive ? "link bg-[#77d9f7]": "link hover:bg-gray-400"
                  }
                >
              <IoBulbOutline />All Notes
              </NavLink>
              </li>
              <li>
              <NavLink onClick={()=>{setNavShow(false),dispatch(navValue(false))}}
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
              <NavLink onClick={()=>{setNavShow(false),dispatch(navValue(false))}}
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
          </div>
      </nav>
    </div>
  )
}

export default MobileNav