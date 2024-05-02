import { useRef, useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProject from "./components/NoProjec";
import ProjectArea from "./components/ProjectArea.jsx";
import Aside from "./components/Aside.jsx";
import { DATA_PROJECT } from "./components/data.js";
import Modal from "./components/Modal.jsx";

export default function App({ addProject }, ref) {
  // const lastId = useRef(Number(userInput[userInput.length - 1].id));
  const dialog = useRef();
  const createProject = useRef(false);
  const taskInput = useRef(null);
  const titleInpt = useRef();
  const descrInput = useRef();
  const dateInput = useRef();
  const [noProject, setNoProject] = useState(true);
  const [hasProject, setHasProject] = useState(false);
  const [newProject, setNewProject] = useState(false);
  const [userInput, setUserInput] = useState(DATA_PROJECT);
  const [idCtrl, setIdCtrl] = useState(
    Number(userInput[userInput.length - 1].id)
  );
  const [taskId, setTaskId] = useState(0);
  const [indexPriority, setIndexPriority] = useState(
    userInput.length - Number(1)
  );
  const [idPriority, setIdPriority] = useState(idCtrl);

  console.log(userInput);
  console.log("current id " + idCtrl + " id " + userInput[0].id);
  console.log("index priority " + indexPriority + " idPriority " + idPriority);
  // console.log("IdToIndex " + idToIndex.current);
  


  function addProject() {
    setNoProject(false);
    setNewProject(true);
    setHasProject(false);
    setIdPriority(idCtrl);
    // handleUserInput();
    setIndexPriority(userInput.length - Number(1)); //observação
    setIdCtrl(Number(idCtrl + 1));
    // console.log(noProject);
  }
  function cancelProject() {
    setNoProject(true);
    setNewProject(false);
    setHasProject(false);
    setIdCtrl(Number(idCtrl - 1));
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
    console.log("idAside " + id + " index " + index);
  }

  function handleUserInput() {
    // setIsEditing((editing) => !editing);
    const title = titleInpt.current.value;
    const description = descrInput.current.value;
    const date = dateInput.current.value;

    if (title == "" || description == "" || date == "") {
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
              tasks: [],
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
              tasks: [],
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
    // let taskIndex = taskInput.findIndex((x) => x.id == idToIndex.current.id);
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
    // setIndexPriority(Number(indexPriority));
    // setNewProject(false);
    // setHasProject(true);
    // setNoProject(false);
     }
  }

  function deleteProject(index, id) {
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

  function clearTask(id) {
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
    console.log(id);
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Modal ref={dialog}/>      
      <Aside
        onClick={addProject}
        userInput={userInput}
        selectProject={handleSelectProject}
      />

      {noProject && <NoProject ref={createProject} onClick={addProject} />}
      {hasProject && (
        <ProjectArea
          ref={{ ref1: userInput, ref2: taskInput, ref3: indexPriority }}
          onSubmit={handleUserTask}
          onDelete={deleteProject}
          onClear={clearTask}
        />
      )}
      {newProject && (
        <NewProject
          ref={{ ref1: titleInpt, ref2: descrInput, ref3: dateInput }}
          userInput={userInput}
          onSubmit={handleUserInput}
          onCancel={cancelProject}
        />
      )}
    </main>
  );
}
