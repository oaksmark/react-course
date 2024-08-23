export default function Buttons({ onClick, value, disabled, hidden, shake }) {
const btClass = shake && "horizontal-shake";

  return (
    <p className="input-group">
      <button
        className={`button ${btClass}`}
        onClick={onClick}
        hidden={hidden}
        disabled={disabled}
      >
        {value}
      </button>
    </p>
  );
}
