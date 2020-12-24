//projects.js
import { Fade } from "react-reveal";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import ProjectCard from "./projectcard";

export default function project() {
  return (
    <div className="projects">
      <Fade left>
        <span className="titlewrap">
          <Link href="/">
            <IoIosArrowBack />
          </Link>
          <p>My Profile</p>
        </span>
      </Fade>
      <div className="project-holder">
        <ProjectCard lang="bro" />
      </div>
    </div>
  );
}
