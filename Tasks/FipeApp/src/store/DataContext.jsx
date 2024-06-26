import { useState, createContext, useEffect } from "react";
import useHttp from "../hooks/useHttp";

const UseDataContext = createContext({
  handleSelectType: () => {},
  handleSelectModel: () => {},
  urlDatas: "",
  warning: "",
  types: "",
  order: "",
});

export function UseDataContextProvider({ children }) {
  const types = [
    { codigo: "carros", nome: "Carros" },
    { codigo: "motos", nome: "Motos" },
    { codigo: "caminhoes", nome: "Caminhões" },
  ];

  const warning = [
    [{ codigo: "00", nome: "Erro" }],
    [{ codigo: "01", nome: "Carregando" }],
    [{ codigo: "02", nome: false, disabled: true }],
  ];

  const [type, setType] = useState("carros");
  // const [brand, setBrand] = useState();
  const [model, setModel] = useState();
  // const [year, setYear] = useState();
  const [order, setOrder] = useState(1);
  const urlTest = "https://parallelum.com.br/fipe/api/v1/carros/marcas";
  const [url, setUrl] = useState(urlTest);
  const urlDatas = useHttp(url);
  // https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos/2014-3
  console.log(url);
  // console.log(type);

  function handleSelectType(event) {
    const type = event.target.value;
    const url = `https://parallelum.com.br/fipe/api/v1/${type}/marcas/`;
    setType(type);
    setUrl(url);
    setOrder(2);
  }

  function handleSelectModel(event) {
    const model = event.target.value;
    const url = `https://parallelum.com.br/fipe/api/v1/${type}/marcas/${model}/modelos/`;
    setModel(model);
    setUrl(url);
    setOrder(3);
  }

  useEffect(() => {
    urlDatas.sendRequest();
  }, [url]);

  // console.log(url);

  const useDataCtx = {
    handleSelectType,
    handleSelectModel,
    urlDatas,
    warning,
    types,
    order,
  };
  return (
    <UseDataContext.Provider value={useDataCtx}>
      {children}
    </UseDataContext.Provider>
  );
}
export default UseDataContext;
