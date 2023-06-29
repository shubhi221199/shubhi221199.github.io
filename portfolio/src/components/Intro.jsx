import React from "react";
import img1 from "../images/pictures/personal.jpg";
import Typewriter from "typewriter-effect";

export default function Intro({ handleClick, boolean }) {
  return (
    <div id="home" className="hero" onClick={() => {
        if (boolean === false) handleClick();
      }}>
      <div className="home-img-cont">
        <div class="outer-circle circle circle-1">
          <span class="sq sq-1"></span>
          <span class="inner-circle circle">
            <img className="home-img" src={img1} alt="personal" />
          </span>
          <span class="sq sq-2"></span>
        </div>
      </div>
      <div className="intro give-padding contain">
        <div className="txt-light-red twent">
          Hello...<span className="wave"> 👋🏻</span>, My name is
        </div>
        <div id="user-detail-name" className="bio name lighter-red">
          Shubhi Sharma.
        </div>
        <div className="bio what-i-do">
          <Typewriter 
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Frontend Developer.")
                .pause(2000)
                .deleteAll()
                .typeString("Backend Developer.")
                .pause(2000)
                .deleteAll()
                .typeString("Full Stack Developer.")
                .pause(2000)
                .deleteAll()
                .start();
            }}
          />
        </div>
        <div>
          <div className="info">
          I am a skilled MERN stack developer proficient in MongoDB, Express.js, React.js, and Node.js. With a strong foundation in full-stack development, I excel at building responsive web applications that provide a seamless user experience.
          </div>
        </div>
        <div className="button-container">
          <a className="contact-button" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
