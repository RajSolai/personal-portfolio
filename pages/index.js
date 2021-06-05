import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaInstagram,
  FaGithub,
  FaDribbble,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";
import ProjectCard from "./components/projectcard";
import { useEffect, useState } from "react";
import { RiFlutterLine } from "react-icons/ri";
import { IoLogoIonic } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";
import { SiRedux } from "react-icons/si";

export default function Home() {
  const [theprojects, settheprojects] = useState([]);
  const [unaltered, setUnaltered] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [theprevtarget, setprevtarget] = useState(null);
  useEffect(() => {
    axios
      .get("https://projects-api-servlet.herokuapp.com/projects")
      .then((res) => {
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
        <title>Solai Raj</title>
      </Head>
      <div className="wrapper">
        <div className="section home">
          <div className="greetbox">
            <div className="greettext">
              <p className="msg"> &nbsp;Hi , am</p>
              <p className="name">Solai Raj</p>
              <span>
                Student , Web & Mobile Developer ,<br /> IoT enthusiast (AI +
                IoT) , Linux Guy
              </span>
              <div className="btn-holder">
                <Link href="/projects">
                  <button>View Projects</button>
                </Link>
                <Link href="/profile">
                  <button className="secondary-btn">View Profile</button>
                </Link>
              </div>
            </div>
            <div className="greetimg">
              <img src="/mine.png" className="greetimg-img" alt="" />
            </div>
          </div>
        </div>
        <div className="section profile">
          <div className="content">
            <p>
              Hey ! Am Solai Raj , Just a Student from SRM VALLIAIAMMAI
              ENGINEERING COLLEGE ,<wbr /> Chennai Persuing my Under Graduate
              Engineering Degree in{" "}
              <strong>Computer Science and Engineering</strong> ,
              <wbr /> Am a great fan of computers and a quick learner , eager to
              work on projects , Freelance Web and <wbr /> Mobile Application
              Developer, Love to Constantly Update myself on every new Projects,
              <wbr /> Guys, I can even Speak Japanese a little ,
              こにちわおれわーともだち UwU
              <wbr />
              below are some skills of mine.
            </p>
          </div>
          <div className="skills">
            <span className="skillbox react">
              <FaReact />
              React
            </span>
            <span className="skillbox redux">
              <SiRedux />
              Redux
            </span>
            <span className="skillbox node">
              <FaNodeJs />
              NodeJS
            </span>
            <span className="skillbox sql">
              <FaDatabase />
              NoSQL,MySQL
            </span>
            <span className="skillbox html">
              <FaHtml5 />
              HTML+CSS+JS
            </span>
            <span className="skillbox flutter">
              <RiFlutterLine />
              Flutter
            </span>
            <span className="skillbox ionic">
              <IoLogoIonic />
              Ionic
            </span>
          </div>
          <div className="contacts">
            <motion.div
              initial={{
                // y: -20,
                opacity: 0,
                scaleX: 0,
                scaleY: 0,
              }}
              animate={{
                // y: 0,
                opacity: 100,
                scaleX: 1,
                scaleY: 1,
              }}
              transition={{
                duration: 1,
                type: "spring",
              }}
            >
              <div
                className="contact-card github"
                onClick={() => window.location.replace(navigate("github"))}
              >
                <FaGithub className="contact-icon" />
              </div>
            </motion.div>
            <motion.div
              initial={{
                // y: -20,
                opacity: 0,
                scaleX: 0,
                scaleY: 0,
              }}
              animate={{
                // y: 0,
                opacity: 100,
                scaleX: 1,
                scaleY: 1,
              }}
              transition={{
                duration: 1.5,
                type: "spring",
              }}
            >
              <div
                className="contact-card gmail"
                onClick={() => window.location.replace(navigate("gmail"))}
              >
                <MdMailOutline className="contact-icon" />
              </div>
            </motion.div>
            <motion.div
              initial={{
                // y: -20,
                opacity: 0,
                scaleX: 0,
                scaleY: 0,
              }}
              animate={{
                // y: 0,
                opacity: 100,
                scaleX: 1,
                scaleY: 1,
              }}
              transition={{
                duration: 2,
                type: "spring",
              }}
            >
              <div
                className="contact-card wa"
                onClick={() => window.location.replace(navigate("wa"))}
              >
                <FaWhatsapp className="contact-icon" />
              </div>
            </motion.div>
            <motion.div
              initial={{
                // y: -20,
                opacity: 0,
                scaleX: 0,
                scaleY: 0,
              }}
              animate={{
                // y: 0,
                opacity: 100,
                scaleX: 1,
                scaleY: 1,
              }}
              transition={{
                duration: 2.5,
                type: "spring",
              }}
            >
              <div
                className="contact-card dribble"
                onClick={() => window.location.replace(navigate("dribble"))}
              >
                <FaDribbble className="contact-icon" />
              </div>
            </motion.div>
            <motion.div
              initial={{
                // y: -20,
                opacity: 0,
                scaleX: 0,
                scaleY: 0,
              }}
              animate={{
                // y: 0,
                opacity: 100,
                scaleX: 1,
                scaleY: 1,
              }}
              transition={{
                duration: 3,
                type: "spring",
              }}
            >
              <div
                className="contact-card insta"
                onClick={() => window.location.replace(navigate("insta"))}
              >
                <FaInstagram className="contact-icon" />
              </div>{" "}
            </motion.div>
            <motion.div
              initial={{
                // y: -20,
                opacity: 0,
                scaleX: 0,
                scaleY: 0,
              }}
              animate={{
                // y: 0,
                opacity: 100,
                scaleX: 1,
                scaleY: 1,
              }}
              transition={{
                duration: 3.5,
                type: "spring",
              }}
            >
              <div
                className="contact-card fb"
                onClick={() => window.location.replace(navigate("fb"))}
              >
                <FaFacebook className="contact-icon" />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="section projects">
          <div className="project-categories">
            <button className="category-btn" onClick={changeCategory}>
              All projects
            </button>
            <button
              className="category-btn"
              id="flutter"
              onClick={changeCategory}
            >
              Flutter Apps
            </button>
            <button className="category-btn" id="gtk" onClick={changeCategory}>
              GTK Apps
            </button>
            <button className="category-btn" id="apis" onClick={changeCategory}>
              Backend APIs
            </button>
            <button className="category-btn" id="fweb" onClick={changeCategory}>
              Web Apps
            </button>
          </div>
          <div className="project-holder">
            {/* {isLoading ? (
              <p>Loading ...</p>
            ) : theprojects.length == 0 ? (
              <p>Oops, Nothing Found here !</p>
            ) : (
              theprojects.map((_data, key) => (
                <ProjectCard
                  key={key}
                  id={key}
                  name={_data.title}
                  desc={_data.desc}
                  link={_data.url}
                  lang={_data.langs}
                />
              ))
            )} */}
            <ProjectCard
                  name={"_data.title"}
                  desc={"_data.desc"}
                  link={"_data.url"}
                  lang={'_data.langs'}
                />
          </div>
        </div>
      </div>
    </>
  );
}
