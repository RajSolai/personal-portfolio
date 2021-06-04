import { FaGithub } from "react-icons/fa";

export default function ProjectCard(props) {
  return (
    <div className="project-card">
      <h3>{props.name}</h3>
      <p>{props.desc}</p>
      <p>{props.lang}</p>
      <a href={props.link} className="repo_btn">
        <FaGithub />
        &nbsp;View Repo
      </a>
    </div>
  );
}
