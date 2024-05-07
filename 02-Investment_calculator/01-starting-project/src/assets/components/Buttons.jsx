import { forwardRef } from "react";

const Buttons = forwardRef(function Buttons({ btnResult, btnRefresh },ref) {

  return (
    <p className="input-group" ref={ref}>
      <button onClick={() =>btnResult()}>Results</button>
      <button onClick={() =>btnRefresh()}>Refresh</button>
    </p>
  );
})
export default Buttons;