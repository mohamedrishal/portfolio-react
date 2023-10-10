import React from "react";
import netflixClone from "../assets/portfolio/netflix-clone-react.png";
import portfolioResponsive from "../assets/portfolio/portfolio-frontend.png";
import figma from "../assets/portfolio/ui-figma.png";
import weatherFind from "../assets/portfolio/weather-find api.png";
import staticResponsive from "../assets/portfolio/bootstrap-static-responsive.png";
import registerForm from "../assets/portfolio/register-form-react.png";
import interestCalcu from "../assets/portfolio/simple-interset-calcu.png";
import snakeGame from "../assets/portfolio/snake-game-react.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: staticResponsive,
      demo: 'https://static-web-page-one.netlify.app/' ,
      code: 'https://github.com/mohamedrishal/Travel_Website.git' 
    },
    {
      id: 2,
      src: netflixClone,
      demo:'https://netflix-clone-app01-react.netlify.app/',
      code: 'https://github.com/mohamedrishal/Netflix-app.git'
    },
    {
      id: 3,
      src: figma,
      demo: 'https://euphoria-fig01-task.netlify.app/' ,
      code: '' 
    },
    {
      id: 4,
      src: weatherFind,
      demo: 'https://cityfindwether.netlify.app/' ,
      code: '' 
    },
    {
      id: 5,
      src: registerForm,
      demo: 'https://register-form-rishal.netlify.app/' ,
      code: '' 
    },
    {
      id: 6,
      src: interestCalcu,
      demo: 'https://simple-interest-app-calculator.netlify.app/' ,
      code: '' 
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b  from-black  to-gray-800 w-full text-green-500 md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl  font-bold inline border-b-4 border-gray-500 ">
            Portfolio
          </p>
          <p className="py-6 ">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,demo,code }) => (
            <div key={id} className="shadow-md shadow-green-700 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justfiy-center ">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ">
                  <a href={demo}>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 ">
                  <a href={code}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
