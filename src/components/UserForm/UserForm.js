import React, { useState } from 'react';

import Button from '../UI/Button/Button';
import styles from './UserForm.module.css';

const UserForm = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
      // console.log(event.target.value);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    // props.onAddGoal(enteredValue);
    console.log(enteredValue);
  };
    return (
    <form onSubmit={formSubmitHandler} >
    <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
      <label>User Name</label>
      <input type="text" onChange={goalInputChangeHandler} />
      <label>Age (Years)</label>
      <input type="date" onChange={goalInputChangeHandler} />
    <Button type="submit">Add User</Button>
    <div>{enteredValue}</div>
    </div>
  </form>
    );
};

export default UserForm;