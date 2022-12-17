import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { handleFunction } = useContext(GlobalContext);
  const { toggle } = handleFunction;


  return (
    <div>
       {/* eslint-disable */}
      <div className="flex flex-col p-2 shadow-md dark:bg-slate-700 lg:flex-row lg:pr-12 lg:pl-12">
        <div className="flex items-center justify-between  lg:w-[55%]  lg:flex-row ">
          <div>
            <a href="#" className="text-2xl font-bold text-slate-700 dark:text-slate-100">
              <i class="fa-solid fa-camera-retro"> JESH STREAMING</i>
            </a>
          </div>
          <div>
            <button onClick={() => setIsOpen(!isOpen)} className="block focus:outline-none lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                <path className={`${!isOpen ? "block" : "hidden"} dark:text-white`} stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                <path className={`${isOpen ? "block" : "hidden"} dark:text-white`} stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div className={`text-md w-full flex-col justify-between border-t-2 lg:flex lg:flex-row lg:items-center lg:border-t-0 ${isOpen ? "block" : "hidden"} dark:text-slate-200`}>
          <div className="flex flex-col py-4 lg:flex-row">
            <a href="#" className="block px-5 py-2 hover:text-teal-500">
              Home
            </a>
            <a href="#" className="block px-5 py-2 hover:text-teal-500">
              Populer
            </a>
            <a href="#" className="block px-5 py-2 hover:text-teal-500">
              Category
            </a>
          </div>
          <div className="flex flex-col lg:w-[30%] lg:flex-row lg:items-center lg:justify-around">
            <div className="ml-4 flex h-10 w-24 items-center rounded-md bg-teal-500 text-slate-100 lg:ml-0">
              <a href="#" className="block px-5 ">
                Sign in
              </a>
            </div>
            <div className="mt-4 ml-4 flex items-center lg:mt-0 lg:ml-0">
              <span>
                <i class="fa-solid fa-sun mr-1 text-yellow-500 dark:text-white"></i>
              </span>
              <input type="checkbox" className="hidden" id="toggle" />
              <label htmlFor="toggle" onClick={toggle}>
                <div className="h-4 w-10 cursor-pointer rounded-md bg-slate-400">
                  <div className="toggle-main h-full w-4 rounded-full bg-slate-100"></div>
                </div>
              </label>
              <span>
                <i class="fa-solid fa-moon ml-1 dark:text-yellow-500"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
