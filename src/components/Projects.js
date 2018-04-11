import React from 'react';

const Projects = (props) => {
    const myProjects = (
        <div>
            {props.projects.map((pro) =>
                <div className='item' key={pro.projectTitle}>
                    <h3>{pro.projectSubtitle}</h3>
                    <p>{pro.projectDescription}</p>
                </div>
            )}
        </div>
    );
    return (
        <div className='title'>
            <i className='fa fa-pencil'></i>
            <h2>PROJECTS</h2>
            {myProjects}
        </div>
    )
};

export default Projects;