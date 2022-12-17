import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import Background from "../images/categorybg.png";

const Category = () => {
  const { state } = useContext(GlobalContext);
  const { categoryDeskripsi, category } = state;
  return (
    <>
      {/* eslint-disable */}
      <div className="w-full">
        <div className="mx-auto mb-4 flex w-full justify-center p-10">
          <p className="text-center text-5xl font-semibold uppercase text-slate-700">
            Category <span className="text-teal-500 ">Films</span>
          </p>
        </div>
        <div className="mt-2 flex w-full flex-col items-center px-10 lg:mt-0 lg:flex-row  lg:justify-around lg:px-10">
          <div className="relative h-96 bg-sky-200 lg:h-60 lg:w-2/4">
            <div>
              <img src={Background} alt="" className="mx-auto h-96 w-full lg:h-60" />
            </div>
            <div className="absolute top-5 left-1">
              <h1 className="text-4xl font-bold text-slate-700">
                Choose your <br /> <span className="text-teal-500">favorite movie!</span>
              </h1>
              <p className="mt-10 text-xl text-slate-700">{categoryDeskripsi}</p>
              <div className="flex w-full">
                <div className="mt-16 flex h-10 items-center justify-center rounded-full bg-teal-500 p-5 text-slate-100 lg:w-[20%] lg:p-0">
                  <a href="#">Get Premium</a>
                </div>
                <div className="mt-16 ml-4 flex h-10 items-center justify-center rounded-full bg-yellow-500 p-5 text-slate-100 lg:w-[20%] lg:p-0">
                  <a href="#">Get Free Trials</a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex w-full  flex-wrap justify-evenly md:mt-24 lg:mt-10 lg:w-[50%]">
            {category.map((res) => (
              <div className="relative mr-4 mb-4 h-60 w-[44%] cursor-pointer rounded-lg border-2 bg-teal-600 p-1 hover:border-teal-400 hover:p-2 lg:w-1/4 lg:bg-transparent">
                <img src={require(`../images/${res.images}`)} className="h-30 rounded-lg md:h-32 md:w-full lg:h-full lg:w-full" />
                <div className="absolute bottom-10 left-3">
                  <p className="text-xl font-semibold text-slate-100">{res.nameCategory}</p>
                  <p className="mt-2">
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
