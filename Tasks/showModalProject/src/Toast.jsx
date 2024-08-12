import { createPortal } from "react-dom";

export default function Toast({ message }) {
  return createPortal (
    <aside className="toast" data-testid="toast">
      <p>{message}</p>
    </aside>,
  document.querySelector('body')
  );
}
// O hook create portal transporta o componente
// para um elemento especificado 