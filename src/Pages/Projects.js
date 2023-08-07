import React from "react";

const Projects = () => {
  const projectsData = [
    {
      title: "Chat Application",
      description:
        "A real-time chat application built with React, Node.js, Express, and Socket.io. Users can create groups, send messages.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Chakra-ui"],
      demoLink: "https://chat-app-10.vercel.app/",
      codeLink: "https://github.com/sudama011/chat-app",
    },
    {
      title: "E-commerce Website",
      description:
        "A fully functional e-commerce website built with React and Redux. Users can browse products, add items to their cart, and proceed to checkout.",
      technologies: [
        "React",
        "Redux",
        "Node.js",
        "Express",
        "MongoDB",
        "Chakra-ui",
      ],
      demoLink: "https://happybuyers.vercel.app/",
      codeLink: "https://github.com/sudama011/CodeClause_Ecommerce_Website",
    },
    {
      title: "CRICLIVE",
      description: `Build a project using React and Cloud Firestore. 
      It includes an intuitive UI for creating tournaments,
scheduling matches, updating scorecards, and managing teams and players. 
Real-time updates and secure authentication are implemented`,

      technologies: ["React", "Cloud Firestore", "Firebase Authentication"],
      demoLink: "https://criclive-b357f.web.app/",
      codeLink: "https://github.com/sudama011/CRICLIVE",
    },
  ];

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-semibold mb-4">Projects ------</h1>
      {projectsData.map((project, index) => (
        <div key={index} className="mb-6  bg-blue-200 hover:bg-blue-300 rounded-lg p-4">
          <h2 className="text-xl text-black font-semibold mb-2">
            {project.title}
          </h2>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <p className="text-gray-600 mb-2">
            Technologies used: {project.technologies.join(", ")}
          </p>
          <div className="flex">
            {project.demoLink && (
              <a
                href={project.demoLink}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            )}
            {project.codeLink && (
              <a
                href={project.codeLink}
                className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
