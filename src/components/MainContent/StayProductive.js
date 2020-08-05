/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const StayProductive = () => {
  return (
    <section className="flex flex-col items-center stay-productive">
      <img
        src="../images/illustration-stay-productive.png"
        alt="stay productive"
        className='inline-block w-full'
      />
      <article className="flex-col flex items-start">
        <h1 className='text-lg font-semibold'>Stay productive, wherever you are</h1>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a href="#" target="_blank" rel="noopener noreferrer" className='flex relative items-center justify-center'>
          See how Fylo works
        </a>
      </article>
    </section>
  );
};

export default StayProductive;
