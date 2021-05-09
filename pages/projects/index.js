//projects.js
import { Fade } from "react-reveal";
import Link from "next/link";
import Head from "next/head";
import { IoIosArrowBack } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import ProjectCard from "./projectcard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function project() {
  const [theprojects, settheprojects] = useState([]);
  const [unaltered, setUnaltered] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [theprevtarget, setprevtarget] = useState(null);
  useEffect(() => {
    axios.get("https://projects-api-servlet.herokuapp.com/projects").then(res=>{
      settheprojects(res.data);
      setUnaltered(res.data);
      setLoading(false);
    });
  }, []);
  const changeCategory = (event) => {
    if (theprevtarget) {
      theprevtarget.className = "category-btn";
    }
    setprevtarget(event.target);
    event.target.className += " category-btn-active";
    if (event.target.id) {
      const filteredData = unaltered.filter(
        (_data) => _data.searchkey == event.target.id
      );
      settheprojects(filteredData);
    } else {
      settheprojects(unaltered);
    }
  };
  return (
    <>
      <Head>
        <title>Solai Raj - Projects</title>
      </Head>
      <div className="projects">
        <Fade top>
          <span className="titlebar">
            <div className="titlewrap">
            <Link href="/">
              <IoIosArrowBack />
            </Link>
            <p>My Projects</p>
            </div>
            <Link href="/adminlogin">
              <MdAccountCircle />
            </Link>
          </span>
        </Fade>
        <div className="project-categories">
          <Fade top>
            <button className="category-btn" onClick={changeCategory}>
              All projects
            </button>
          </Fade>
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
          {
            isLoading ? (
              <p>Loading ...</p>
            ) : (
              theprojects.length == 0 ? (
                <p>Oops, Nothing Found here !</p>
              ) : (
                theprojects.map((_data, key) => (
                  <Fade bottom delay={100 + 90 * key}>
                    <ProjectCard
                      key={key}
                      name={_data.title}
                      desc={_data.desc}
                      link={_data.url}
                      lang={_data.langs}
                    />
                  </Fade>
                ))
              )    
            )
          }
          
        </div>
      </div>
    </>
  );
}
<ProjectCard />;
