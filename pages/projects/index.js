//projects.js
import { Fade } from "react-reveal";
import Link from "next/link";
import Head from "next/head";
import { IoIosArrowBack } from "react-icons/io";
import ProjectCard from "./projectcard";
import { data } from "../../data/projectsdata";

export default function project() {
  return (
    <>
      <Head>
        <title>Solai Raj - Projects</title>
      </Head>
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
          {data == null ? (
            <p>Loading</p>
          ) : (
            data.map((_data, key) => (
              <Fade bottom delay={100 + 90 * key}>
                <ProjectCard
                  key={key}
                  name={_data.projectname}
                  desc={_data.projectdesc}
                  link={_data.porjectlink}
                  lang={_data.projectlang}
                />
              </Fade>
            ))
          )}
        </div>
      </div>
    </>
  );
}
<ProjectCard />;
