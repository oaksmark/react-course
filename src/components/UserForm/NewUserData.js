import React, { useState, useRef, useEffect } from "react";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./NewUserData.module.css";
import ErrorModal from "../UI/ErrorModal/ErrorModal";

const NewUserData = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();
 

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredUserName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (isNaN(enteredUserAge) === true || enteredUserAge < 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a number for age.",
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredUserAge);
    // console.log(enteredUserName, enteredUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={`${classes["form-control"]}`}>
        <form onSubmit={formSubmitHandler}>
          <label>User Name</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label>Age (Years)</label>
          <input id="age" type="text" ref={ageInputRef} />
          <Button type="submit">
            <b> Add User </b>
          </Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default NewUserData;
