
//Este o componente inicial da aplicação

import React from 'react';
//Este import pode ser omitido caso esteja sendo usado JSX
//JSX trata-se de uma extensão de sintaxe non-standard (Ex: abaixo).
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components//Expenses/Expenses';
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHendler = expense => {
    console.log('I App.js');
    console.log(expense);
  }
  return (
    // Este é um exemplo de JSX
    <div>
      <NewExpense onAddExpense={addExpenseHendler} />
      <Expenses items={expenses}/>
    </div>
  );
  // Este é um exemplo de Objeto React
  //   return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2',{}, "let's get started!"),
  //   React.createElement(Expenses, {items: expenses})
  //   );
   
}

export default App;
