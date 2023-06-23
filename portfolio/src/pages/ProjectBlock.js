import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./ProjectBlock.css";

const ProjectBlock = ({ data }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="project-block" onClick={() => setShowPopup(true)}>
        <img src={data.photo} alt={data.title} className="project-image" />
        <div className="project-title">{data.title}</div>
      </div>

      {showPopup && (
        <div className="popup" onClick={() => setShowPopup(false)}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={data.photo} />
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <div className="tags">
                {data.tags.split(", ").map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <Card.Text>{data.description}</Card.Text>
              <Card.Text>Related Projects: {data.related_projects}</Card.Text>
              <Button variant="primary" href={data.link}>
                Go to Project
              </Button>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
};

export default ProjectBlock;
