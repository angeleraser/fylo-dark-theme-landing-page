import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import "./css/tailwind/tailwind.output.css";
import Header from "./components/Header/Header";
import Main from "./components/MainContent/Main";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
