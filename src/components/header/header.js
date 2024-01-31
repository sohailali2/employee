import { NavLink, Link } from 'react-router-dom';
import "./header.scss";

import { useState } from 'react';
// import { PiDotsNineBold } from 'react-icons/pi'
import { UpOutlined, DownOutlined } from '@ant-design/icons';


const Header = () => {

  // state to track and update navbar
  const [navBar, setNavBar] = useState("menu");
  // function to show navbar
  const showNavBar = () => {
    if (navBar === "menu") {
      setNavBar("menu showNavbar");
    }
    else {
      setNavBar("menu");
    }
    setActivetag("");
  };

  const CloseNavBar = () => {
    setNavBar("menu");
  }
  const [isOpen, setIsOpen] = useState(false);
  const OpenDropdown = () => {
    setIsOpen(!isOpen);
  };
  const CloseDropdown = () => {
    setIsOpen(false);
  }

  const [activetag, setActivetag] = useState("");
  const activeTag = () => {
    setActivetag("active-link");
  }



  return (
    <>
      <div className="navBar"   >
        <div className="logoDiv" onMouseOver={CloseDropdown} onClick={() => { CloseNavBar(); }} >
          <NavLink to='/' >
            <img className='logo' src="" alt='no logo' />
          </NavLink>
        </div>
        <div className={navBar} >
          <ul className='nav-elements' >

            <li onMouseOver={CloseDropdown} onClick={showNavBar} >
              <NavLink to='/about'  > ABOUT US </NavLink>
            </li>
            <li onMouseOver={CloseDropdown} onClick={showNavBar}>
              <NavLink to='/aboutYou' > ABOUT YOU </NavLink>
            </li>
            <li onMouseOver={CloseDropdown} onClick={showNavBar}>
              <NavLink to='/resorts' > RESORTS </NavLink>
            </li>
            <li onMouseOver={CloseDropdown} onClick={showNavBar}>
              <NavLink to='/exprience' > EXPERIENCES </NavLink>
            </li>

            <li onClick={OpenDropdown} className={activetag} >

              MEMBERSHIPS {isOpen ? < UpOutlined /> : < DownOutlined />}

              {isOpen ?
                <div className=" dropdown  " onMouseLeave={CloseDropdown}  >
                  <Link to='/membership_benefits' onClick={() => { CloseDropdown(); showNavBar(); activeTag(); }} > Membership Benefits</Link>
                  <hr />
                 <Link to='/understanding_memberships' onClick={() => { CloseDropdown(); showNavBar(); activeTag(); }} >Understanding Memberships</Link>
                </div>
                : ""}
            </li>
            <li onMouseOver={CloseDropdown} onClick={showNavBar}>
              <NavLink to='/testimonials' >
                TESTIMONIALS
              </NavLink>
            </li>

          </ul>

        </div>
        {/* <PiDotsNineBold className="menuIcon" onClick={showNavBar} onMouseOver={CloseDropdown} /> */}

      </div>

    </>
  );
}

export default Header;