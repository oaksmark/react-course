import { forwardRef, useRef, useState } from "react";
import NewProject from "./NewProject.jsx";
import NoProject from "./NoProjec";
import ProjectArea from "./ProjectArea.jsx";
import Asaid from "./Aside.jsx";

const Projects = forwardRef(function Projects({ addProject }, ref) {
  const createProject = useRef();
  const [noProject, setNoProject] = useState(true);
  const [hasProject, setHasProject] = useState(false);
  const [newProject, setNewProject] = useState(false);

  function addProject() {
    createProject.current = false;
    setNoProject(createProject.current);
    setNewProject(true);
    console.log(noProject);
  }

  return (
    <>
      <Asaid ref={ref} onClick={addProject} />
      {noProject && <NoProject ref={createProject} onClick={addProject} />}
      {hasProject && <ProjectArea />}
      {newProject && <NewProject />}
    </>
  );
});
export default Projects;
