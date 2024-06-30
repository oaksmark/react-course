import { useState, createContext, useCallback, useEffect } from "react";
import useHttp from "../hooks/useHttp.js";

const config = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": 'Your_token'

  },};
const UseDataContext = createContext({
  handleSelectType: () => {},
  handleSelectBrand: () => {},
  handleSelectModel: () => {},
  handleSelectYear: () => {},
  handleBtnClick: () => {},
  isLoading: "",
  warning: "",
  order: "",
  error: "",
  type: "",
  types: "",
  brands: "",
  models: "",
  years: "",
  result: "",
  modal: "",
});

export function UseDataContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState();
  const [order, setOrder] = useState(1);
  const [url, setUrl] = useState("https://parallelum.com.br/fipe/api/v1/carros/marcas/");
  const [ error , setError] = useState();
  const [modal, setModal] = useState();
  const urlDatas = useHttp(url);

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

  const [type, setType] = useState();
  const [brand, setBrand] = useState();
  const [brands, setBrands] = useState();
  const [model, setModel] = useState();
  const [models, setModels] = useState();
  const [year, setYear] = useState();
  const [years, setYears] = useState();
  const [result, setResult] = useState();
  console.log(url, order);
  console.log(isLoading);


  const sendRequest = useCallback(
    async function sendRequest() {
    // let resData = undefined;
    // let error = undefined;
    console.log("b");
    // setIsLoading(true);
    try {
      const resData = await urlDatas.sendHttpRequest(url, config);
      console.log(resData);
      console.log(order, "c", url);
      // setData(resData);
      if(order == 2) { setBrands(resData)};
      if(order == 3) { setModels(resData)};
      if(order == 4) { setYears(resData)};
      if(order == 5) { setResult(resData)};
    } catch (err) {
      // error = err;
      setError(err.message);
      console.log(err.message);
    }
    setIsLoading(false);
      // return {resData, error};
  }, [url]);



  function handleSelectType(event) {
    const type = event.target.value;
    const url = `https://parallelum.com.br/fipe/api/v1/${type}/marcas/`;
    // sendRequest(url, config);
    console.log("a");
    // setError(dataBrand.error);
    // dataBrand.error && setModal(true);
    // setBrands(dataBrand.resData);
    setType(type);
    setUrl(url);
    setOrder(2);
    setIsLoading(true);
  }

  function handleSelectBrand(event) {
    const brand = event.target.value;
    const url = `https://parallelum.com.br/fipe/api/v1/${type}/marcas/${brand}/modelos/`;
  //  sendRequest(url, config);
    // console.log(dataModel);
    // setError(dataModel.error);
    // setModels(dataModel.resData);
    setBrand(brand);
    setUrl(url);
    setOrder(3);
    setIsLoading(true);

  }

  function handleSelectModel(event) {
    const model = event.target.value;
    const url = `https://parallelum.com.br/fipe/api/v1/${type}/marcas/${brand}/modelos/${model}/anos/`;
    // sendRequest(url, config);
    // console.log(dataYear);
    // setError(dataYear.error);
    // setYears(dataYear.resData);
    setModel(model);
    setUrl(url);
    setOrder(4);
    setIsLoading(true);

  }

  function handleSelectYear(event) {
    const year = event.target.value;
    const url = `https://parallelum.com.br/fipe/api/v1/${type}/marcas/${brand}/modelos/${model}/anos/${year}`;
    // sendRequest(url, config);
    // console.log(dataResult);
    // setResult(dataResult.resData);
    // setError(dataResult.error);
    setYear(year);
    setUrl(url);
    setOrder(5);
    setIsLoading(true);

  }

  function handleBtnClick() {
    if (order < 5) {
      setModal(!modal);
    }
    if (order == 5) {
      setModal(true);
      setOrder(6);
    }
    if ((order == 6) || error) {
      setModal(false);
      window.location.reload();
    }
  }

  useEffect(() => {
    sendRequest();
    console.log("d");

  }, [order]);

  const useDataCtx = {
    handleSelectType,
    handleSelectBrand,
    handleSelectModel,
    handleSelectYear,
    handleBtnClick,
    isLoading,
    warning,
    error,
    order,
    type,
    types,
    brands,
    models,
    years,
    result,
    modal,
  };
  return (
    <UseDataContext.Provider value={useDataCtx}>
      {children}
    </UseDataContext.Provider>
  );
}
export default UseDataContext;
