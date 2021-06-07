import Link from "next/link";
import Head from "next/head";
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
import { RiFlutterLine } from "react-icons/ri";
import { IoLogoIonic } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";
import { SiRedux } from "react-icons/si";

export default function Home() {
  return (
    <>
      <Head>
        <title>Solai Raj</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap"
          rel="stylesheet"
        ></link>{" "}
      </Head>
      <nav>
        <ul>
          <li>Home</li>
          <li>Profile</li>
          <li>Projects</li>
          <li>Resume</li>
        </ul>
      </nav>
      <div className="wrapper">
        <div className="section home" id="home">
          <div className="greetbox">
            <div className="greettext">
              <p className="msg"> &nbsp;Hi , am</p>
              <p className="name">Solai Raj</p>
              <span>
                Student , Web & Mobile Developer ,<br /> IoT enthusiast (AI +
                IoT) , Linux Guy
              </span>
              <div className="btn-holder">
                <Link href="#projects">
                  <button>View Projects</button>
                </Link>
                <Link href="#profile">
                  <button className="secondary-btn">View Profile</button>
                </Link>
              </div>
            </div>
            <div className="greetimg">
              <img src="/mine.png" className="greetimg-img" alt="" />
            </div>
          </div>
        </div>
        <div className="section profile" id="profile">
          <h1>About Me</h1>
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
              こにちわおれわーともだち
              <wbr />
              below are some skills of mine.
            </p>
            <p>
              TODO: add skill strengths and weaks
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
            <div
              className="contact-card github"
              onClick={() => window.location.replace(navigate("github"))}
            >
              <FaGithub className="contact-icon" />
            </div>
            <div
              className="contact-card gmail"
              onClick={() => window.location.replace(navigate("gmail"))}
            >
              <MdMailOutline className="contact-icon" />
            </div>
            <div
              className="contact-card wa"
              onClick={() => window.location.replace(navigate("wa"))}
            >
              <FaWhatsapp className="contact-icon" />
            </div>
            <div
              className="contact-card dribble"
              onClick={() => window.location.replace(navigate("dribble"))}
            >
              <FaDribbble className="contact-icon" />
            </div>
            <div
              className="contact-card insta"
              onClick={() => window.location.replace(navigate("insta"))}
            >
              <FaInstagram className="contact-icon" />
            </div>{" "}
            <div
              className="contact-card fb"
              onClick={() => window.location.replace(navigate("fb"))}
            >
              <FaFacebook className="contact-icon" />
            </div>
          </div>
        </div>
        <div className="section projects" id="projects">
          <h1>Projects Of Mine</h1>
          <div className="project-holder">
            <ProjectCard
              name={"_data.title"}
              desc={"_data.desc"}
              link={"_data.url"}
              lang={"_data.langs"}
            />
            <ProjectCard
              name={"_data.title"}
              desc={"_data.desc"}
              link={"_data.url"}
              lang={"_data.langs"}
            />
            <ProjectCard
              name={"_data.title"}
              desc={"_data.desc"}
              link={"_data.url"}
              lang={"_data.langs"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
