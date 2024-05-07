import Buttons from "./Buttons";

import { forwardRef } from "react";

const UserInput = forwardRef( function UserInput({ onChange, userInput, btnResult, btnRefresh }, ref) {
  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <p>
            <label>INITIAL INVESTMENT</label>
            <input
              name="initialInvestment"
              onChange={(event) =>
                onChange("initialInvestment", event.target.value)
              }
              type="number"
              required
              value={userInput.initialInvestment}
            />
          </p>
          <p>
            <label>EXPECTED RETURN</label>
            <input
              name="expectedReturn"
              onChange={(event) =>
                onChange("expectedReturn", event.target.value)
              }
              type="number"
              required
              value={userInput.expectedReturn}
            />
          </p>
        </div>
        <div>
          <p>
            <label>ANNUAL INVESTMENT</label>
            <input
              name="annualInvestment"
              onChange={(event) =>
                onChange("annualInvestment", event.target.value)
              }
              type="number"
              required
              value={userInput.annualInvestment}
            />
          </p>
          <p>
            <label>DURATION</label>
            <input
              name="duration"
              onChange={(event) => onChange("duration", event.target.value)}
              type="number"
              required
              value={userInput.duration}
            />
          </p>
        </div>
      </div>
      <Buttons ref={ref} btnResult={btnResult} btnRefresh={btnRefresh}/>
    </section>
  );
})
export default UserInput;


