import { useEffect, useContext, useState } from "react";
import { percentResultFormatter, usdFormatter } from "../util/formatting";
import { v4 as uuidv4 } from "uuid";
import DatasContext from "../store/DatasContext";

export default function Results() {
  const datasCtx = useContext(DatasContext);
  const [loading, setLoading] = useState(datasCtx.gemini.isLoading);

  useEffect(() => {
    datasCtx.calcDatas();
    setLoading(datasCtx.gemini.isLoading);
  }, [datasCtx.gemini.data, datasCtx.gemini.isLoading]);

  // console.log(resultDatas);

  const error = (
    <div>
      <h1 className="center">{datasCtx.gemini.error}</h1>
    </div>
  );

  const isLoading = (
    <div>
      <h1 className="center">Loading...</h1>
    </div>
  );

  return (
    <>
      {datasCtx.gemini.error ? (
        error
      ) : loading ? (
        isLoading
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
            {datasCtx.resultDatas.map((data) => (
              <tr>
                <td key={uuidv4()}>{data.index}</td>
                <td key={uuidv4()}>{usdFormatter.format(data.initVal)}</td>
                <td key={uuidv4()} className={datasCtx.cssClass(data.initVal)}>
                  {usdFormatter.format(data.spread)}
                </td>
                <td key={uuidv4()}>{usdFormatter.format(data.finalVal)}</td>
                <td key={uuidv4()} className={datasCtx.cssClass(data.initVal)}>
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
