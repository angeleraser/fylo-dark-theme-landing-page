/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-between nav-bar w-full items-center">
      <a
        href="
      #"
        className="app-logo inline-block bg-center bg-no-repeat bg-contain">
      </a>
      <ul className="flex items-center">
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Team</a>
        </li>
        <li>
          <a href="#">Sign In</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
