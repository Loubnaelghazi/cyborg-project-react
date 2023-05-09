import "./NavItems.css";
import React from "react";

const NavItems = (props) => {
  return <li className="nav-item">{props.children}</li>;
};

const NavItemDropDown = (props) => {
  return <li className="nav-item dropdown">{props.children}</li>;
};

export default NavItems;
export { NavItemDropDown };  
// hdi tre9q bnch n exportiw li ktkun lt7t
