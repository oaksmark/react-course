import useHttp from "../../hooks/useHttp";
import { useState } from "react";
import Buttons from "./Buttons";
import Input from "./Input";
import { currencyFormatter, percentFormatter } from "../../util/formatting";
import Header from "./Header";
import Results from "./Results";
const urlGemini = "https://api.gemini.com/v2/ticker/btcusd";
const urlBinance = "https://api4.binance.com/api/v3/ticker/24hr";
const urlAwesomeapi = "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL";

export default function Inputs() {
  const [index, setIndex] = useState(11);
  const binance = useHttp(urlBinance);
  const awesomeapi = useHttp(urlAwesomeapi);
  const gemini = useHttp(urlGemini);
  const icon = (cod) => String.fromCodePoint(cod);

  function handleSelect(event) {
    binance.sendRequest();
    awesomeapi.sendRequest();
    setIndex(event.target.value);
  }
  return (
    <section id="user-input">
      <Header>
        <Buttons onClick={() => {binance.sendRequest(); awesomeapi.sendRequest(); gemini.sendRequest()}}
          value={"Refresh " + icon(10227)} />
      </Header>      
      <div className="input-group">
        <div>
          <Input
            onChange={handleSelect}
            type="select"
            label="btc-dollar ($)"
            data={binance.isLoading ? "Loading..." : binance.data[index].symbol}
          />
          <Input
            type="text"
            label="variação (%)"
            data={
              binance.isLoading
                ? "Loading..."
                : percentFormatter.format(
                    binance.data[index].priceChangePercent / 100
                  )
            }
          />
        </div>
        <div>
          <Input
            type="text"
            label="Cotação-dollar (R$)"
            data={
              awesomeapi.isLoading
                ? "Loading..."
                : "R" + currencyFormatter.format(awesomeapi.data.USDBRL.bid)
            }
          />
          <Input
            type="text"
            label="Cotação-euro (R$)"
            data={
              awesomeapi.isLoading
                ? "Loading..."
                : "R" + currencyFormatter.format(awesomeapi.data.EURBRL.bid)
            }
          />
        </div>
        <div>
          <Input
            type="text"
            label="Venda-ask (Dollar)"
            data={
              binance.isLoading
                ? "Loading..."
                : currencyFormatter.format(binance.data[index].askPrice)
            }
          />
          <Input
            type="text"
            label="Compra-bid (Dollar)"
            data={
              binance.isLoading
                ? "Loading..."
                : currencyFormatter.format(binance.data[index].bidPrice)
            }
          />
        </div>
        <div>
          <Input
            type="text"
            label="Máximo (high)"
            data={
              binance.isLoading
                ? "Loading..."
                : currencyFormatter.format(binance.data[index].highPrice)
            }
          />
          <Input
            type="text"
            label="Mínimo (low)"
            data={
              binance.isLoading
                ? "Loading..."
                : currencyFormatter.format(binance.data[index].lowPrice)
            }
          />
        </div>
        <div>
          <Input
            type="text"
            label="Venda (Real)"
            data={
              binance.isLoading
                ? "Loading..."
                : "R" + currencyFormatter.format(binance.data[index].askPrice * awesomeapi.data.USDBRL.bid)
            }
          />
          <Input
            type="text"
            label="compra (Real)"
            data={
              binance.isLoading
                ? "Loading..."
                : "R" + currencyFormatter.format(binance.data[index].lowPrice * awesomeapi.data.USDBRL.bid)
            }
          />
        </div>
      </div>
      <Results datas={gemini.data}
                isLoading={gemini.isLoading}/>
    </section>
  );
}
