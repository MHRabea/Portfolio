import React from "react";
import CarouselP1 from "./carouselP1";
import CarouselP2 from "./carouselP2";
import CarouselP3 from "./carouselP3";

const Portfolio = () => {
  // imageImporter.js
  const importAll = (context) => context.keys().map(context);

  const images = importAll(
    require.context(
      "../../public/images/Project 1 Screens",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const imagesII = importAll(
    require.context(
      "../../public/images/Project 2 Screens",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const imagesIII = importAll(
    require.context(
      "../../public/images/Project 3 Screens",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  return (
    <section
      id="portfolio"
      className="flex flex-col items-center justify-center z-0 w-screen max-w-[75rem] min-h-screen
    "
    >
      <div className="flex flex-col justify-center items-center p-4 w-[20rem] text-2xl font-mono">
        <span>Recent Projects</span>
        <span className="text-sky-400 ">Prortfolio</span>
      </div>
      <CarouselP1 images={images} />
      <CarouselP2 images={imagesII}/>
      <CarouselP3 images={imagesIII}/>
    </section>
  );
};

export default Portfolio;
