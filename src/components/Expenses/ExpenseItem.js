import React, {useState} from 'react';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  
  // Esta constante altera o estado atual da variavel "title"
  // para o estado pos chamada da função clickHandler "setTitle"
  // usando para isso um State (useState), definido no import React 
  const [title, setTitle] = useState(props.title);
  
  const clickHandler = () => {
    setTitle('Updated');
    console.log(title);
  }; 
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
