//useState é um hook que adiciona um state do React
//responsável por retornar o state atual
//e uma função que atualiza o state [count, setCount]
import React from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // Esta constante altera o estado atual da variavel "title"
  // para o estado pos chamada da função clickHandler "setTitle"
  // usando para isso um State (useState), definido no import React
  // const [title, setTitle] = useState(props.title);
  // const clickHandler = () => {
  //   setTitle('Updated');
  //   console.log(title);
  // };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/** Um event (onclick) dispara a chamada da função clickHandler
         *   a qual altera o valor da variavel title no h2 pelo valor definido
         *   no parâmetro da função setTitle
         */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
