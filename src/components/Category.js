import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import Background from "../images/categorybg.png";
import Category1 from "../images/category1.jpg";
const Category = () => {
  const { state } = useContext(GlobalContext);
  const { categoryDeskripsi, category } = state;
  return (
    <>
      <div className="w-full">
        <div className="mx-auto flex w-full justify-center p-10">
          <p className="text-5xl font-semibold uppercase text-slate-700">
            Category <span className="text-teal-500">Films</span>
          </p>
        </div>
        <div className="mx-auto mt-10 flex w-full justify-around p-10">
          <div className="relative h-full w-2/4 bg-sky-200">
            <div>
              <img src={Background} alt="" className="mx-auto h-full w-full" />
            </div>
            <div className="absolute top-5 left-1">
              <h1 className="text-4xl font-bold text-slate-700">
                Choose your <br /> <span className="text-teal-500">favorite movie!</span>
              </h1>
              <p className="mt-10 text-xl text-slate-700">{categoryDeskripsi}</p>
              <div className="flex w-full">
                <div className="mt-16 flex h-10 w-[20%] items-center justify-center rounded-full bg-teal-500 text-slate-100">
                  <a href="#">Get Premium</a>
                </div>
                <div className="mt-16 flex h-10 w-[20%] items-center justify-center rounded-full bg-yellow-500 text-slate-100 ml-4">
                  <a href="#">Get Free Trials</a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[50%]  flex-wrap justify-evenly">
            {category.map((res) => (
              <div className="relative mr-4 mb-4 h-60 w-1/4 cursor-pointer rounded-lg border-2 p-1 hover:border-teal-400 hover:p-2">
                <img src={require(`../images/${res.images}`)} className="h-full w-full rounded-lg" />
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