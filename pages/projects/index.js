//projects.js
import { Fade } from "react-reveal";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import ProjectCard from "./projectcard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function project() {
  const [proj, setProj] = useState(null);
  useEffect(() => {
    axios.get("./api/projects").then((res) => {
      setProj(res.data);
    });
  });
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
        {proj == null ? (
          <p>Loading</p>
        ) : (
          proj.map(
            (data, key) => (
              console.log(key),
              (
                <Fade bottom delay={100 + 90 * key}>
                  <ProjectCard
                    key={key}
                    name={data.projectname}
                    desc={data.projectdesc}
                    link={data.porjectlink}
                    lang={data.projectlang}
                  />
                </Fade>
              )
            )
          )
        )}
      </div>
    </div>
  );
}
<ProjectCard />;
