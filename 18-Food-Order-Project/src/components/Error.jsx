import Button from "./UI/Button.jsx";

export default function Error({ title, message, onConfirm}) {
    return (
      <div  className="meal-error">
        <h2>{title}</h2>
        <p>{message}</p>
          <div>
            <Button onClick={onConfirm}>
              Okay
            </Button>
          </div>
      </div>
    );
  }