import Head from "next/head";
import dynamic from "next/dynamic";

const Greeter = dynamic(() => import("./components/greeter"));
const Profile = dynamic(() => import("./components/profile"));
const Projects = dynamic(() => import("./components/projects"));

const Home: React.FC<any> = () => {
  return (
    <>
      <Head>
        <title>RajSolai - Developer</title>
      </Head>
      <header>
        <nav>
          <ul>
            <li onClick={() => (window.location.href = "#")}>Home</li>
            <li onClick={() => (window.location.href = "#profile")}>Profile</li>
            <li onClick={() => (window.location.href = "#projects")}>
              Projects
            </li>
            <li>Resume</li>
          </ul>
        </nav>
      </header>
      <main className="wrapper">
        <Greeter />
        <Profile />
        <Projects />
      </main>
      <footer className="footer">
        Thanks for visiting my profile.
      </footer>
    </>
  );
};

export default Home;
