import React, { useState, useEffect } from "react";
import "./Home.css";
import Layout from "./Layout";
import headshot from "../media/headshot.jpeg";
import ProjectSection from "./ProjectSection";

function Takoda() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://api.takodamundy.tech/git")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <>
      <Layout>
        <div className="title">
          <p className="intro">Hi, my name is</p>
          <div className="name">Takoda Mundy</div>
          <div className="actionStatement">Revolutionising with data.</div>
          <div className="para">
            I am passionate about exploring the full potential of data, machine
            learning, and cloud solutions. Applying these
            technologies to real-world challenges can lead to revolutionary
            changes in all industries.
          </div>
        </div>
        <div className="box aboutSec">
          <div className="about">1. About me</div>
          <div className="aboutInner">
            <div className="para aboutPara">
              Hi, I'm Takoda, a computer science student at Queensland
              University of Technology minoring in data-centric extension,
              and IoT & mobile technologies. I'm proficient in programming
              languages including Python, .NET, Java, JS, and SQL, and have
              experience with frameworks such as Flask, Django, Bootstrap, React, and
              Node. I'm skilled in database management, deployment using AWS and
              Docker, Machine Learning, and agile project management. My focus
              lies in Machine Learning and cloud computing for building
              intelligent systems and data-driven decision-making. I aim to hone
              my skills to assist organizations in harnessing data and cloud
              technology.
            </div>
            <div className="para aboutPara">
              {" "}
              <img src={headshot} alt="Headshot" className="head" />
            </div>
          </div>
        </div>
        <div className="box aboutSec">
          <div className="about">2. Projects</div>
          <ProjectSection projects={projects} />
        </div>
      </Layout>
    </>
  );
}

export default Takoda;
