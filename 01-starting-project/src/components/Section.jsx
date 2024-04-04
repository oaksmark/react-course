// O parâmetro "...props" (Rest property) enviado pelo component Section se faz necessário 
// devido não herdar automaticamente as propriedades do component, além de 
// agrupar todas em um único parâmetro.
export default function Section({title, children, ...props}){
    return (
    <section {...props}>
        <h2>{title}</h2>
        {children}
    </section>
    );
}