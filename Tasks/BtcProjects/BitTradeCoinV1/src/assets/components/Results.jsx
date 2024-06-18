import { useEffect, useState } from "react";
import { percentResultFormatter, usdFormatter } from "../../util/formatting";
import { v4 as uuidv4 } from 'uuid';

export default function Results({ data, isLoading }) {
  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState(data);
  const getIndex = (data) => datas.changes.findIndex((change) => change == data);
  const getNextData = (data) => datas.changes[getIndex(data) + 1];
  const getPercentData = (data) => (getNextData(data) - data) / getNextData(data);
  const cssClass = (data) => (getNextData(data) - data) < 0 ? "negative" : "positive";

  useEffect(() => {
    setDatas(data);
    setLoading(isLoading);
  }, [data, isLoading]);
  // console.log(datas.changes);

  return (
    <table id="result">
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
        {loading
          ? datas
          : datas.changes.map((data) => (
              <tr>
                <td key={uuidv4()}>{getIndex(data) + 1}</td> 
                <td key={uuidv4()}>{usdFormatter.format(data)}</td>
                <td key={uuidv4()} className={cssClass(data)} >{usdFormatter.format(getNextData(data) - data)}</td>
                <td key={uuidv4()}>{usdFormatter.format(getNextData(data))}</td>
                <td key={uuidv4()} className={cssClass(data)}>{percentResultFormatter.format(getPercentData(data))}</td>
              </tr>
            ))}
      </tbody>
    </table>
  );
}