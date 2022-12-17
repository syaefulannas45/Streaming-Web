import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";

const Hero = () => {
  const { state } = useContext(GlobalContext);
  const { deskripsi } = state;
  return (
    <div className="container bg-[url('/src/images/herobg.png')] pt-10 pb-44 dark:bg-slate-600  lg:pt-44">
      {/* eslint-disable */}
      <div className="flex w-full justify-center">
        <div className="text-3xl font-bold uppercase text-teal-500 lg:text-6xl">Jesh Streaming</div>
      </div>
      <div className="mx-auto mt-10 w-full text-center dark:text-slate-200 md:w-3/4 text-lg lg:text-xl text-slate-700">{deskripsi}</div>
      <div className="relative mx-auto mt-12 flex w-[80%]  justify-center lg:w-[40%]">
        <input type="text" placeholder="Search" className="animate-bounce rounded-full border bg-slate-300 py-4 px-12 lg:placeholder:px-12 placeholder:text-slate-100 focus:outline-none focus:ring-2  md:w-full" />
        <div className="absolute left-4 top-2 md:left-5 md:top-2">
          <i class="fa-solid fa-magnifying-glass animate-bounce text-slate-100"></i>
        </div>
      </div>
      <div className="mt-10 flex w-full items-center justify-center">
        <div className="mr-4 flex h-10 w-[40%] items-center justify-center rounded-full bg-teal-500 text-slate-100 lg:mr-12 lg:w-[8%]">
          <a href="">Lets Watch</a>
        </div>
        <div className="ml-4 flex h-10 w-[40%] items-center justify-center rounded-full border-2 px-1 text-slate-700 hover:bg-cyan-500 hover:text-slate-200 dark:text-slate-200 lg:ml-12 lg:w-[10%]">
          <a href="" className="mr-1">
            Try it now
          </a>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
