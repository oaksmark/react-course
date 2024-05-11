export default function Tasks({ onClear, userInput, indexPriority }) {
  const index = indexPriority;
  return (
    <ul className="p-4 mt-8 rounded-md bg-stone-100">
      {userInput[index].tasks.map((taskIten) => {
        console.log(taskIten);
        return (
          <>
            {userInput[index].tasks.length == 1 && taskIten.id == 0 ? (
              <p className="flex justify-between my-4">No task add yet.</p>
            ) : null}
            {taskIten.id !== 0 ? (
              <div className="flex items-center justify-between">
                <div
                  key={self.crypto.randomUUID()}
                  id={taskIten.id}
                  className="flex justify-between my-4"
                >
                  {taskIten.task}
                </div>
                <button
                  onClick={() => onClear(taskIten.id)}
                  className="text-stone-700 hover:text-red-500"
                >
                  Clear
                </button>
              </div>
            ) : null}
          </>
        );
      })}
    </ul>
  );
}
