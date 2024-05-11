import { forwardRef } from "react";
import Modal from "./Modal.jsx";
import Tasks from "./Tasks.jsx"

const ProjectArea = forwardRef(function ProjectArea({ onSubmit, onDelete, onClear, userInput , indexPriority},ref) {
  const {ref1: taskInput , ref2: dialog } = ref;
  const index = indexPriority;

  return (
    <>
      <Modal ref={dialog}>Please, insert a task!</Modal>
      <div className="mt-24 text-center w-2/3">
        <div className="flex items-center justify-between">
          <h1
            className="text-3xl font-bold text-stone-600 mb-2"
            key={userInput[index].id}
          >
            {userInput[index].title}
          </h1>
          <button
            onClick={() =>
              onDelete(
                userInput.findIndex((x) => x.id == userInput[index].id),
                userInput[index].id
              )
            }
            className="text-stone-700 hover:text-red-500"
          >
            Delete
          </button>
        </div>
        <div className="text-left">
          <p className="text-stone-400 mb-4" key={userInput[index].date}>
            {new Date(userInput[index].date).toLocaleDateString("en-us", {
              timeZone: "UTC",
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
            {/* {new Date(userInput[index].date).toISOString()} */}
          </p>
          <p
            className="text-stone-600 mb-4 border-b-2 border-stone-300 pb-4 whitespace-pre-wrap"
            key={self.crypto.randomUUID()}
          >
            {userInput[index].description}
          </p>
          <h2 className="text-xl font-bold text-stone-700 my-4">Tasks</h2>
          <form
            onSubmit={(event) => onSubmit(event.preventDefault())}
            className="flex items-center gap-4"
          >
            <input
              ref={taskInput}
              className="w-64 px-2 py-1 rounded-sm bg-stone-200"
            />
            <button
              type="submit"
              className="text-stone-700 hover:text-stone-950"
            >
              Add Tasks
            </button>
          </form>
          <Tasks onClear={onClear} userInput={userInput} indexPriority={indexPriority}/>
        </div>
      </div>
    </>
  );
});
export default ProjectArea;
