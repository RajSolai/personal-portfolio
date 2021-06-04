import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard(props) {
  return (
    <>
      <div className="project-card">
        <motion.div
          initial={{
            y: -20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 100,
          }}
        >
          <h3>{props.name}</h3>
          <p>{props.desc}</p>
          <p>{props.lang}</p>
          <a href={props.link} className="repo_btn">
            <FaGithub />
            &nbsp;View Repo
          </a>
        </motion.div>
      </div>
    </>
  );
}
