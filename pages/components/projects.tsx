import dynamic from "next/dynamic";

const ProjectCard = dynamic(() => import("./projectcard"));

const Projects: React.FC = () => {
  return (
    <section className="section projects" id="projects">
      <h1>Projects Of Mine</h1>
      <div className="project-holder">
        <ProjectCard
          id={1}
          title={"_data.title"}
          desc={"_data.desc"}
          repoLink={"_data.url"}
          langs={"_data.langs"}
        />
        <ProjectCard
          id={2}
          title={"_data.title"}
          desc={"_data.desc"}
          repoLink={"_data.url"}
          langs={"_data.langs"}
        />
        <ProjectCard
          id={3}
          title={"_data.title"}
          desc={"_data.desc"}
          repoLink={"_data.url"}
          langs={"_data.langs"}
        />
      </div>
    </section>
  );
};

export default Projects;
