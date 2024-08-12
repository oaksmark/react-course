import Inputs from "./components/Inputs.jsx";
import {DatasContextProvider} from "./store/DatasContext.jsx";

function App() {
  return (
    <DatasContextProvider>
      <Inputs />
    </DatasContextProvider>
  );
}

export default App;
