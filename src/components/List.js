import Background from "../images/backgroundfilm.svg";
import Background1 from "../images/animebg.png";
import Background2 from "../images/bgdrakor.png";
import Background3 from "../images/categorybg.png";
import Anime from "../partials/Anime";
import Movies from "../partials/Movies";
import Drakor from "../partials/Drakor";
import Donghua from "../partials/Donghua";
import Cartoon from "../partials/Cartoon";
import Drasia from "../partials/Drasia";
const List = () => {
  return (
    <>
      <div>
        <div className="relative mt-10 w-full p-8">
          <div className="w-full">
            <img src={Background} alt="bg" className="h-full w-full rounded-2xl lg:h-full" />
          </div>
          <div className="absolute top-8  w-[80%] lg:left-28">
            <h1 className="mb-6 p-5 text-5xl font-bold text-slate-700 lg:mb-4">
              Latest <span className="text-teal-500">Movies</span>
            </h1>
            <Movies />
          </div>
        </div>
        <div className="relative mt-[650px] w-full p-8 md:mt-96 lg:mt-32">
          <div className="w-full">
            <img src={Background1} alt="bg" className="h-full w-full rounded-2xl lg:h-full" />
          </div>
          <div className="absolute top-8  w-[80%] lg:left-28">
            <h1 className="mb-6 p-5 text-5xl font-bold text-slate-700 lg:mb-4">
              Latest <span className="text-teal-500">Anime</span>
            </h1>
            <Anime />
          </div>
        </div>
        <div className="relative mt-[630px] w-full p-8 md:mt-96 lg:mt-32">
          <div className="w-full">
            <img src={Background2} alt="bg" className="h-full w-full rounded-2xl lg:h-full" />
          </div>
          <div className="absolute top-8  w-[80%] lg:left-28">
            <h1 className="mb-6 p-5 text-5xl font-bold text-slate-700 lg:mb-4">
              Latest <span className="text-teal-500">Drama Korean</span>
            </h1>
            <Drakor />
          </div>
        </div>
        <div className="relative mt-[750px] w-full p-8 md:mt-96 lg:mt-32">
          <div className="w-full">
            <img src={Background3} alt="bg" className="h-full w-full rounded-2xl lg:h-full" />
          </div>
          <div className="absolute top-8  w-[80%] lg:left-28">
            <h1 className="mb-6 p-5 text-5xl font-bold text-slate-700 lg:mb-4">
              Latest <span className="text-teal-500">Donghua</span>
            </h1>
            <Donghua />
          </div>
        </div>
        <div className="relative mt-[650px] w-full p-8 md:mt-96 lg:mt-32">
          <div className="w-full">
            <img src={Background} alt="bg" className="h-full w-full rounded-2xl lg:h-full" />
          </div>
          <div className="absolute top-8  w-[80%] lg:left-28">
            <h1 className="mb-6 p-5 text-5xl font-bold text-slate-700 lg:mb-4">
              Latest <span className="text-teal-500">Cartoon</span>
            </h1>
            <Cartoon />
          </div>
        </div>
        <div className="relative mt-[700px] w-full p-8 md:mt-96 lg:mt-32">
          <div className="w-full">
            <img src={Background3} alt="bg" className="h-full w-full rounded-2xl lg:h-full" />
          </div>
          <div className="absolute top-8  w-[80%] lg:left-28">
            <h1 className="mb-6 p-5 text-5xl font-bold text-slate-700 lg:mb-4">
              Latest <span className="text-teal-500">Drama Asian</span>
            </h1>
            <Drasia />
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
