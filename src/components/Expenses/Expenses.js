import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFiflter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFiflter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
         <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};
export default Expenses;
