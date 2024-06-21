import { useEffect, useState } from "react";
import { percentResultFormatter, usdFormatter } from "../../util/formatting";
import { v4 as uuidv4 } from "uuid";

export default function Results({ datas, isLoading, error }) {
  const [loading, setLoading] = useState(isLoading);
  const [resultDatas, setResultDatas] = useState();
  const getIndex = (data) =>
    datas.changes.findIndex((change) => change == data);
  const getNextData = (data) => datas.changes[getIndex(data) + 1];
  const getPercentData = (data) =>
    (getNextData(data) - data) / getNextData(data);
  const cssClass = (data) =>
    getNextData(data) - data < 0 ? "negative" : "positive";

  function calcDatas() {
    if (datas) {
      var arr = datas.changes.map((data) => ({
        index: getIndex(data) + 1,
        initVal: data,
        spread: getNextData(data) - data,
        finalVal: getNextData(data),
        percentSpread: getPercentData(data),
      }));
      console.log("Its ok ", arr, datas.changes);
      setResultDatas(arr);
      setLoading(isLoading);
    }
  }

  useEffect(() => {
    calcDatas();
  }, [datas, isLoading]);

  console.log(resultDatas);
  return (
    <>
      {error ?? (
        <div>
          <h1 className="center">{error}</h1>
        </div>
      )}
      {loading ? (
        <div>
          <h1 className="center">{isLoading}</h1>
        </div>
      ) : (
        <table id="result" className="center">
          <thead>
            <tr>
              <th>Ínice</th>
              <th>Valor Inicial</th>
              <th>Spread</th>
              <th>Valor final</th>
              <th>Variação</th>
            </tr>
          </thead>
          <tbody>
            {resultDatas.map((data) => (
              <tr>
                <td key={uuidv4()}>{data.index}</td>
                <td key={uuidv4()}>{usdFormatter.format(data.initVal)}</td>
                <td key={uuidv4()} className={cssClass(data.initVal)}>
                  {usdFormatter.format(data.spread)}
                </td>
                <td key={uuidv4()}>{usdFormatter.format(data.finalVal)}</td>
                <td key={uuidv4()} className={cssClass(data.initVal)}>
                  {percentResultFormatter.format(data.percentSpread)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
