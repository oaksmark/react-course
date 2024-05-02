import { forwardRef } from "react";
import { DATA_PROJECT } from "./data";
const ProjectArea = forwardRef(function ProjectArea({ onSubmit, onDelete, onClear}, ref) {
  const { ref1, ref2, ref3 } = ref;
  const index = ref3;
  const dataProject = DATA_PROJECT;
  // console.log(dataProject[0].title);

  return (
    <div className="mt-24 text-center w-2/3">
      <div className="flex items-center justify-between">
        <h1
          className="text-3xl font-bold text-stone-600 mb-2"
          key={ref1[index].id}
        >
          {ref1[index].title}
        </h1>
        <button onClick={ () => onDelete(ref1.findIndex((x) => x.id == ref1[index].id ), ref1[index].id)} className="text-stone-700 hover:text-red-500">Delete</button>
      </div>
      <div className="text-left">
        <p className="text-stone-400 mb-4" key={ref1[index].date}>
          {ref1[index].date}
        </p>
        <p
          className="text-stone-600 whitespace-pre-wrap mb-4"
          key={ref1[index].description}
        >
          {ref1[index].description}
        </p>
        <hr />
        <h2 className="text-xl font-bold text-stone-700 my-4">Tasks</h2>
        <form
          onSubmit={(event) => onSubmit(event.preventDefault())}
          className="flex items-center gap-4"
        >
          <input
            ref={ref2}
            className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          />
          <button type="submit" className="text-stone-700 hover:text-stone-950">
            Add Tasks
          </button>
        </form>
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {ref1[index].tasks.map((taskIten) => {
            return (
              <div className="flex items-center justify-between">
                <div key={taskIten.task} id={taskIten.id} className="flex justify-between my-4">
                  {taskIten.task}
                </div>
                <button onClick={()=>onClear(taskIten.id)} className="text-stone-700 hover:text-red-500">
                  Clear
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
});
export default ProjectArea;
