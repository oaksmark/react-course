import React from "react";
import ReactDOM from "react-dom";

import Button from "../Button/Button";
import Card from "../Card/Card";
import classes from "./ErrorModal.module.css";

// As função abaixo createPortal()
// utilizam Portals da biblioteca react-dom
// isto possibilita que o conteúdo do modal seja renderizado,
// necessitando apenas criar uma tag referente no local desejado,
// (Ex: junto ao elemento id="root" no body do arquivo index.html)
// evitando que fique aninhado em componentes muito abaixo

// OBS: pode-se usar das duas formas abaixo.
// A primeira caso utilize um compontente

// const BackDrop = (props) => {
//   return (
//     <div className={classes.backdrop} onClick={props.onConfirm}>
//       {" "}
//     </div>
//   );
// };

// const ModalOverlay = (props) => {
//   return (
//     <Card className={classes.modal}>
//       <header className={classes.header}>
//         <h2>{props.title}</h2>
//       </header>
//       <div className={classes.content}>
//         <p>{props.message}</p>
//       </div>
//       <footer className={classes.actions}>
//         <Button onClick={props.onConfirm}>OK</Button>
//       </footer>
//     </Card>
//   );
// };

// const ErrorModal = (props) => {
//   return (
//     <React.Fragment>
//       {ReactDOM.createPortal(
//         <BackDrop onConfirm={props.onConfirm} />,
//         document.getElementById("backdrop-root")
//       )}
//       {ReactDOM.createPortal(
//         <ModalOverlay
//           onConfirm={props.onConfirm}
//           title={props.title}
//           message={props.message}
//         />,
//         document.getElementById("overlay-root")
//       )}
//     </React.Fragment>
//   );
// };

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className={classes.backdrop} onClick={props.onConfirm}>
          {" "}
        </div>,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={classes.content}>
            <p>{props.message}</p>
          </div>
          <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>OK</Button>
          </footer>
        </Card>,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};
export default ErrorModal;
