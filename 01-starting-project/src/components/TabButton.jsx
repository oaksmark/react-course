// O parâmetro "...props" (Rest property) enviado pelo component TabButton se faz necessário 
// devido não herdar automaticamente as propriedades do component, além de 
// agrupar todas em um único parâmetro, quantas forem necessárias.
// Neste caso, está substituindo apenas a propriedades onClick e isSelected.  
export default function TabButton({isSelected, children, ...props}) {
  return (
    <li>
      <button className={isSelected ? 'active': undefined}{...props}>{children}</button>
    </li>
  );
}
