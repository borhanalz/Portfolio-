import { Divider } from "antd";
import React from "react";
import { AiOutlineAntDesign } from "react-icons/ai";
import { CiMobile1 } from "react-icons/ci";
import { DiJqueryLogo, DiReact } from "react-icons/di";
import { FaCss3, FaGit, FaGithub, FaHtml5, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui, SiReactquery, SiRedux, SiTypescript } from "react-icons/si";

const Skills = () => {
  const skillsData = [
    {
      id: 1,
      name: "React.js",
      icon: <DiReact className="inline-block text-3xl" />,
    },
    {
      id: 2,
      name: "Javascript",
      icon: <IoLogoJavascript className="inline-block text-3xl" />,
    },
    {
      id: 3,
      name: "Typescript",
      icon: <SiTypescript className="inline-block text-3xl" />,
    },
    {
      id: 4,
      name: "Jquery",
      icon: <DiJqueryLogo className="inline-block text-3xl" />,
    },
    {
      id: 5,
      name: "ReactQuery",
      icon: <SiReactquery className="inline-block text-3xl" />,
    },
    {
      id: 6,
      name: "Redux",
      icon: <SiRedux className="inline-block text-3xl" />,
    },
    {
      id: 7,
      name: "AntDesign",
      icon: <AiOutlineAntDesign className="inline-block text-3xl" />,
    },
    {
      id: 8,
      name: "MUI",
      icon: <SiMui className="inline-block text-3xl" />,
    },
    {
      id: 14,
      name: "Tailwind",
      icon: <RiTailwindCssFill className="inline-block text-3xl" />,
    },
    {
      id: 9,
      name: "HTML",
      icon: <FaHtml5 className="inline-block text-3xl" />,
    },
    { id: 10, name: "CSS", icon: <FaCss3 className="inline-block text-3xl" /> },
    {
      id: 11,
      name: "Sass",
      icon: <FaSass className="inline-block text-3xl" />,
    },
    {
      id: 12,
      name: "Git",
      icon: <FaGithub className="inline-block text-3xl" />,
    },
    {
      id: 13,
      name: "GitHub",
      icon: <FaGit className="inline-block text-3xl" />,
    },
    {
      id: 15,
      name: "Responsive",
      icon: <CiMobile1 className="inline-block text-3xl" />,
    },
  ];
  return (
    <div className="my-20">
      <p className="text-3xl text-center opacity-45 md:text-[40px] text-[#A6BBCC]">
        Skills
      </p>
      <div className="text-2xl text-gray-300 grid mt-10 grid-cols-1 md:grid-cols-3 gap-14">
        {skillsData.map((skill) => {
          return (
            <div
              key={skill.id}
              className="bg-zinc-800 p-3 text-center space-x-4 rounded-xl shadow-xl"
            >
              {skill.icon}
              <p className="inline-block w-20">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
