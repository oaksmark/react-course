import { currencyFormatter, percentFormatter } from "../util/formatting";
import { useContext } from "react";
import DatasContext from "../store/DatasContext";
import Header from "./Header";
import Results from "./Results";
import Buttons from "./Buttons";
import Input from "./Input";

const icon = (cod) => String.fromCodePoint(cod);

export default function Inputs() {
  const datasCtx = useContext(DatasContext);

  return (
    <section id="user-input">
      <Header>
        <Buttons
          onClick={() => {
            datasCtx.handleRefresh();
          }}
          value={"Refresh " + icon(10227)}
        />
      </Header>
      <div className="input-group">
        <div>
          <Input
            onChange={datasCtx.handleSelect}
            type="select"
            label="btc-dollar ($)"
            data={
              datasCtx.binance.error
                ? "Error"
                : datasCtx.binance.isLoading
                ? "Loading..."
                : datasCtx.binance.data[datasCtx.index].symbol
            }
          />
          <Input
            type="text"
            label="variação (%)"
            data={
              datasCtx.binance.error
                ? "Error"
                : datasCtx.binance.isLoading
                ? "Loading..."
                : percentFormatter.format(
                    datasCtx.binance.data[datasCtx.index].priceChangePercent / 100
                  )
            }
          />
        </div>
        <div>
          <Input
            type="text"
            label="Cotação-dollar (R$)"
            data={
              datasCtx.awesomeapi.error
                ? "Error"
                : datasCtx.awesomeapi.isLoading
                ? "Loading..."
                : "R" +
                  currencyFormatter.format(datasCtx.awesomeapi.data.USDBRL.bid)
            }
          />
          <Input
            type="text"
            label="Cotação-euro (R$)"
            data={
              datasCtx.awesomeapi.error
                ? "Error"
                : datasCtx.awesomeapi.isLoading
                ? "Loading..."
                : "R" +
                  currencyFormatter.format(datasCtx.awesomeapi.data.EURBRL.bid)
            }
          />
        </div>
        <div>
          <Input
            type="text"
            label="Venda-ask (Dollar)"
            data={
              datasCtx.binance.error
                ? "Error"
                : datasCtx.binance.isLoading
                ? "Loading..."
                : currencyFormatter.format(
                    datasCtx.binance.data[datasCtx.index].askPrice
                  )
            }
          />
          <Input
            type="text"
            label="Compra-bid (Dollar)"
            data={
              datasCtx.binance.error
                ? "Error"
                : datasCtx.binance.isLoading
                ? "Loading..."
                : currencyFormatter.format(
                    datasCtx.binance.data[datasCtx.index].bidPrice
                  )
            }
          />
        </div>
        <div>
          <Input
            type="text"
            label="Máximo (high)"
            data={
              datasCtx.binance.error
                ? "Error"
                : datasCtx.binance.isLoading
                ? "Loading..."
                : currencyFormatter.format(
                    datasCtx.binance.data[datasCtx.index].highPrice
                  )
            }
          />
          <Input
            type="text"
            label="Mínimo (low)"
            data={
              datasCtx.binance.error
                ? "Error"
                : datasCtx.binance.isLoading
                ? "Loading..."
                : currencyFormatter.format(
                    datasCtx.binance.data[datasCtx.index].lowPrice
                  )
            }
          />
        </div>
        <div>
          <Input
            type="text"
            label="Venda (Real)"
            data={
              datasCtx.binance.error
                ? "Error"
                : datasCtx.binance.isLoading
                ? "Loading..."
                : "R" +
                  currencyFormatter.format(
                    datasCtx.binance.data[datasCtx.index].askPrice *
                      datasCtx.awesomeapi.data.USDBRL.bid
                  )
            }
          />
          <Input
            type="text"
            label="compra (Real)"
            data={
              datasCtx.binance.error
                ? "Error"
                : datasCtx.binance.isLoading
                ? "Loading..."
                : "R" +
                  currencyFormatter.format(
                    datasCtx.binance.data[datasCtx.index].lowPrice *
                      datasCtx.awesomeapi.data.USDBRL.bid
                  )
            }
          />
        </div>
      </div>
      <Results/>
    </section>
  );
}
