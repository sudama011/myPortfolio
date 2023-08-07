import React from "react";
import { TypeAnimation } from "react-type-animation";
import pic from "../Assets/pic.png";
const Home = () => {
  return (
    <div className="flex flex-row text-white h-full w-full mt-3">
      <div className="flex flex-col justify-center md:ml-10 lg:ml-24 w-1/2 pl-3">
        <h1 className="text-4xl text-green-400 font-bold mb-5">Sudama Dhakad</h1>

        <TypeAnimation
          sequence={[
            "I'm Student.",
            1000,
            "I'm Competitive Programmer.",
            1000,
            "I'm Full Stack Developer.",
            1000,
            "I'm Quick Learner.",
            1000,
          ]}
          wrapper="strong"
          speed={65}
          style={{ whiteSpace: "pre-line", fontSize: "24px", color: "#f0f" }}
          repeat={Infinity}
        />
      </div>
      <div className="flex flex-col  items-center w-1/2 h-fit">
        <img src={pic} alt="sudama.png" />
      </div>
    </div>
  );
};

export default Home;
