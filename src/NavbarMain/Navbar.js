import React from "react";
import { Nav, NavLink, NavMenu }  from "./NavbarElement";

 import './Navbar.css'  ; 
  
const Navbar = () => {
  return (
    <>
      <Nav className="NavItems">
        <NavMenu className="NavMenu">
        
            <div>
            <img className="logo" src="https://agro.elzian.com/images/logo.png"/>
            </div>
            <NavLink to="/main" activeStyle>
            HOME
          </NavLink>
       
          <NavLink to="/about" activeStyle>
            ABOUT
          </NavLink>
        
          <NavLink to="/details" activeStyle>
            DETAILS
          </NavLink>
          <NavLink to="/contact" activeStyle>
            CONTACTS 
          </NavLink>
        
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;