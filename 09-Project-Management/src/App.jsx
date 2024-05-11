import { useRef, useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProject from "./components/NoProjec.jsx";
import ProjectArea from "./components/ProjectArea.jsx";
import Aside from "./components/Aside.jsx";
import { DATA_PROJECT } from "./components/data.js";

export default function App() {
  const dialog = useRef();
  const taskInput = useRef(null);
  const [noProject, setNoProject] = useState(true);
  const [hasProject, setHasProject] = useState(false);
  const [newProject, setNewProject] = useState(false);
  const [userInput, setUserInput] = useState(DATA_PROJECT);
  const [idCtrl, setIdCtrl] = useState(Number(userInput[userInput.length - 1].id));
  const [taskId, setTaskId] = useState(1);
  const [indexPriority, setIndexPriority] = useState(userInput.length - Number(1));
  const [idPriority, setIdPriority] = useState(idCtrl);
  const [isSelected, setIsSelected] = useState(null);

  console.log(userInput);
  console.log("current id " + idCtrl + " id " + userInput[0].id);
  console.log("index priority " + indexPriority + " idPriority " + idPriority);
  


  function addProject() {
    setNoProject(false);
    setNewProject(true);
    setHasProject(false);
    setIdPriority(idCtrl);
    setIndexPriority(userInput.length - Number(1));
    setIdCtrl(Number(idCtrl + 1));
    setIsSelected(Number(idCtrl + 1))
    // console.log(noProject);
  }
  function cancelProject() {
    setNoProject(true);
    setNewProject(false);
    setHasProject(false);
    setIdCtrl(Number(idCtrl - 1));
    setIsSelected(null);
  }
  // Existe um Hook específico pra sibmit de forms (react-hook-form)
  // https://www.freecodecamp.org/news/how-to-build-forms-in-react/
  // function handleChange(inputIndentifier, newValue) {
  //   setUserInput((prevUserInput) => {
  //     return {
  //       ...prevUserInput,
  //       [inputIndentifier]: newValue,
  //     };
  //   });
  // }
  function handleSelectProject(index, id) {
    // setIdCtrl(index.current.getAttribute("idctrl"));
    // setIdCtrl(lastId.current.id);
    setIdPriority(Number(id));
    setIndexPriority(Number(index));
    setNewProject(false);
    setHasProject(true);
    setNoProject(false);
    setIsSelected(Number(id));
    // console.log("idAside " + id + " index " + index);
  }

  function handleUserInput(inputs) {
    // setIsEditing((editing) => !editing);
    const title = inputs.title;
    const description = inputs.description;
    const date = inputs.date;
    const tasks =  {id: 0};
    // console.log(inputs);

    if (title.trim() === "" || description.trim() === "" || date.trim() === "") {
      dialog.current.showModal();
      setNewProject(true);
      setHasProject(false);
    } else {
      if (userInput[0].id !== Number(0)) {
        setIndexPriority(indexPriority + Number(1)),
          setIdPriority(idPriority + Number(1)),
          setUserInput((prevUserInput) => [
            ...prevUserInput,
            {
              // id: self.crypto.randomUUID(),
              id: Number(idCtrl),
              title: title,
              description: description,
              date: date,
              tasks: [tasks],
            },
          ]);
        setNewProject(false);
        setHasProject(true);
      } else {
        setIndexPriority(Number(0)),
          setIdPriority(Number(1)),
          setUserInput([
            {
              // id: self.crypto.randomUUID(),
              id: Number(1),
              title: title,
              description: description,
              date: date,
              tasks: [tasks],
            },
          ]);
        setNewProject(false);
        setHasProject(true);
      }
    }

    // console.log(logIndex);
    // console.log(id);
    // console.log(userInput);
  }

  function handleUserTask() {
     if(taskInput.current.value == "") {
      dialog.current.showModal();
     } 
     else {
    setUserInput(
      userInput.map((project) =>
        project.id == idPriority? 
           {
              ...project,
              tasks: [
                ...project.tasks,
                { id: taskId, task: taskInput.current.value },
              ],
            }
          : project,
      )
    );
    setTaskId(Number(taskId + 1));
    taskInput.current.value = "";
     }
  }

  function handleDeleteProject(index, id) {
    const resetInputs = [
      {
        id: Number(0),
        title: "",
        description: "",
        date: "",
        tasks: [],
      },
    ];

    if (userInput.length == 1) {
      setUserInput(resetInputs),
        setIdCtrl(Number(0)),
        setIdPriority(Number(0)),
        setIndexPriority(Number(0)),
        setHasProject(false),
        setNoProject(true);
    } else {
      setUserInput(userInput.filter((project) => project.id !== id)),
        setHasProject(false),
        setNoProject(true),
        setIdPriority(id == 1 ? id + Number(1) : id - Number(1)),
        setIndexPriority(index == 0 ? index + Number(1) : index - Number(1));
    }
  }

  function handleClearTask(id) {
    setUserInput(
      userInput.map((project) =>
        project.id == idPriority
          ? {
              ...project,
              tasks: project.tasks.filter((task) => task.id !== id),
            }
          : project
      )
    );
    // console.log(id);
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Aside
        onClick={addProject}
        userInput={userInput}
        isSelected={isSelected}
        selectProject={handleSelectProject}
      />
      {noProject && <NoProject onClick={addProject} />}
      {hasProject && (
        <ProjectArea
          ref={{ ref1: taskInput, ref2: dialog }}
          userInput={userInput}
          indexPriority={indexPriority}
          onSubmit={handleUserTask}
          onDelete={handleDeleteProject}
          onClear={handleClearTask}
        />
      )}
      {newProject && (
        <NewProject
          ref={dialog}
          onSubmit={handleUserInput}
          onCancel={cancelProject}
        />
      )}
    </main>
  );
}
