import React from 'react';
import "../static/css/Projects.css"

function Project(props) {
    return (
        <div className='project'>
            <h3>{props.name}</h3>
            <img src={props.url} className='projectImage' alt="" />
        </div>
    )
}

function Projects() {
    return (
        <div className='projects'>
            <Project name="Timetris" url="../static/img/Projects/image.png" />
            <Project name="Dunder Mifflin Manager (simple)" url="../static/img/Projects/DunderMifflin.png" />
        </div>
    )
}

export default Projects;