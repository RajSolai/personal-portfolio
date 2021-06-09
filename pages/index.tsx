import Head from "next/head";
import Greeter from "../components/greeter";
import Profile from "../components/profile";
import Projects from "../components/projects";

export const config = {
  unstable_runtimeJS: false,
};

const Home: React.FC<any> = () => {
  return (
    <>
      <Head>
        <title>RajSolai - Developer</title>
      </Head>
      <div className="wrapper">
        <Greeter />
        <Profile />
        <Projects />
      </div>
    </>
  );
};

export default Home;
