import Examples from "./components/Examples.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    // Apesar de parecer reduntante elemento inicial (Ex: <div>) 
    // deve ser único e obrigatório 
    // Como padrão o <div> é o mais comum, porém recomenda-se usar:
    // <Fragment> (import {Fragment} from "react") ou ainda melhor <> 
    <>
      <Header />
      <main>
       <CoreConcepts/>
        <Examples/>
      </main>
    </>
  );
}

export default App;
