import React from "react";
import NavBar from "./NavBar";
import "../../css/Header.css";
import Content from "./Content";
import { bgPatternMobile, bgPatternDesktop } from "../../data";
const Header = () => {
  return (
    <header className="w-full flex flex-col items-center header relative">
      <NavBar />
      <Content />
      <div className="bg w-full flex justify-center absolute bottom-0">
        {bgPatternMobile} {bgPatternDesktop}
      </div>
    </header>
  );
};

export default Header;
