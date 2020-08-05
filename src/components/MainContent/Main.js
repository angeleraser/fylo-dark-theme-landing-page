import React from "react";
import Features from "./Features";
import "../../css/MainContent.css";
import StayProductive from "./StayProductive";
import Testimonials from "./Testimonials";
import GetStartedForm from "./GetStartedForm";
import { features } from "../../data";
const Main = () => {
  return (
    <main className="flex flex-col items-center w-full relative main">
      <Features features={features} />
      <StayProductive />
      <Testimonials />
      <GetStartedForm />
    </main>
  );
};

export default Main;
