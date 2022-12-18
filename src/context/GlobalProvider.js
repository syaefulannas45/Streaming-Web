import { createContext } from "react";

export const GlobalContext = createContext();
export const GlobalProvider = (props) => {
  const toggle = () => {
    const lampToggle = document.querySelector("#toggle");
    const html = document.querySelector("html");
    if (lampToggle.checked) {
      html.classList.remove("dark");
    } else {
      html.classList.add("dark");
    }
  };
  const category = [
    {
      nameCategory: "Movie",
      images: "category1.jpg",
    },
    {
      nameCategory: "Anime",
      images: "category2.jpg",
    },
    {
      nameCategory: "Drama Korean",
      images: "category3.jpeg",
    },
    {
      nameCategory: "Donghua",
      images: "category4.png",
    },
    {
      nameCategory: "Cartoon",
      images: "category5.jpg",
    },
    {
      nameCategory: "Drama Asian",
      images: "category6.jpg",
    },
  ];
  const movies = [
    {
      name: "The Invisible Guest",
      images: "movie1.jpg",
    },
    {
      name: "What Happened to Monday",
      images: "movie2.jpg",
    },
    {
      name: "Gone Girl",
      images: "movie3.jpg",
    },
    {
      name: "Who Am I",
      images: "movie4.jpg",
    },
    {
      name: "Exam",
      images: "movie5.jpg",
    },
    {
      name: "Split",
      images: "movie6.png",
    },
  ];
  const anime = [
    {
      name: "One Punch Man",
      images: "anime1.jpg",
    },
    {
      name: "Gintama",
      images: "anime2.jpg",
    },
    {
      name: "Boku no Hero",
      images: "anime3.jpg",
    },
    {
      name: "Hunter x Hunter",
      images: "anime4.jpg",
    },
    {
      name: "One Piece",
      images: "anime5.jpg",
    },
    {
      name: "Naruto Shippuden",
      images: "anime6.jpg",
    },
  ];
  const drakor = [
    {
      name: "A Business Proposal",
      images: "drakor1.jpg",
    },
    {
      name: " Twenty-Five Twenty-one",
      images: "drakor2.jpg",
    },
    {
      name: "Romance is a Bonus Book",
      images: "drakor3.jpg",
    },
    {
      name: "Marriage Contract",
      images: "drakor4.jpg",
    },
    {
      name: "Forecasting Love and Weather",
      images: "drakor5.jpg",
    },
    {
      name: "Crazy Love",
      images: "drakor6.jpg",
    },
  ];
  const donghua = [
    {
      name: "Huyao Xiao Hongniang",
      images: "donghua1.jpg",
    },
    {
      name: " Wu Geng Ji",
      images: "donghua2.jpg",
    },
    {
      name: "Da Yu Hai Tang",
      images: "donghua3.jpg",
    },
    {
      name: "Kitsune no Koe",
      images: "donghua4.jpg",
    },
    {
      name: "Jie Mo Ren (The Devil Ring)",
      images: "donghua5.jpg",
    },
    {
      name: "Wo De Tian Jie Nuyou",
      images: "donghua6.jpg",
    },
  ];
  const cartoon = [
    {
      name: "Aladdin (1992)",
      images: "cartoon1.jpg",
    },
    {
      name: "The Little Mermaid (1989)",
      images: "cartoon2.jpg",
    },
    {
      name: "Peter Pan (1953)",
      images: "cartoon3.jpg",
    },
    {
      name: "Alice in Wonderland (1951)",
      images: "cartoon4.jpg",
    },
    {
      name: "Beauty and the Beast (1991)",
      images: "cartoon5.jpg",
    },
    {
      name: "The Lion King (1994)",
      images: "cartoon6.jpg",
    },
  ];
  const drasia = [
    {
      name: "My Roommate is a Gumiho",
      images: "drasia1.jpg",
    },
    {
      name: "Moonlight",
      images: "drasia2.jpg",
    },
    {
      name: "Make a Wish",
      images: "drasia3.jpg",
    },
    {
      name: "Sweet Teeth",
      images: "drasia4.jpg",
    },
    {
      name: "Forever and Ever",
      images: "drasia5.jpg",
    },
    {
      name: "The Day of Becoming You",
      images: "drasia6.jpg",
    },
  ];
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
  const deskripsi = "The Jesh Streaming site is a web service that provides access to a database of video content originating from various sources. Available content includes movies, television shows, commercials, and more";
  const categoryDeskripsi = "Immediately watch interesting films on jesh streaming, and install your premium package so you can watch movies in HD";

  const handleFunction = { toggle };
  const state = { deskripsi, categoryDeskripsi, category, movies, responsiveSettings, anime, drakor,cartoon,drasia,donghua };
  return <GlobalContext.Provider value={{ handleFunction, state }}>{props.children}</GlobalContext.Provider>;
};
