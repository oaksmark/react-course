import { forwardRef, useRef } from "react";
import Modal from "./Modal";
import Input from "./Input";

const NewProject = forwardRef(function NewProject({ onSubmit, onCancel }, ref) {
  // const { ref1, ref2, ref3, ref4 } = ref;
  const title = useRef();
  const description = useRef();
  const date = useRef();

  function addAll() {
     onSubmit({
      title: title.current.value,
      description: description.current.value,
      date: date.current.value,
    })
    console.log(title.current.value);
  }

  return (
    <>
      <Modal ref={ref}>Please, fill all fields!</Modal>
      <form
        onSubmit={(event) => addAll(event.preventDefault())}
        className="mt-12 text-center w-2/3"
      >
        <div className="mt-12 text-right w-2/3">
          <menu className="flex items-center justify-end gap-4 my-4">
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
            >
              Save
            </button>
          </menu>
        </div>
        <Input ref={title} 
        label="title"
        name="title"
        type="text"
        />
        <Input ref={description}  
        label="description"
        name="description"
        type="text"
        textarea
        />
        <Input ref={date}
        label="due date"
        name="date"
        type="date"
        />
      </form>
    </>
  );
});
export default NewProject;
