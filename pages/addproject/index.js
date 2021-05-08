import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";

const AddProject = () => {
  const router = useRouter();
  const checkAuth = () => {
    if (!localStorage.getItem("isLogged")) {
      router.push("/projects");
    }
  };
  useEffect(()=>{checkAuth()}, []);
  return (
    <>
      <Head>
        <title>Solai Raj - Login</title>
      </Head>
    </>
  );
};

export default AddProject;