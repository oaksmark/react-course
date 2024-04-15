import { useState, useRef } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const playerName = useRef();
  // O useState abaixo pode ser substituido pelo hook useRef acima
  // const [submitted, setSubmitted] = useState(false);


  // function handleChange(event){
  //   setEnteredPlayerName(event.target.value);
  // }
  // A função abaixo substitui a de cima com atributo ref
  // sem a necessidade do uso de value na tag input
  // e sem a necessidade do onChange(handleChange)
  function handleClick(){
    setEnteredPlayerName(playerName.current.value);
    // playerName.current.value = '';
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"} </h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
