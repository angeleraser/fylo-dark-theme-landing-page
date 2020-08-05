import React from "react";
import TestimonialsCard from "./TestimonialsCard";
import { testimonialUsers } from "../../data";
const Testimonials = () => {
  return (
    <section className="grid w-full testimonials-wrapper relative">
      <img
        src="./images/bg-quotes.png"
        alt="quotes"
        className="absolute inline-block quotes"
      />
      {testimonialUsers.map((data) => (
        <TestimonialsCard {...data} key={data.name} />
      ))}
    </section>
  );
};

export default Testimonials;
