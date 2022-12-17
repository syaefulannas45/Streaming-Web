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
  const list = [
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
  const deskripsi = "The Jesh Streaming site is a web service that provides access to a database of video content originating from various sources. Available content includes movies, television shows, commercials, and more";
  const categoryDeskripsi = "Immediately watch interesting films on jesh streaming, and install your premium package so you can watch movies in HD";
  const handleFunction = { toggle };
  const state = { deskripsi, categoryDeskripsi, category, list };
  return <GlobalContext.Provider value={{ handleFunction, state }}>{props.children}</GlobalContext.Provider>;
};
