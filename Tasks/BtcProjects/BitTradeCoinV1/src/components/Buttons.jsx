
export default function Buttons({onClick, value}) {

  return (
    <p className="input-group" >
      <button className="button" onClick={onClick} >{value}</button>
    </p>
  );
}