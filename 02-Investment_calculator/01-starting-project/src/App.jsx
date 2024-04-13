import Results from "./assets/components/Results.jsx";
import UserInput from "./assets/components/UserInput";
import { useState } from "react";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    expectedReturn: 0,
    annualInvestment: 0,
    duration: 0,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIndentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIndentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!inputIsValid && <p className="center">Please enter a duartion greater tham zero.</p>}
      {inputIsValid && <Results input={userInput}/>}
    </>
  );
}

export default App;
