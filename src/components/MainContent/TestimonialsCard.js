import React from "react";

const TestimonialsCard = ({ name, imageUrl, ocupation, description }) => {
  return (
    <article className="flex flex-col items-start testimonial-card">
      <p>{description}</p>
      <section className="user-info flex-col flex items-start justify-center flex-wrap">
        <div
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
          className="img rounded-full bg-center bg-cover bg-no-repeat"></div>
        <h2 className="font-bold">{name}</h2>
        <h3>{ocupation}</h3>
      </section>
    </article>
  );
};

export default TestimonialsCard;
