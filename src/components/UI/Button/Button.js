import styles from './Button.module.css';
// este import pertence ao tipo CSS Modules
// criando automaticamente uma className única
// OBS: Recurso disponível com Create React App
// Atenção!! Necessário renomear o arquivo .css
// acrescentando .module como no import acima


// import styled from "styled-components";
// Exemplo de styled-component
// A const Button retorna o estilo
// criado abaixo como component

// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

// Para uso com styled-componente não é necessário a função abaixo
// Porém é necessário renomear a className para "button"
const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
