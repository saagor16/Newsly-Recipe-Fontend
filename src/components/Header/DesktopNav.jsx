import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const DesktopNav = ({ menuItems, Logo }) => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  };

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
      {/* Login, Signup, or User Profile */}
      <ul className="flex items-center gap-4 font-medium">
        {user ? (
          <>
            <li>
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <img
                  alt={user.displayName}
                  src={user.photoURL}
                  className="w-12 h-12 rounded-full"
                />
              </div>
            </li>
            <li>
              <button
                onClick={handleLogOut}
                className="text-secondary px-4 py-3 rounded"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <Link to="/login">
              <li>
                <button className="text-secondary px-4 py-3 rounded">
                  Log In
                </button>
              </li>
            </Link>
            <Link to="/register">
              <li>
                <button className="text-secondary px-4 py-3 rounded">
                  Sign Up
                </button>
              </li>
            </Link>
          </>
        )}
      </ul>
    </div>
  );
};

export default DesktopNav;
