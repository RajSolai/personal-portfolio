import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard(props) {
  return (
    <>
      <motion.div
        initial={{
          scaleX: 0,
          scaleY: 0,
          opacity: 0,
        }}
        animate={{
          scaleX: 1,
          scaleY: 1,
          opacity: 100,
        }}
        transition={{
          type: "spring",
          duration: props.id == 0 ? 0.5 : props.id * 0.5,
        }}
      >
        <div className="project-card">
          <h3>{props.name}</h3>
          <p>{props.desc}</p>
          <p>{props.lang}</p>
          <a href={props.link} className="repo_btn">
            <FaGithub />
            &nbsp;View Repo
          </a>
        </div>
      </motion.div>
    </>
  );
}
