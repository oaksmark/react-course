import { createContext } from "react";
import useHttp from "../hooks/useHttp";
import { useState } from "react";
const urlGemini = "https://api.gemini.com/v2/ticker/btcusd";
const urlBinance = "https://api4.binance.com/api/v3/ticker/24hr";
const urlAwesomeapi = "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL";

const DatasContext = createContext({
    handleRefresh: () => {},
    handleSelect: () => {},
    calcDatas: () => {},
    cssClass: () => {},
    resultDatas: "",
    binance: "",
    awesomeapi: "",
    gemini: "",
    index: "",
});

export function DatasContextProvider({children}) {
  const [index, setIndex] = useState(11);
  const binance = useHttp(urlBinance);
  const awesomeapi = useHttp(urlAwesomeapi);
  const gemini = useHttp(urlGemini);

  const [resultDatas, setResultDatas] = useState();
  const getIndex = (data) => gemini.data.changes.findIndex((change) => change == data);
  const getNextData = (data) => gemini.data.changes[getIndex(data) + 1];
  const getPercentData = (data) => (getNextData(data) - data) / getNextData(data);
  const cssClass = (data) => getNextData(data) - data < 0 ? "negative" : "positive";

  function calcDatas() {
    if (gemini.data) {
      var arr = gemini.data.changes.map((data) => ({
        index: getIndex(data) + 1,
        initVal: data,
        spread: getNextData(data) - data,
        finalVal: getNextData(data),
        percentSpread: getPercentData(data),
      }));
      console.log("Its ok ", arr, gemini.data.changes);
      setResultDatas(arr);
      // setLoading(awesomeapi.isLoading);
    }
  }

  function handleRefresh() {
    binance.sendRequest();
    awesomeapi.sendRequest();
    gemini.sendRequest();
  }

  function handleSelect(event) {
    binance.sendRequest();
    awesomeapi.sendRequest();
    setIndex(event.target.value);
  }

  const datasContext = {
    handleRefresh,
    handleSelect,
    calcDatas,
    cssClass,
    resultDatas,
    binance,
    awesomeapi,
    gemini,
    index
  }
  console.log(datasContext.binance.data);
  return (
    <DatasContext.Provider value={datasContext}>
        {children}
    </DatasContext.Provider>
  )
}
export default DatasContext;
