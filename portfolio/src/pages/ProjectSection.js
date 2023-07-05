// ProjectSection.js

import React from 'react';
import ProjectBlock from './ProjectBlock';

const ProjectSection = ({ projects }) => {
    const groupedProjects = projects.reduce((acc, project) => {
        if (!acc[project.type]) {
            acc[project.type] = [];
        }
        acc[project.type].push(project);
        return acc;
    }, {});

    return (
        <div className="aboutInner2">
            {Object.keys(groupedProjects).map((type) => (
                <div key={type} className="projects-section">
                    <h2 className="section-header">{type}</h2>
                    <div className="projects-container">
                        {groupedProjects[type].map((project) => (
                            <ProjectBlock key={project.id} data={project} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectSection;
