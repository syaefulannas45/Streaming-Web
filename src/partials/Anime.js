import React, { useContext } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { GlobalContext } from "../context/GlobalProvider";
const Anime = () => {
  const { state } = useContext(GlobalContext);
  const { anime, responsiveSettings } = state;
  return (
    <>
      {/* eslint-disable */}
      <div className="absolute w-full  md:left-16 lg:left-14">
        <Slide slidesToScroll={1} slidesToShow={1} indicators={true} responsive={responsiveSettings} cssClass="pl-24 md:pl-40">
          {anime.map((res) => (
            <div className="flex w-[50%] cursor-pointer flex-col items-center justify-evenly rounded-xl bg-slate-100 p-1 shadow-md hover:p-2 lg:w-[50%] mb-2">
              <div>
                <img src={require(`../images/anime/${res.images}`)} className="h-60 rounded-lg lg:w-full" />
              </div>
              <div>
                <h1 className="font-semi-bold text-center text-xl text-slate-700">{res.name}</h1>
              </div>
            </div>
          ))}
        </Slide>
        <Slide slidesToScroll={1} slidesToShow={1} indicators={true} responsive={responsiveSettings} cssClass="pl-24 md:pl-40">
          {anime.slice(0).reverse().map((res) => (
            <div className="flex w-[50%] cursor-pointer flex-col items-center justify-evenly rounded-xl bg-slate-100 p-1 shadow-md hover:p-2 lg:w-[50%] mb-4 mt-4">
              <div>
                <img src={require(`../images/anime/${res.images}`)} className="h-60 w-full rounded-lg" />
              </div>
              <div>
                <h1 className="font-semi-bold text-center text-xl text-slate-700">{res.name}</h1>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </>
  );
};

export default Anime;
