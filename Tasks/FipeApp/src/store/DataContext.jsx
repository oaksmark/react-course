import { useState, createContext } from "react";
import useHttp from "../hooks/useHttp";

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
  const [order, setOrder] = useState(1);
  const [url, setUrl] = useState();
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
  // console.log(url);
  // console.log(type);

  async function handleSelectType(event) {
    const type = event.target.value;
    const url = `https://parallelum.com.br/fipe/api/v1/${type}/marcas/`;
    const dataBrand = await urlDatas.sendRequest(url, config);
    console.log(dataBrand.error);
    setError(dataBrand.error);
    dataBrand.error && setModal(true)
    setBrands(dataBrand.resData);
    setType(type);
    setUrl(url);
    setOrder(2);
  }

  async function handleSelectBrand(event) {
    const brand = event.target.value;
    const url = `https://parallelum.com.br/fipe/api/v1/${type}/marcas/${brand}/modelos/`;
    const dataModel = await urlDatas.sendRequest(url, config);
    // console.log(dataModel);
    setError(dataModel.error);
    setModels(dataModel.resData);
    setBrand(brand);
    setUrl(url);
    setOrder(3);
  }

  async function handleSelectModel(event) {
    const model = event.target.value;
    const url = `https://parallelum.com.br/fipe/api/v1/${type}/marcas/${brand}/modelos/${model}/anos/`;
    const dataYear = await urlDatas.sendRequest(url, config);
    // console.log(dataYear);
    setError(dataYear.error);
    setYears(dataYear.resData);
    setModel(model);
    setUrl(url);
    setOrder(4);
  }

  async function handleSelectYear(event) {
    const year = event.target.value;
    const url = `https://parallelum.com.br/fipe/api/v1/${type}/marcas/${brand}/modelos/${model}/anos/${year}`;
    const dataResult = await urlDatas.sendRequest(url, config);
    console.log(dataResult);
    setResult(dataResult.resData);
    setError(dataResult.error);
    setYear(year);
    setUrl(url);
    setOrder(5);
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

  const useDataCtx = {
    handleSelectType,
    handleSelectBrand,
    handleSelectModel,
    handleSelectYear,
    handleBtnClick,
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
