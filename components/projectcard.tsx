import React from "react";
import Fade from "react-reveal/Fade";
import { FaGithub } from "react-icons/fa";
import { Project } from "../interfaces/project";

const ProjectCard: React.FC<any> = (props: Project) => {
  return (
    <>
      <Fade top duration={(props.id/2) * 1000}>
        <div className="project-card">
          <img
            src="https://core0.staticworld.net/images/article/2017/02/8-most-useful-android-app-shortcuts-phone-new-contact-app-shortcut_7-100709786-orig.jpg"
            className="project-card-image"
            loading="lazy"
            alt={props.title}
          />
          <div className="project-card-content">
            <h2 className="project-title">{props.title}</h2>
            <p>{props.desc}</p>
            <p>{props.langs}</p>
            <a href={props.repoLink} className="repo_btn">
              <FaGithub />
              &nbsp;View Repo
            </a>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default ProjectCard;
