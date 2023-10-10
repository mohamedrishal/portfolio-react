import React from "react";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/js.png";
import bootstrapLogo from "../assets/bootstrap.png";
import githubLogo from "../assets/github-v.png";
import reactLogo from "../assets/react.png";
import tailwindLogo from "../assets/tailwind.png";
import nodejsLogo from "../assets/node-js.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: htmlLogo,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: cssLogo,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: jsLogo,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: bootstrapLogo,
      title: "Bootstrap",
      style: "shadow-pink-400",
    },
    {
      id: 5,
      src: reactLogo,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: nodejsLogo,
      title: "Node Js",
      style: "shadow-green-500",
    },
    {
      id: 7,
      src: tailwindLogo,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: githubLogo,
      title: "HTML",
      style: "shadow-orange-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto  p-4 flex flex-col justify-center w-full h-full text-green-500">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6 ">These are the technologies I 've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center  py-8 px-12 sm:px-0 ">
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto " />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
