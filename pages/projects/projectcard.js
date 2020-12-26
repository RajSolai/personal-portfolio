import { FaGithub } from "react-icons/fa";

export default function ProjectCard(props) {
  const getData = () => {
    let temp = [];
    Axios.get("./api/projects").then((res) => {
      temp = res.data;
    });
    return temp;
  };

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
