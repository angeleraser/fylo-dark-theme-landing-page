import React from "react";

const FeatureCard = ({ title, description, icon }) => {
  return (
    <article className="flex-col flex items-center text-center feature-card">
      {icon}
      <h1 className="font-bold">{title}</h1>
      <p>{description}</p>
    </article>
  );
};

export default FeatureCard;
