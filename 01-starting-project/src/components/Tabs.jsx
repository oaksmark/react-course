// Neste caso temos um component padrão que poderia ser usado em outras partes do Projeto
// bastando para isso enviar como propriedade o tipo de tag a ser empregada como parâmetro
// Como exemplo temos o parâmetro "buttonsContainer" recebendo a propriedade "menu",
// o qual pode ser enviado por parâmetro da propriedade, como é o caso abaixo,
// ou inserido diretamente na propriedade de desestruturação.
// Ex: Tabs(buttons, children, buttonsContainer = "menu").

export default function Tabs({ buttons, children, buttonsContainer }) {
  const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
