import React from "react";
import { FaGithub } from "react-icons/fa";
import { Project } from "../interfaces/project";

const ProjectCard: React.FC<any> = (props: Project) => {
  return (
    <>
      <div className="project-card">
        <img
          src={props.img}
          className="project-card-image"
          loading="lazy"
          alt={props.title}
        />
        <div className="project-card-content">
          <h2 className="project-title">{props.title}</h2>
          <p>{props.desc}</p>
          <p>{props.langs}</p>
          <a href={props.repoLink} className="link">
            👉️&nbsp;Visit Website
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
