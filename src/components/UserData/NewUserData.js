import React, { useState } from "react";

import Button from "../UI/Button/Button";
import styles from "./NewUserData.module.css";

const NewUserData = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);
//   const [addData, setAddData] = useState(false);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    //setAddData(false);
    //console.log(event.target.value);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.newUser(enteredValue);
    // console.log(enteredValue);
  };
  return (
      <form onSubmit={formSubmitHandler}>
        <div
          className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
        >
          <label>User Name</label>
          <input type="text" onChange={goalInputChangeHandler} />
          <label>Age (Years)</label>
          <input type="date" onChange={goalInputChangeHandler} />
          <Button type="submit">Add User</Button>
        </div>
      </form>
  );
};

export default NewUserData;
