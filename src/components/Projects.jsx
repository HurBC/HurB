import React from 'react';
import "../static/css/Projects.css";
import Timetris from '../static/img/Projects/image.png';
import DMManager from '../static/img/Projects/DunderMifflin.png';

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
            <Project name="Timetris" url={Timetris} />
            <Project name="Dunder Mifflin Manager (simple)" url={DMManager} />
        </div>
    )
}

export default Projects;