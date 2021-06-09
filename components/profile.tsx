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
import { IoLogoIonic } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";
import { SiRedux } from "react-icons/si";

const Profile: React.FC<any> = () => {
  return (
    <>
      <section className="section profile" id="profile">
        <h1>About Me</h1>
        <article className="content animate__animated animate__fadeInDown">
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
            Obviously as am a student I love to explore new concepts in computer
            science, Starting my journey with{" "}
            <strong>Action Script Flash Games</strong> to{" "}
            <strong>Tensorflow</strong>.
            <wbr /> I learn new things and concepts quicker which is one of my
            Strengths. <wbr />
          </p>
        </article>
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
          <a href="https://github.com/RajSolai">
            <div className="contact-card github">
              <FaGithub className="contact-icon" />
            </div>
          </a>
          <a href="mailto:msraj085@gmail.com">
            <div className="contact-card gmail">
              <MdMailOutline className="contact-icon" />
            </div>
          </a>
          <a href="https://wa.me/918428732579?text=Hey Contact from your Web Profile">
            <div className="contact-card wa">
              <FaWhatsapp className="contact-icon" />
            </div>
          </a>
          <a href="https://https://dribbble.com/msraj085">
            <div className="contact-card dribble">
              <FaDribbble className="contact-icon" />
            </div>
          </a>
          <a href="https://www.instagram.com/raj.solai085/">
            <div className="contact-card insta">
              <FaInstagram className="contact-icon" />
            </div>
          </a>
          <a href="https://www.facebook.com/msraj.085/">
            <div className="contact-card fb">
              <FaFacebook className="contact-icon" />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Profile;
