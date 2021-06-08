import { FaHome, FaUser } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import { FiPackage } from "react-icons/fi";

import Head from "next/head";
import dynamic from "next/dynamic";

const Greeter = dynamic(() => import("./components/greeter"));
const Profile = dynamic(() => import("./components/profile"));
const Projects = dynamic(() => import("./components/projects"));

export const config = {
  unstable_runtimeJS: false,
};

const Home: React.FC<any> = () => {
  return (
    <>
      <Head>
        <title>RajSolai - Developer</title>
      </Head>
      <header>
        <nav>
          <ul>
            <li>
              <a href="">
                <FaHome />
                &nbsp;Home
              </a>
            </li>
            <li>
              <a href="#profile">
                <FaUser />
                &nbsp;Profile
              </a>
            </li>
            <li>
              <a href="#projects">
                <FiPackage />
                &nbsp;Projects
              </a>
            </li>
            <li>
              <a href="">
                <IoMdDocument />
                &nbsp;Resume
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="wrapper">
        <Greeter />
        <Profile />
        <Projects />
      </main>
      <footer className="footer">Thanks for visiting my profile.</footer>
    </>
  );
};

export default Home;
