import { useState, createContext } from "react";
import useHttp from "../hooks/useHttp";

const config = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

const api = "https://fipe.parallelum.com.br/api/v2/";

const UseDataContext = createContext({
  handleSelectType: () => { },
  handleSelectBrand: () => { },
  handleSelectModel: () => { },
  handleSelectYear: () => { },
  handleBtnClick: () => { },
  handleDataReset: () => { },
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
  const [order, setOrder] = useState(1);
  const [isLoading, setIsloading] = useState();
  const [urlApi, setUrlApi] = useState(api);
  const [error, setError] = useState("");
  const [modal, setModal] = useState();
  const urlDatas = useHttp(urlApi);

  const [type, setType] = useState();
  const [brand, setBrand] = useState();
  const [brands, setBrands] = useState();
  const [model, setModel] = useState();
  const [models, setModels] = useState();
  const [year, setYear] = useState();
  const [years, setYears] = useState();
  const [result, setResult] = useState();

  const types = [
    { code: "motorcycles", name: "Motos" },
    { code: "cars", name: "Carros" },
    { code: "trucks", name: "Caminhões" },
  ];

  const warning = [
    [{ code: "00", name: `Erro (${error && error.message})` }],
    { code: "01", name: "Aguarde..." },
    { code: "02", name: `Selecione o ${order}º campo` },
  ];


  // console.log("isloading 1 ", isLoading)

  async function sendRequest(url, config) {
    let resData = null;
    let error = null;
    // setIsLoading(true);
    try {
      resData = await urlDatas.sendHttpRequest(url, config);
      // setData(resData);
      console.log(resData);
    } catch (err) {
      error = err;
      // setError(err.message);
      // console.log(error, error.message);
    }
    // setIsLoading(false);
    return { resData, error };
  }


  async function handleSelectType(value) {
    // order > 1 && handleDataReset();
    setIsloading(true);
    setOrder(2);
    const type = value.code;
    // const url = "http://localhost:3000/brands";
    const url = `${api}${type}/brands/`;
    const dataBrand = await sendRequest(url, config);
    dataBrand.error && (setModal(true), setError(dataBrand.error));
    setBrands(dataBrand.resData);
    setType(type);
    setUrlApi(url);
    setTimeout(() => {
      // setOrder(2);
      setIsloading(false);
    }, 2000);
  }
  // console.log("isloading 2 ", isLoading);
  console.log("reset ", type, brand, model, year, result);

  async function handleSelectBrand(value) {
    // order > 2 && handleDataReset();
    setIsloading(true);
    setOrder(3);
    const brand = value.code;
    // const url = "http://localhost:3000/models";
    const url = `${api}${type}/brands/${brand}/models/`;
    const dataModel = await sendRequest(url, config);
    dataModel.error && (setModal(true), setError(dataModel.error));
    setUrlApi(url);
    setModels(dataModel.resData);
    setBrand(brand);
    setTimeout(() => {
      // setOrder(3);
      setIsloading(false);
    }, 2000);
  }

  async function handleSelectModel(value) {
    // order > 3 && handleDataReset();
    setIsloading(true);
    setOrder(4);
    const model = value.code;
    // const url = "http://localhost:3000/years";
    const url = `${api}${type}/brands/${brand}/models/${model}/years/`;
    const dataYear = await sendRequest(url, config);
    dataYear.error && (setModal(true), setError(dataYear.error));
    setYears(dataYear.resData);
    setModel(model);
    setUrlApi(url);
    setTimeout(() => {
      // setOrder(4);
      setIsloading(false);
    }, 2000);
  }

  async function handleSelectYear(value) {
    // order > 4 && handleDataReset();
    setIsloading(true);
    setOrder(5);
    const year = value.code;
    // const url = "http://localhost:3000/result";
    const url = `${api}${type}/brands/${brand}/models/${model}/years/${year}`;
    const dataResult = await sendRequest(url, config);
    dataResult.error && (setModal(true), setError(dataResult.error));
    setResult(dataResult.resData);
    setYear(year);
    setUrlApi(url);
    // setOrder(5);
    setTimeout(() => {
      setIsloading(false);
    }, 2000);
  }

  function handleBtnClick() {
    if (order < 5) {
      setModal(!modal);
    }
    if (order == 5) {
      setModal(true);
      setOrder(6);
    }
    if (order == 6 || error) {
      setModal(false);
      setOrder(1);
      handleDataReset();
      // window.location.reload();
    }
  }

  function handleDataReset() {
    setType();
    setBrand();
    setBrands();
    setModel();
    setModels();
    setYear();
    setYears();
    setResult()
    setUrlApi(api);
  }

  const useDataCtx = {
    handleSelectType,
    handleSelectBrand,
    handleSelectModel,
    handleSelectYear,
    handleBtnClick,
    handleDataReset,
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
