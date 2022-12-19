import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mt-[750px] md:mt-[470px] w-full bg-slate-700 p-8 lg:mt-[100px]">
        <div>
          <h1 className="mb-4 text-4xl text-slate-200">JESH STREAMING</h1>
          <h2 className="text-2xl text-slate-300">Contact Us</h2>
          <p className="mt-2 text-slate-300">jeshstreaming@gmail.com</p>
        </div>
        <hr className="mt-5" />
        <div className="w-2/4 mx-auto text-center mt-3 text-slate-300">
          <p>All Right Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
