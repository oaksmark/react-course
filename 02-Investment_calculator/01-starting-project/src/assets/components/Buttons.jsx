export default function Buttons({ btnResult }) {
  // const setBtnResult = btnResult;
  function clickButton() {
    btnResult = true;
    console.log(btnResult);
  }

  return (
    <p className="input-group">
      <button onClick={() => clickButton(btnResult)}>Results</button>
      <button>Refresh</button>
    </p>
  );
}
