/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../css/Footer.css";
const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-start footer">
      <a
        href="#"
        className="app-logo inline-block bg-center bg-no-repeat bg-contain"></a>
      <nav className="w-full footer-nav grid">
        <ul className="contact grid">
          <li className="flex items-start location relative">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </li>
          <li className="flex items-center relative phone">+1-543-123-4567</li>
          <li className="flex items-center relative email">example@fylo.com</li>
        </ul>
        <ul className="links grid w-full">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Press</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
        <ul className="links grid w-full">
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </ul>
        <ul className="social-links flex justify-center items-center">
          <li className="bg-no-repeat rounded-full bg-center facebook">
            <a href="#"></a>
          </li>
          <li className="bg-no-repeat rounded-full bg-center twitter mr-4 ml-4">
            <a href="#"></a>
          </li>
          <li className="bg-no-repeat rounded-full bg-center instagram">
            <a href="#"></a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
