import React from "react";
import BaseButton  from "../../BaseComponents/BaseButton";
const GetStartedForm = () => {
  return (
    <form className="flex-wrap flex w-full justify-center relative items-start">
      <h1 className="font-bold text-center w-full text-center">Get early access today</h1>
      <p className="text-center">
        It's only take a minute to sign up and our free starter tier is
        extremely generous. If you have any questions, our support team would be
        happy to help you.
      </p>
      <input className='w-full' type="text" placeholder='email@example.com'/>
      <BaseButton label='Get Started For Free' classes='in-form'/>
    </form>
  );
};

export default GetStartedForm;
