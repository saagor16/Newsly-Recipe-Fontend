import React from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { RiCloseCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const MobileNav = ({ menuItems, Logo, hideLeft, onOpen, onClose }) => {
  return (
    <div className="h-16 flex justify-between items-center px-6 lg:px-12">
      {" "}
      <a href="/">
        <img src={Logo} alt="logo" />
      </a>
      <button onClick={onOpen} className="border border-primary rounded">
        <HiBars3BottomRight className="w-7 h-7"></HiBars3BottomRight>
      </button>
      <div
        className={`transition-all w-full h-full fixed bg-primary z-50 top-0 ${hideLeft} flex justify-center items-center`}
      >
        <button onClick={onClose} className="absolute right-8 top-32">
          <RiCloseCircleLine className="w-7 h-7"></RiCloseCircleLine>
        </button>

        <div className="mt-44">
          <ul className="flex flex-col gap-5 items-center">
            {menuItems?.map((menu, index) => (
              <li key={index}>
                <Link
                  to={menu}
                  onClick={onClose}
                  className="font-medium capitalize text-secondary text-2xl"
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>

          {/*login and signup btn*/}
          <ul onClick={onClose} className="flex items-center gap-4 font-medium mt-10">
            <Link to="/login">
              <li>
                <button className="text-secondary px-4 py-3 rounded border text-xl transition duration-300 hover:bg-btnColor hover:text-white">
                  Log In
                </button>
              </li>
            </Link>
            <Link to='/register'>
            <li>
              <button className="text-white px-4 py-3 rounded border text-xl bg-btnColor transition duration-300 hover:bg-transparent hover:text-secondary hover:border-btnColor">
                Sign Up
              </button>
            </li></Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
