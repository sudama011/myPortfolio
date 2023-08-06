import React from "react";
import udemyDSA from "../Assets/certificates/udemyDSA.png";
import cbCPP from "../Assets/certificates/cbCpp.png";
import cbFS from "../Assets/certificates/cbFS.png";
import udemyWebD from "../Assets/certificates/udemyWebD.png";

const Educations = () => {
  const educationData = [
    {
      institution: "Malaviya National Institute of Technology, Jaipur",
      degree: "Bachelor of Technology in Computer Science & Engineering",
      duration: "2020 - May 2024",
      location:
        "https://www.google.com/maps/place/Malaviya+National+Institute+of+Technology+Jaipur+(MNIT)/@26.8639772,75.8082027,17z/data=!3m1!4b1!4m6!3m5!1s0x396db66fe2879c7f:0xdfc843bf9b6f869a!8m2!3d26.8639724!4d75.8107776!16zL20vMDZ3N2Zs?entry=ttu",
    },
    {
      institution: "GOVT HSS Multi Malhar Ashram Indore, MP",
      degree: "Class 12th",
      duration: "2019 - 2020",
      board: "MPBSE",
      percentage: "90.20%",
      location:
        "https://www.google.com/maps/place/Malhar+Aashram+Govt+Higher+Sec+School/@22.7266175,75.8569721,16.45z/data=!4m17!1m10!3m9!1s0x3962fd75caab8901:0x43cfb5647536473c!2sMalhar+Aashram+Govt+Higher+Sec+School!8m2!3d22.7262897!4d75.8563801!10e5!14m1!1BCgIgAQ!16s%2Fg%2F1tdx7332!3m5!1s0x3962fd75caab8901:0x43cfb5647536473c!8m2!3d22.7262897!4d75.8563801!16s%2Fg%2F1tdx7332?entry=ttu",
    },
    {
      institution: "GOVT HSS Dongar, Raghogarh Guna, MP",
      degree: "Class 10th",
      duration: "2017 - 2018",
      board: "MPBSE",
      percentage: "95.80%",
      location:
        "https://www.google.com/maps/place/Govt+Higher+Secondary+School+Dongar/@24.4784123,77.1219418,16.69z/data=!4m12!1m5!3m4!2zMjTCsDI5JzE0LjkiTiA3N8KwMDcnMjUuOCJF!8m2!3d24.487463!4d77.123831!3m5!1s0x397af972a66c3223:0x9b3b267992962051!8m2!3d24.4801465!4d77.1246781!16s%2Fg%2F11f3wrgxkf?entry=ttu",
    },
  ];

  const onlineCertifications = [
    {
      name: "Mastering Data Structures & Algorithms using C and C++",
      googleDrive:
        "https://drive.google.com/file/d/1Mq1C1_pslPBHhc-Wfe4SCPV8U76R0fYX/view?usp=drive_link",
      bgImage: udemyDSA,
    },
    {
      name: "C++ Online Course by Coding Blocks",
      googleDrive:
        "https://drive.google.com/file/d/14vKhaYnQDVXOAx0HwogWgEcI_PsYbuMb/view?usp=drive_link",
      bgImage: cbCPP,
    },
    {
      name: "Full Stack Web Development Online Course by Coding Blocks",
      googleDrive:
        "https://drive.google.com/file/d/1quKl2oESyxegrcr7uN1SAUGhXPsFxykO/view?usp=drive_link",
      bgImage: cbFS,
    },
    {
      name: "CSS,Bootstrap,JavaScript, Web Development Course",
      googleDrive:
        "https://drive.google.com/file/d/1N8vSvSZmIP5jOoKWEUvbt2tXgAdkeJb9/view?usp=drive_link",
      bgImage: udemyWebD,
    },
  ];

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-semibold mb-4">Education -------</h1>
      {educationData.map((education, index) => (
        <div
          key={index}
          className="mb-6 flex items-center bg-blue-200 rounded-lg p-4 hover:bg-blue-300"
        >
          {education.image && (
            <img
              src={education.image}
              alt={`${education.institution} logo`}
              className="w-12 h-12 mr-4"
            />
          )}
          <div>
            <h2 className="text-xl text-black font-semibold">
              {education.degree}
            </h2>
            <p className="text-gray-600 mb-1">{education.institution}</p>
            <p className="text-gray-600 mb-1">{education.duration}</p>
            {education.board && (
              <p className="text-gray-600 mb-1">{`Board: ${education.board}`}</p>
            )}
            {education.percentage && (
              <p className="text-gray-600 mb-1">{`Percentage: ${education.percentage}`}</p>
            )}
            {education.location && (
              <p className="text-blue-900">
                <a
                  href={education.location}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </p>
            )}
          </div>
        </div>
      ))}

      <h1 className="text-2xl font-semibold mb-4">
        Online Certifications -------
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {onlineCertifications.map((certification, index) => (
          <div
            key={index}
            className="mb-6 text-black  bg-yellow-100 hover:bg-yellow-200 rounded-lg p-4"
          >
            <a
              href={certification.googleDrive}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center flex-col"
            >
              <img src={certification.bgImage} alt={certification.name} />
              <h2 className="text-xl font-semibold">{certification.name}</h2>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Educations;
