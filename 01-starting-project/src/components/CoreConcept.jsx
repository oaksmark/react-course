//A desestruturação do objeto dentro da function como parâmetro substitui o "props"
//Neste caso é mais conveniente por se tratar de um objeto (ou arrey)
//Ex: (props) => ({title, description, image})
// Anotations/childrenVSprops.png
export default function CoreConcept({title, description, image}) {
    return (
      <li>
        <img src={image} alt="..." />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }