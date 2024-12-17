import React from "react";
import { Link } from "react-router-dom";

const DesktopNav = ({ menuItems, Logo }) => {
  return (
    <div className="h-16 flex justify-between items-center px-6 lg:px-12">
      <a href="/">
        <img src={Logo} alt="logo" />
      </a>
      <ul className="flex gap-7">
        {menuItems?.map((menu, index) => (
          <li key={index}>
            <Link to={menu} className="font-medium capitalize text-secondary">
              {menu}
            </Link>
          </li>
        ))}
      </ul>
      {/*login and signup btn*/}
      <ul className="flex items-center gap-4 font-medium">
        <Link to='/login'>
          <li>
            <button className="text-secondary px-4 py-3 rounded">Log In</button>
          </li>
        </Link>
        <Link>
          <li>
            <button className="text-secondary px-4 py-3 rounded">
              Sign Up
            </button>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default DesktopNav;
