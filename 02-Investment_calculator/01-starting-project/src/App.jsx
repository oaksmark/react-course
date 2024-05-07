import Results from "./assets/components/Results.jsx";
import UserInput from "./assets/components/UserInput";
import { useRef, useState } from "react";

const USER_INPUT = {
  initialInvestment: 0,
  expectedReturn: 0,
  annualInvestment: 0,
  duration: 0,
};

function App() {
  const btnClick = useRef();
  const [btnResult, setBtnResult] = useState(false);
  const [userInput, setUserInput] = useState(USER_INPUT);

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIndentifier, newValue) {
    setBtnResult(false);
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIndentifier]: +newValue,
      };
    });
  }

  function handleResult() {
    btnClick.current = true;
    setBtnResult(btnClick.current);
    console.log(btnResult);
  }

  function handleRefresh() {
    setUserInput(USER_INPUT);
  }

  return (
    <>
      <UserInput
        ref={btnClick}
        userInput={userInput}
        btnRefresh={handleRefresh}
        btnResult={handleResult}
        onChange={handleChange}
      />
      {/* {!inputIsValid && } */}
      {inputIsValid === true && btnResult === true ? (
        <Results input={userInput} />
      ) : userInput.duration <= 0 ? (
        <p className="center">Please enter a duartion greater tham zero.</p>
      ) : (
        <p className="center">Please enter values and press results.</p>
      )}
    </>
  );
}

export default App;
