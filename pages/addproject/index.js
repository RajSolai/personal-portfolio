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
              placeholder="Enter Title of project !"
            />
            <input
              className="project-entry"
              type="text"
              name="desc"
              placeholder="Enter Description of project !"
            />
            <input
              className="project-entry"
              type="text"
              name="langs"
              placeholder="Enter Langs used on project !"
            />
            <input
              className="project-entry"
              type="text"
              name="url"
              placeholder="Enter Url of Github !"
            />
            <input
              className="project-entry"
              type="text"
              name="searchkey"
              placeholder="flutter/gtk/fweb/ionic"
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
