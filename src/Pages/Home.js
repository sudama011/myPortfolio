import React from "react";
import { TypeAnimation } from "react-type-animation";
import pic from "../Assets/pic.png";
const Home = () => {
  return (
    <div className="flex flex-row text-white h-full w-full mt-3">
      <div className="flex flex-col justify-center items-center w-1/2 pl-3">
        <TypeAnimation
          sequence={[
            `Hi, I'm Sudama Dhakad. I'm a Full Stack Developer. My goal is to keep pushing the boundaries of what's possible in web development.
            I'm constantly seeking new challenges and projects to expand my skills and create meaningful experiences for users. 
            Thank you for visiting my portfolio! I hope you find my projects and creations inspiring. Let's connect and explore the possibilities of working together on exciting projects.`,
          ]}
          speed={65}
          style={{ whiteSpace: "pre-line", fontSize: "24px" }}
          deletionSpeed={0}
        />
      </div>
      <div className="flex flex-col  items-center w-1/2 h-fit">
        <img src={pic} alt="sudama.png" />
      </div>
    </div>
  );
};

export default Home;
