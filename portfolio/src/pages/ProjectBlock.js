import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./ProjectBlock.css";

const ProjectBlock = ({ data }) => {
  const [showPopup, setShowPopup] = useState(false);

  const colors = ['#17a2b8', '#708090', '#483d8b', '#4682b4', '#5f9ea0', '#556b2f', '#8b4513'];


  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <>
      <div className="project-block" onClick={() => setShowPopup(true)}>
        <img src={data.photo} alt={data.title} className="project-image" />
        <div className="project-title">{data.title}</div>
      </div>

      {showPopup && (
        <div className="popup" onClick={() => setShowPopup(false)}>
          <div className="card-wrapper">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={data.photo} className="cardIMG"/>
              <Card.Body>
                <Card.Title className="cardTitle" >{data.title}</Card.Title>
                <div className="tags">
                  {data.tags.split(", ").map((tag, index) => (
                    <span key={index} className="tag" style={{backgroundColor: getRandomColor()}}>
                      {tag}
                    </span>
                  ))}
                </div>
                <Card.Text className="cardDesc">{data.description}</Card.Text>
                <div className="related-projects">
                <div className="relatedProjects">Related Projects:</div>
                  {data.related_projects.split(", ").map((project, index) => (
                    
                    <span key={index} className="related-project" style={{backgroundColor: getRandomColor()}}>
                       {project}
                    </span>
                  ))}
                </div>
                <Button className="go-to-project-btn" href={data.link}>
                  Go to Project
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectBlock;
