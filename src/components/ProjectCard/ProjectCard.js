import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={"images/" + props.image} />
      </div>
      
      <div className="content">
        <ul>
          <li>
            <strong>Project:</strong> {props.name}
          </li>
          <li>
            <strong>Descripton:</strong> {props.description}
          </li>
          <li>
             <a target="_blank" rel="noreferrer" href={props.url}><strong>Deployed Project</strong></a>
          </li>
          <li>
             <a target="_blank" rel="noreferrer" href={props.repo}><strong>Github Repo</strong></a>
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default ProjectCard;