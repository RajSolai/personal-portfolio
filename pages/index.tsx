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
      <div className="wrapper">
        <Greeter />
        <Profile />
        <Projects />
      </div>
    </>
  );
};

export default Home;
