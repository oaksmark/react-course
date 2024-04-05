import { useState } from "react";

export default function Player({ ...props }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(true);
    console.log(isEditing);
  }

  let playerName = <span className="player-name">{props.name}</span> 

  if(isEditing){
     playerName =  <input type="text" className="player input" required></input>
  }
  return (
    <li>
      <span className="player">
         {playerName}
        <span className="player-symbol">{props.symbol}</span>
        <button onClick={handleEditClick}>Save</button>
      </span>
    </li>
  );
}
