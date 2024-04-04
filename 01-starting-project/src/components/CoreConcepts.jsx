
import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "./data.js";

export default function CoreConsepts(){
    return(
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* * 
            ABAIXO MODO CONVENCIONAL
             <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />

            ABAIXO O MODO ENCURTADO (...)
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> 
            
            ABAIXO O MODO DINÂMICO
            key prop é uma recurso semelhante a um indexador
             o qual facilita a renderização e evita erros. Vide console */}

            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
              
            ))
            }
          </ul>
        </section>
    );
}