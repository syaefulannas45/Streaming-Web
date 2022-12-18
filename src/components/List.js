import Background from "../images/backgroundfilm.svg";
import Background1 from "../images/animebg.png";
import Anime from "../partials/Anime";
import Movies from "../partials/Movies";
const List = () => {
 

  return (
    <>
      <div>
        <div className="relative mt-10 w-full p-8">
          <div className="w-full">
            <img src={Background} alt="bg" className="h-full w-full rounded-2xl lg:h-full" />
          </div>
          <div className="absolute top-8  w-[80%] lg:left-28">
            <h1 className="mb-6 text-5xl font-bold text-slate-700 lg:mb-4 p-5">
              Latest <span className="text-teal-500">Movies</span>
            </h1>
            <Movies />
          </div>
        </div>
        <div className="mt-[620px] relative w-full p-8 lg:mt-32 md:mt-96">
          <div className="w-full">
            <img src={Background1} alt="bg" className="h-full w-full rounded-2xl lg:h-full" />
          </div>
          <div className="absolute top-8  w-[80%] lg:left-28">
            <h1 className="mb-6 text-5xl font-bold text-slate-700 lg:mb-4 p-5">
              Latest <span className="text-teal-500">Anime</span>
            </h1>
            <Anime />
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
