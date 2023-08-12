import React from "react";
import {
  FaReact,
  FaHtml5,
  FaNodeJs,
  FaLaptopCode,
  FaJsSquare,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaAndroid,
  FaUserFriends,
  FaToolbox,
  FaComments,
  FaExchangeAlt,
} from "react-icons/fa";

import {
  BiLogoCss3,
  BiLogoTailwindCss,
  BiLogoVisualStudio,
  BiLogoMongodb,
  BiLogoFirebase,
  BiLogoRedux,
} from "react-icons/bi";

import {
  SiExpress,
  SiMui,
  SiChakraui,
  SiJquery,
  SiMysql,
} from "react-icons/si";

import { TbBrandReactNative, TbBrandCpp } from "react-icons/tb";

const Skills = () => {
  const skillsData = [
    {
      category: "Languages",
      skills: ["C/C++", "DSA", "JavaScript", "SQL (MySQL)", "HTML", "CSS"],
      ratings: [7, 9, 8, 7, 8, 7],
    },
    {
      category: "Frameworks",
      skills: [
        "ReactJs",
        "Node.js",
        "Express",
        "Firebase",
        "MongoDB",
        "Bootstrap",
        "Tailwind CSS",
        "React Native",
      ],
      ratings: [9, 7, 9, 6, 6, 5, 5, 4],
    },
    {
      category: "Libraries",
      skills: ["Material UI", "Chakra UI", "JQuery", "Redux"],
      ratings: [5, 8, 6, 7],
    },
    {
      category: "Developer Tools",
      skills: [
        "Git",
        "Github",
        "VS Code",
        "React Developer Tools",
        "Android Studio",
      ],
      ratings: [8, 9, 9.5, 3, 2],
    },
    {
      category: "Soft Skills",
      skills: ["Teamwork", "Problem solving", "Communication", "Adaptability"],
      ratings: [9, 9, 7, 9],
    },
  ];

  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center mb-4">
        <h1 className="text-2xl font-semibold">Skills</h1>
      </div>
      {skillsData.map((category, index) => (
        <div
          key={index}
          className="mb-6 bg-yellow-100 rounded-lg p-4 text-black"
        >
          <h2 className="text-xl font-semibold mb-2">{category.category}</h2>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {category.skills.map((skill, skillIndex) => (
              <SkillRating
                key={skillIndex}
                skill={skill}
                rating={category.ratings[skillIndex]}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;

const skillIcons = {
  "C/C++": <TbBrandCpp />,
  DSA: <FaLaptopCode />,
  JavaScript: <FaJsSquare />,
  "SQL (MySQL)": <SiMysql />,
  HTML: <FaHtml5 />,
  CSS: <BiLogoCss3 />,
  ReactJs: <FaReact />,
  "Node.js": <FaNodeJs />,
  Express: <SiExpress />,
  Firebase: <BiLogoFirebase />,
  MongoDB: <BiLogoMongodb />,
  Bootstrap: <FaBootstrap />,
  "Tailwind CSS": <BiLogoTailwindCss />,
  "React Native": <TbBrandReactNative />,
  "Material UI": <SiMui />,
  "Chakra UI": <SiChakraui />,
  JQuery: <SiJquery />,
  Redux: <BiLogoRedux />,
  Git: <FaGitAlt />,
  Github: <FaGithub />,
  "VS Code": <BiLogoVisualStudio />,
  "React Developer Tools": <FaReact />,
  "Android Studio": <FaAndroid />,
  Teamwork: <FaUserFriends />,
  "Problem solving": <FaToolbox />,
  Communication: <FaComments />,
  Adaptability: <FaExchangeAlt />,
};

const SkillRating = ({ skill, rating }) => {
  return (
    <div>
      <div className="flex font-semibold mb-1">
        <span className="mr-1">{skillIcons[skill]}</span>
        <span>{skill}</span>
      </div>
      <div className="bg-gray-200 rounded-full">
        <div
          className="bg-blue-500 text-xs leading-none py-1 rounded-full"
          style={{ width: `${(rating / 10) * 100}%` }}
        />
      </div>
    </div>
  );
};
