import { forwardRef } from "react";
import { DATA_PROJECT } from "./data";

const NewProject = forwardRef(function NewProject({ onSubmit, onCancel },ref) {

  const {ref1, ref2, ref3} = ref;

  return (
    <form onSubmit={(event) => onSubmit(event.preventDefault())} className="mt-12 text-center w-2/3">
      <div className="mt-12 text-right w-2/3">
        <menu className="flex items-center justify-end gap-4 my-4">
          <button onClick={onCancel} className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
            Save
          </button>
        </menu>
      </div>
      <div className="mt-12 text-left w-2/3">
        <label className="text-sm font-bold uppercase text-stone-500">
          Title
        </label>
        <input
         ref={ref1}
          name="title"
          type="text"
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        />
      </div>
      <div className="mt-12 text-left w-2/3">
        <label className="text-sm font-bold uppercase text-stone-500">
          Description
        </label>
        <textarea
         ref={ref2}
          name="description"
          type="text"
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        />
      </div>
      <div className="mt-12 text-left w-2/3">
        <label className="text-sm font-bold uppercase text-stone-500">
          Due Date
        </label>
        <input
         ref={ref3}
          name="date"
          type="date"
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        />
      </div>
    </form>
  );
});
export default NewProject;
