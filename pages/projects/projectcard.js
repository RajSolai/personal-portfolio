import { FaGithub } from "react-icons/fa";

export default function ProjectCard(props) {
  return (
    <>
      <div className="project-card">
        <h3>Project name</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          dolor atque, expedita dignissimos distinctio in sed optio autem,
        </p>
        <p>lang</p>
        <a href="" className="repo_btn">
          <FaGithub size="20px" />
          &nbsp;<span>View Repo</span>
        </a>
      </div>
    </>
  );
}
