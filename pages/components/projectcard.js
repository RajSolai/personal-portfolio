import { FaGithub } from "react-icons/fa";

export default function ProjectCard(props) {
  return (
    <>
      <div className="project-card">
        <img
          src="https://core0.staticworld.net/images/article/2017/02/8-most-useful-android-app-shortcuts-phone-new-contact-app-shortcut_7-100709786-orig.jpg"
          className="project-card-image"
          alt={props.name}
        />
        <div className="project-card-content">
          <h3>{props.name}</h3>
          <p>{props.desc}</p>
          <p>{props.lang}</p>
          <a href={props.link} className="repo_btn">
            <FaGithub />
            &nbsp;View Repo
          </a>
        </div>
      </div>
    </>
  );
}
