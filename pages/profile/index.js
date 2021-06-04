//profile.js
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
import { RiFlutterLine } from "react-icons/ri";
import { IoLogoIonic, IoIosArrowBack } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";
import { SiRedux } from "react-icons/si";
import Link from "next/link";
import Head from "next/head";
import { Fade } from "react-reveal";

export default function profile() {
  const navigate = (domain) => {
    let temp = "";
    switch (domain) {
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
        <title>Solai Raj - Profile</title>
      </Head>
      <div className="profile">
        <Fade left>
          <span className="titlewrap">
            <Link href="/">
              <IoIosArrowBack />
            </Link>
            <p>My Profile</p>
          </span>
        </Fade>
        <Fade right>
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
        </Fade>
        <div className="skills">
          <Fade top duration={1000}>
            <span className="skillbox react">
              <FaReact />
              React
            </span>
          </Fade>
          <Fade top duration={1500}>
            <span className="skillbox redux">
              <SiRedux />
             	Redux 
            </span>
          </Fade>
          <Fade top duration={2000}>
            <span className="skillbox node">
              <FaNodeJs />
              NodeJS
            </span>
          </Fade>
          <Fade top duration={2500}>
            <span className="skillbox sql">
              <FaDatabase />
              NoSQL,MySQL
            </span>
          </Fade>
          <Fade top duration={3000}>
            <span className="skillbox html">
              <FaHtml5 />
              HTML+CSS+JS
            </span>
          </Fade>
          <Fade top duration={3500}>
            <span className="skillbox flutter">
              <RiFlutterLine />
              Flutter
            </span>
          </Fade>
          <Fade top duration={4000}>
            <span className="skillbox ionic">
              <IoLogoIonic />
              Ionic
            </span>
          </Fade>
        </div>
        <div className="contacts">
          <Fade bottom duration={1000}>
            <div
              className="contact-card github"
              onClick={() => window.location.replace(navigate("github"))}
            >
              <FaGithub className="contact-icon" />
            </div>
          </Fade>
          <Fade bottom duration={1250}>
            <div
              className="contact-card gmail"
              onClick={() => window.location.replace(navigate("gmail"))}
            >
              <MdMailOutline className="contact-icon" />
            </div>
          </Fade>
          <Fade bottom duration={1500}>
            <div
              className="contact-card wa"
              onClick={() => window.location.replace(navigate("wa"))}
            >
              <FaWhatsapp className="contact-icon" />
            </div>
          </Fade>
          <Fade bottom duration={2000}>
            <div
              className="contact-card dribble"
              onClick={() => window.location.replace(navigate("dribble"))}
            >
              <FaDribbble className="contact-icon" />
            </div>
          </Fade>
          <Fade bottom duration={2250}>
            <div
              className="contact-card insta"
              onClick={() => window.location.replace(navigate("insta"))}
            >
              <FaInstagram className="contact-icon" />
            </div>{" "}
          </Fade>
          <Fade bottom duration={2500}>
            <div
              className="contact-card fb"
              onClick={() => window.location.replace(navigate("fb"))}
            >
              <FaFacebook className="contact-icon" />
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
}
