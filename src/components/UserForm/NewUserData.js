import React, { useState } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import classes from "./NewUserData.module.css";
import ErrorModal from "../UI/ErrorModal/ErrorModal";

const NewUserData = (props) => {
  const [enteredNameValue, setEnteredNameValue] = useState("");
  const [enteredAgeValue, setEnteredAgeValue] = useState("");
  const [isValid, setIsValid] = useState(true);
    const [error, setError] = useState();

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
    if (
      enteredNameValue.trim().length === 0 ||
      enteredAgeValue.trim().length === 0
    ) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).'
      });
      return;
    }
    if (isNaN(enteredAgeValue) === true || enteredAgeValue < 0) {

      setError({
        title: 'Invalid input',
        message: 'Please enter a age number date.'
      });
    }
    props.newUser(enteredNameValue, enteredAgeValue);
    // console.log(enteredNameValue, enteredAgeValue);
    setEnteredAgeValue("");
    setEnteredNameValue("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card
        className={`${classes["form-control"]} ${!isValid && classes.invalid}`}
      >
        <form onSubmit={formSubmitHandler}>
          <label>User Name</label>
          <input
            type="text"
            onChange={nameInputChangeHandler}
            value={enteredNameValue}
          />
          <label>Age (Years)</label>
          <input
            type="text"
            onChange={ageInputChangeHandler}
            value={enteredAgeValue}
          />
          <Button type="submit">
            <b> Add User </b>
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default NewUserData;
