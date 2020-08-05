import React from "react";
import FeatureCard from "./FeatureCard";
const Features = ({ features }) => {
  return (
    <section className="w-full features-wrapper grid">
      {features.map((data) => (
        <FeatureCard key={data.title} {...data} />
      ))}
    </section>
  );
};

export default Features;
