import dynamic from "next/dynamic";

const ProjectCard = dynamic(() => import("./projectcard"));

const Projects: React.FC = () => {
  return (
    <section className="section projects" id="projects">
      <h1>Projects Of Mine</h1>
      <div className="project-holder">
        <ProjectCard
          img={
            "https://firebasestorage.googleapis.com/v0/b/pushy-9740f.appspot.com/o/portfolio%2Fsrm%20vec%20website.png?alt=media&token=f244dd0b-f3c3-4472-92f4-5b7b7d590638"
          }
          title={"SRM VEC YRC Website"}
          desc={"Official YRC website for SRM Valliammai Engineering College."}
          repoLink={"https://srmvecyrc.web.app/"}
          langs={"React JS, Firebase, MongoDB"}
        />
        <ProjectCard
          img={
            "https://firebasestorage.googleapis.com/v0/b/pushy-9740f.appspot.com/o/portfolio%2Fslt%20project.png?alt=media&token=cc030efb-aee6-4e73-a4a6-c8fa964c6655"
          }
          title={"SLT - Sign Language Translator"}
          desc={"Translate Sign language(s) to Words."}
          repoLink={"https://github.com/RajSolai"}
          langs={"Tensorflow , Py3 , Flutter"}
        />
        <ProjectCard
          img={
            "https://firebasestorage.googleapis.com/v0/b/pushy-9740f.appspot.com/o/portfolio%2Flendbook.png?alt=media&token=5711a259-a077-4799-9436-790e03de4a32"
          }
          title={"Lendbook"}
          desc={"A Simple Platform to lend and share Books."}
          repoLink={"https://github.com/RajSolai/lendbook-app"}
          langs={"Flutter , Dart , Firebase"}
        />
        <ProjectCard
          img={
            "https://firebasestorage.googleapis.com/v0/b/pushy-9740f.appspot.com/o/portfolio%2Fresponse%20banner.png?alt=media&token=9fa4bc38-36b4-4fe2-a224-fcab7cd65aa5"
          }
          title={"Response"}
          desc={"App to Test your web page's Responsiveness in Linux Desktop."}
          repoLink={"https://flathub.org/apps/details/com.github.rajsolai.response"}
          langs={"Gtk , Vala"}
        />
      </div>
    </section>
  );
};

export default Projects;
