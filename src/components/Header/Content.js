import React from "react";
import BaseButton from "../../BaseComponents/BaseButton";

const Content = () => {
  return (
    <section className="flex-col flex items-center w-full">
      <img src="../images/illustration-intro.png" alt="illustration" />
      <h2 className="text-center font-bold">
        All your files in one secure location, accesible anywhere.
      </h2>
      <p className="text-center mb-8">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends, family and
        co-workers.
      </p>
      <BaseButton label={"Get Started"} classes={"in-header"} />
    </section>
  );
};

export default Content;
