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
  FaGoogle,
} from "react-icons/fa";
import { RiFlutterLine } from "react-icons/ri";
import { IoLogoIonic, IoIosArrowBack } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";
import Link from "next/link";
import { Fade } from "react-reveal";

export default function profile() {
  return (
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
            ENGINEERING COLLEGE ,<br /> Chennai Persuing my Under Graduate
            Engineering Degree in{" "}
            <strong>Computer Science and Engineering</strong> ,
            <br /> Am a great fan of computers and a quick learner , eager to
            work on projects , Freelance Web and <br /> Mobile Application
            Developer, Love to Constantly Update myself on every new Projects,
            <br /> Guys, I can even Speak Japanese a little ,
            こにちわおれわーともだち UwU
            <br />
            below are the skills of mine. ( Viewport is not enough for all of my
            Skills :)
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
          <span className="skillbox node">
            <FaNodeJs />
            NodeJS
          </span>
        </Fade>
        <Fade top duration={2000}>
          <span className="skillbox sql">
            <FaDatabase />
            NoSQL,SQL,MySQL
          </span>
        </Fade>
        <Fade top duration={2500}>
          <span className="skillbox html">
            <FaHtml5 />
            HTML+CSS+JS
          </span>
        </Fade>
        <Fade top duration={3000}>
          <span className="skillbox flutter">
            <RiFlutterLine />
            Flutter
          </span>
        </Fade>
        <Fade top duration={3500}>
          <span className="skillbox ionic">
            <IoLogoIonic />
            Ionic
          </span>
        </Fade>
      </div>
      <div className="contacts">
        <Fade bottom duration={1000}>
          <div className="contact-card github">
            <FaGithub className="contact-icon" />
          </div>
        </Fade>
        <Fade bottom duration={1250}>
          <div className="contact-card gmail">
            <MdMailOutline className="contact-icon" />
          </div>
        </Fade>
        <Fade bottom duration={1500}>
          <div className="contact-card wa">
            <FaWhatsapp className="contact-icon" />
          </div>
        </Fade>
        <Fade bottom duration={2000}>
          <div className="contact-card dribble">
            <FaDribbble className="contact-icon" />
          </div>
        </Fade>
        <Fade bottom duration={2250}>
          <div className="contact-card insta">
            <FaInstagram className="contact-icon" />
          </div>{" "}
        </Fade>
        <Fade bottom duration={2500}>
          <div className="contact-card fb">
            <FaFacebook className="contact-icon" />
          </div>
        </Fade>
      </div>
    </div>
  );
}
