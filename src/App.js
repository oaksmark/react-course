import React, { useState } from 'react';
import NewUserData from './components/UserData/NewUserData';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  const addNewUser = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  return (
    <div>
    <NewUserData newUser={addNewUser}/>
    <p>{courseGoals}</p>
    </div>
  );
};

export default App;
