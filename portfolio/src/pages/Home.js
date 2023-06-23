import React, { useState, useEffect } from "react";
import "./Home.css";
import Layout from "./Layout";
import headshot from "../media/headshot.jpeg";
import ProjectBlock from "./ProjectBlock";

function Takoda() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/git")
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
            learning, and cloud solutions. I believe that applying these
            technologies to real-world challenges can lead to revolutionary
            changes in all industries.
          </div>
        </div>
        <div className="box aboutSec">
          <div className="about">1. About me</div>
          <div className="aboutInner">
            <div className="para aboutPara">
              Hello, I'm Takoda Mundy, a computer science student at Queensland
              University of Technology minoring in data centric extension, and
              IoT and mobile technologies. I have completed courses in
              programming languages such as Python, .NET, Java, JS, and SQL, as
              well as frameworks like Flask, Bootstrap, React, and Node. I have
              experience in database management, deployment technologies such as
              AWS and Docker, Machine Learning, and project management
              methodologies such as Scrum and Agile. In addition to these areas,
              I'm particularly interested in Machine Learning and cloud
              computing, as I believe they can be used to create intelligent
              systems, make data-driven decisions, and support business
              operations. My goal is to continue to develop my skills and
              knowledge in these areas to help organizations leverage the power
              of data and cloud technologies.
            </div>
            <div className="para aboutPara">
              {" "}
              <img src={headshot} alt="Headshot" className="head" />
            </div>
          </div>
        </div>

        <div className="projects-container">
          {projects.map((project) => (
            <ProjectBlock key={project.id} data={project} />
          ))}
        </div>
      </Layout>
    </>
  );
}

export default Takoda;
