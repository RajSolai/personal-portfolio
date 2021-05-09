import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";

const AddProject = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [url, setUrl] = useState("");
  const [langs, setLangs] = useState("");
  const checkAuth = () => {
    if (!localStorage.getItem("isLogged")) {
      router.push("/projects");
    }
  };
  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <>
      <Head>
        <title>Solai Raj - AddProject</title>
      </Head>
      <div className="admin-login">
        <div className="addproject-warp">
          <h3>Add Project</h3>
          <form action="https://projects-api-servlet.herokuapp.com/projects" method="POST" className="login-form addproject-form">
            <input
              className="project-entry"
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Title of project !"
            />
            <input
              className="project-entry"
              type="text"
              name="desc"
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Enter Description of project !"
            />
            <input
              className="project-entry"
              type="text"
              name="langs"
              onChange={(e) => setLangs(e.target.value)}
              placeholder="Enter Langs used on project !"
            />
            <input
              className="project-entry"
              type="text"
              name="url"
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter Url of Github !"
            />
            <button type="submit" >
              Add Project
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProject;
