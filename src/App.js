import React, { useState } from "react";
import NewUserData from "./components/UserData/NewUserData";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  const addNewUser = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  return (
    <div>
      <NewUserData newUser={addNewUser} />

      <ul className="goal-list">
        {courseGoals.map((goal) => (
          <li key={goal.id} id={goal.id}>
            {goal.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
