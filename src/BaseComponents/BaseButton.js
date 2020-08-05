import React from "react";
import "../css/BaseButton.css";
const BaseButton = ({ label, type, classes }) => {
  return (
    <button
      className={`flex justify-center items-center base-button font-bold ${classes}`}
      type={type}>
      {label}
    </button>
  );
};

export default BaseButton;
