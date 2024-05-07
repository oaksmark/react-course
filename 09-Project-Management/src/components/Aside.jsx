export default function Asaid({ onClick, userInput, isSelected, selectProject }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <button
        onClick={() => onClick()}
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      >
        + Add Project
      </button>
      <ul className="mt-8 font-bold uppercase">
        {userInput.map((inputs) => {
          if(inputs.id !== 0)
          return <button
            key={self.crypto.randomUUID()}
            id={inputs.id}
            className={`w-full text-left px-2 py-1 rounded-sm my-1 ${inputs.id == isSelected?
              " text-stone-200 bg-stone-800" : " hover:text-stone-200 hover:bg-stone-800"}`}
            disabled={inputs.id == 0 ?? true }
            onClick={() => {selectProject(userInput.findIndex((x) => x.id == inputs.id),inputs.id)}}
          >
            {inputs.title}
          </button>
        })}
      </ul>
    </aside>
  );
}
