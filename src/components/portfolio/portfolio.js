import React from "react";
import ProjectCard1 from "./projectCard/projectCard1";
import ProjectCard2 from "./projectCard/projectCard2";
import ProjectCard3 from "./projectCard/projectCard3";
import ProjectCard4 from "./projectCard/projectCard4";
import ProjectCard5 from "./projectCard/projectCard5";

const Portfolio = () => {
  // imageImporter.js
  const importAll = (context) => context.keys().map(context);

  const images = importAll(
    require.context(
      "../../../public/images/Project 1 Screens",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const imagesII = importAll(
    require.context(
      "../../../public/images/Project 2 Screens",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const imagesIII = importAll(
    require.context(
      "../../../public/images/Project 3 Screens",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const imagesIV = importAll(
    require.context(
      "../../../public/images/Project 4 Screens",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const imagesV = importAll(
    require.context(
      "../../../public/images/Project 5 Screens",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  return (
    <section
      id="portfolio"
      className="flex flex-col items-center justify-center w-screen max-w-[75rem] min-h-screen
    "
    >
      <div className="flex flex-col justify-center items-center p-4 w-[20rem] text-2xl font-mono mt-10 border-b-2">
        <h4>Recent Projects</h4>
        <h3 className="text-sky-400">Prortfolio</h3>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5">
        <ProjectCard1 images={images} />
        <ProjectCard2 images={imagesII} />
        <ProjectCard3 images={imagesIII} />
        <ProjectCard4 images={imagesIV} />
        <ProjectCard5 images={imagesV}/>
      </div>
    </section>
  );
};

export default Portfolio;
