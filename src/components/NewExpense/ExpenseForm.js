import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // Esta é uma forma convencional de uso do Sate
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // Esta é uma maneira de agrupar States, usando para isto um objeto
  // const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // Este tipo de função não é recomendada caso
    // necessite manter o setState atualizado na próxima seção
    // });
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    // });

    // Recomenda-se usar este tipo de sintaxe sempre que uma
    // atualização de estado depender do estado anterior.
    // setUserInput((pervState) => {
    //     return {...prevState, enteredTitle: event.target.value};
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // Este tipo de função não é recomendada caso
    // necessite manter o setState atualizado na próxima seção
    // });
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value,
    // });

    // Recomenda-se usar este tipo de sintaxe sempre que uma
    // atualização de estado depender do estado anterior.
    // setUserInput((pervState) => {
    //     return {...prevState, enteredAmount: event.target.value};
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // Este tipo de função não é recomendada caso
    // necessite manter o setState atualizado na próxima seção
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value,
    // });

    // Recomenda-se usar este tipo de sintaxe sempre que uma
    // atualização de estado depender do estado anterior.
    // setUserInput((pervState) => {
    //     return {...prevState, enteredDate: event.target.value};
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    //Esta sequencia de funões realiza o clear do input após o submit  
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            setp="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
