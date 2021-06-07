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
  const navigate = (domain) => {
    let temp = "";
    switch (domain) {
      case "projects":
        window.location = "#projects"
        break;
      case "profile":
        window.location = "#profile"
      break;
      case "home":
        window.location = "#start"
      break;
      case "github":
        temp = "https://github.com/RajSolai";
        break;
      case "gmail":
        temp = "mailto:msraj085@gmail.com";
        break;
      case "wa":
        temp =
          "https://wa.me/918428732579?text=Hey Contact from your solairaj.rocks";
        break;
      case "insta":
        temp = "https://www.instagram.com/raj.solai085/";
        break;
      case "insta":
        temp = "https://https://dribbble.com/msraj085";
        break;
      case "fb":
        temp = "https://www.facebook.com/msraj.085/";
        break;
      default:
        temp = "./projects";
        break;
    }
	return temp;
  };
  return (
    <>
      <Head>
        <title>Solai Raj</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <nav>
        <ul>
          <li onClick={() => navigate("home")}>Home</li>
          <li onClick={() => navigate("profile")}>Profile</li>
          <li onClick={() => navigate("projects")}>Projects</li>
          <li>Resume</li>
        </ul>
      </nav>
      <main className="wrapper">
        <section className="section home" id="home">
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
        <section className="section profile" id="profile">
          <h1>About Me</h1>
          <article className="content">
            <p>
              Hey ! Am Solai Raj , Just a Student from SRM VALLIAIAMMAI
              ENGINEERING COLLEGE ,<wbr /> Chennai Perusing my Under Graduate
              Engineering Degree in{" "}
              <strong>Computer Science and Engineering</strong> ,
              <wbr /> Am a great fan of computers and a quick learner , eager to
              work on projects , Freelance Web and <wbr /> Mobile Application
              Developer, Love to Constantly Update myself on every new Projects,
              <wbr /> Guys, I can even Speak Japanese a little ,
              こにちわおれわーともだち
            </p>
            <p>
              Obviously as am a student I love to explore new concepts in
              computer science, Starting my journey with <strong>Action Script Flash
              Games</strong> to <strong>Tensorflow</strong>. 
	      <wbr /> I learn new things and concepts quicker which is
              one of my Strengths. <wbr />
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
        <section className="section projects" id="projects">
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
