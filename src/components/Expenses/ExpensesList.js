import React from "react";
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenese.</h2>
  }

  return <ul className="expenses-list">
    {
      /** A função map() abaixo lista um array
       *   com os cards de itens do App.js
       *   listando cada um de forma dinâmica
       *   retornando, caso haja, os itens
       *   correspondentes ao ano selecionado
       *   no select
       */
    }
    {props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
  </ul>
};

export default ExpensesList;