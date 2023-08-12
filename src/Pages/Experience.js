import React from "react";

const Experience = () => {
  const experienceData = [
    {
      title: "Web Development Intern",
      company: "CodeClause Technologies",
      location: "Remote",
      duration: "July 2023 - August 2023",
      description:
        `Developed a user-friendly ecommerce platform with smart search, secure checkout, and cart persistence features. Utilized MERN stack for robust functionality, showcasing expertise in web
development and UI design.`,
      certificateLink:
        "https://drive.google.com/file/d/1EbUJBo7YOgcpGQV5JzKU5WPzeLhkdLrp/view?usp=drive_link",
    },
  ];

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-semibold mb-4">Experience</h1>
      {experienceData.map((experience, index) => (
        <div
          key={index}
          className="mb-6 text-gray-600 bg-blue-200 hover:bg-blue-300 rounded-lg p-4"
        >
          <h2 className="text-xl text-black font-semibold mb-2">
            {experience.title}
          </h2>
          <p className="mb-1">
            {experience.company} - {experience.location}
          </p>
          <p className="mb-1">{experience.duration}</p>
          <p className="mb-4">{experience.description}</p>
          <a
            href={experience.certificateLink}
            className="bg-green-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
          </a>
        </div>
      ))}
    </div>
  );
};

export default Experience;
