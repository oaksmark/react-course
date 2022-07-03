import React, { useState } from "react";

import Button from "../UI/Button/Button";
import styles from "./NewUserData.module.css";

const NewUserData = (props) => {
  const [enteredNameValue, setEnteredNameValue] = useState("");
  const [enteredAgeValue, setEnteredAgeValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  //   const [addData, setAddData] = useState(false);

  const nameInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
      //setAddData(false);
      console.log(event.target.value);
    }
    setEnteredNameValue(event.target.value);
  };
  const ageInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
      //setAddData(false);
      console.log(event.target.value);
    }
    setEnteredAgeValue(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if ( enteredNameValue.trim().length === 0 || enteredAgeValue.trim().length === 0 ) {
      // setIsValid(false);
      alert("Preencha todos os campos!!");
      return;
    };
    if ( isNaN(enteredAgeValue) === true ) {
      alert("O campo idade deve ser numérico");
      return;
    };
    props.newUser(enteredNameValue, enteredAgeValue);
    // console.log(enteredNameValue, enteredAgeValue);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>User Name</label>
        <input type="text" onChange={nameInputChangeHandler} />
        <label>Age (Years)</label>
        <input type="text" onChange={ageInputChangeHandler} />
        <Button type="submit"><b> Add User </b></Button>
      </div>
    </form>
  );
};

export default NewUserData;
