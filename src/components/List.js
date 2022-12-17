import React, { useContext } from "react";
import Background from "../images/backgroundfilm.svg";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { GlobalContext } from "../context/GlobalProvider";
const List = () => {
  const { state } = useContext(GlobalContext);
  const { list } = state;
  const responsiveSettings = [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
      },
    },
  ];
  return (
    <>
      <div className="relative mt-10 w-full p-8">
        <div className="w-full">
          <img src={Background} alt="" className="h-full w-full rounded-2xl lg:h-full" />
        </div>
        <div className="absolute top-8  w-[80%] lg:left-28">
          <h1 className="mb-6 text-5xl font-bold text-slate-700 lg:mb-4">
            Latest <span className="text-teal-500">Movies</span>
          </h1>
          <div className="absolute w-full  lg:left-14 md:left-16">
            <Slide slidesToScroll={1} slidesToShow={1} indicators={true} responsive={responsiveSettings} cssClass="pl-24 md:pl-40">
              {list.map((res) => (
                <div className="flex w-[50%] cursor-pointer flex-col items-center justify-evenly rounded-xl bg-slate-100 p-1 shadow-lg hover:p-2 lg:w-[50%]">
                  <div>
                    <img src={require(`../images/list/${res.images}`)} className="h-60 rounded-lg lg:w-full" />
                  </div>
                  <div>
                    <h1 className="font-semi-bold text-center text-xl text-slate-700">{res.name}</h1>
                  </div>
                </div>
              ))}
            </Slide>
            <Slide slidesToScroll={1} slidesToShow={1} indicators={true} responsive={responsiveSettings} cssClass="pl-24 md:pl-40">
              {list.map((res) => (
                <div className="flex w-[50%] cursor-pointer flex-col items-center justify-evenly rounded-xl bg-slate-100 p-1 shadow-lg hover:p-2 lg:w-[50%]">
                  <div>
                    <img src={require(`../images/list/${res.images}`)} className="h-60 w-full rounded-lg" />
                  </div>
                  <div>
                    <h1 className="font-semi-bold text-center text-xl text-slate-700">{res.name}</h1>
                  </div>
                </div>
              ))}
            </Slide>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
