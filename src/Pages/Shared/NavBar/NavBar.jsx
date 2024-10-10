import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  const nav = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>

      <li>
        {" "}
        <Link to={"/about"}>About</Link>
      </li>
      <li>
        {" "}
        <Link to={"/service"}>Services</Link>
      </li>
      <li>
        {" "}
        <Link to={"/blog"}>Blog</Link>
      </li>
      <li>
        <Link to={"/contact"}>Contact</Link>
      </li>
      {user?.email ? (
        <>
          <li>
            <Link to={"/bookings"}>MyBooking</Link>
          </li>
          <li>
            <button onClick={handleLogOut}>Log Out</button>
          </li>
        </>
      ) : (
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar h-28 mb-8 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {nav}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl">
            <picture>
              <img className="w-16 h-16" src={logo} alt={logo} />
            </picture>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{nav}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
