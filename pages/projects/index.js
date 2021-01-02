//projects.js
import { Fade } from "react-reveal";
import Link from "next/link";
import Head from "next/head";
import { IoIosArrowBack } from "react-icons/io";
import ProjectCard from "./projectcard";
import { data } from "../../data/projectsdata";
import { useEffect, useState } from "react";

export default function project() {
  const [theprojects, settheprojects] = useState([]);
  const [theprevtarget, setprevtarget] = useState(null);
  useEffect(() => {
    settheprojects(data);
  }, []);
  const changeCategory = (event) => {
    if (theprevtarget) {
      theprevtarget.className = "category-btn";
    }
    setprevtarget(event.target);
    event.target.className += " category-btn-active";
    const filteredData = data.filter(
      (_data) => _data.searchkey == event.target.id
    );
    settheprojects(filteredData);
  };
  return (
    <>
      <Head>
        <title>Solai Raj - Projects</title>
      </Head>
      <div className="projects">
        <Fade top>
          <span className="titlewrap">
            <Link href="/">
              <IoIosArrowBack />
            </Link>
            <p>My Profile</p>
          </span>
        </Fade>
        <div className="project-categories">
          <Fade top>
            <button
              className="category-btn"
              id="flutter"
              onClick={changeCategory}
            >
              Flutter Apps
            </button>
          </Fade>
          <Fade top>
            <button className="category-btn" id="gtk" onClick={changeCategory}>
              GTK Apps
            </button>
          </Fade>
          <Fade top>
            <button className="category-btn" id="apis" onClick={changeCategory}>
              Backend APIs
            </button>
          </Fade>
          <Fade top>
            <button className="category-btn" id="fweb" onClick={changeCategory}>
              Web Apps
            </button>
          </Fade>
        </div>
        <div className="project-holder">
          {theprojects.length == 0 ? (
            <p>Oops, Nothing Found here !</p>
          ) : (
            theprojects.map((_data, key) => (
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
