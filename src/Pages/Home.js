import React from "react";
import { TypeAnimation } from "react-type-animation";
import pic from "../Assets/pic.png";
const Home = () => {
  return (
    <div className="flex flex-row text-white h-full w-full">
      <div className="flex flex-col justify-center items-center w-1/2">
        <TypeAnimation
          sequence={[
            `Welcome to my portfolio!\nI'm a Full Stack Developer`,
            1000,
            "",
          ]}
          speed={50}
          style={{ whiteSpace: "pre-line", fontSize: "2em" }}
          repeat={Infinity}
        />
      </div>
      <div className="flex flex-col justify-center items-center w-1/2">
        <img src={pic} alt="sudama.png" />
      </div>
    </div>
  );
};

export default Home;
