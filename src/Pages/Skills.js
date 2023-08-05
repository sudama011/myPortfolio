import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faReact,
  faNodeJs,
  faJs,
  faGithub,
  faBootstrap,
  faCss3,
  faGitAlt,
  faAndroid
} from "@fortawesome/free-brands-svg-icons";

import {
  faToolbox,
  faCode,
  faLaptopCode,
  faDatabase,
  faUserFriends,
  faComments,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";

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
        <FontAwesomeIcon icon={faCode} className="text-2xl mr-2" />
        <h1 className="text-2xl font-semibold">Skills</h1>
      </div>
      {skillsData.map((category, index) => (
        <div key={index} className="mb-6 bg-yellow-100 rounded-lg p-4 text-black">
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
  "C/C++": faCode,
  DSA: faLaptopCode,
  JavaScript: faJs,
  "SQL (MySQL)": faDatabase,
  HTML: faHtml5,
  CSS: faCss3,
  ReactJs: faReact,
  "Node.js": faNodeJs,
  Express: faCode,
  Firebase: faDatabase,
  MongoDB: faDatabase,
  Bootstrap: faBootstrap,
  "Tailwind CSS": faCode,
  "React Native": faCode,
  "Material UI": faCode,
  "Chakra UI": faCode,
  JQuery: faCode,
  Redux: faCode,
  Git: faGitAlt,
  Github: faGithub,
  "VS Code": faCode,
  "React Developer Tools": faCode,
  "Android Studio": faAndroid,
  Teamwork: faUserFriends,
  "Problem solving": faToolbox,
  Communication: faComments,
  Adaptability: faExchangeAlt,
};

const SkillRating = ({ skill, rating }) => {
  const icon = skillIcons[skill];

  return (
    <div>
      <div className="font-semibold mb-1">
        <FontAwesomeIcon icon={icon} className="mr-2" />
        {skill}
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
