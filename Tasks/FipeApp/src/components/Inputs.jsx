import { useContext } from "react";
import Header from "./Header.jsx";
import Results from "./Result.jsx";
import Buttons from "./Buttons.jsx";
import Input from "./Input.jsx";
import UseDataContext from "../store/DataContext.jsx";

const icon = (cod) => String.fromCodePoint(cod);

export default function Inputs() {
  const dataCtx = useContext(UseDataContext);

  // console.log(types);

  return (
    <section id="user-input">
      <Header></Header>
      <div className="input-group center">
        <div>
          <Input
            type="select"
            label="tipo"
            article="o"
            onChange={dataCtx.handleSelectType}
            datas={dataCtx.types}
          />
        </div>
        <div>
          <Input
            type="select"
            label="marca"
            article="a"
            onChange={dataCtx.handleSelectModel}
            datas={
              dataCtx.order < 2
                ? dataCtx.warning[2]
                : dataCtx.urlDatas.isLoading
                ? dataCtx.warning[1]
                : dataCtx.urlDatas.data
            }
          />
        </div>
        <div>
          <Input
            type="select"
            label="modelo"
            article="o"
            datas={
              dataCtx.order < 3
                ? dataCtx.warning[2]
                : dataCtx.urlDatas.isLoading
                ? dataCtx.warning[1]
                : dataCtx.urlDatas.data
            }
          />
        </div>
        <div>
          {/* <Input type="select" label="ano" readyOnly data={( dataCtx.urlDatas.isLoading? warning[1]dataCtx.urlDatas.data)} disabled/> */}
        </div>
      </div>
      <div className="center">
        <Buttons value="Buscar" />
        <Results />
      </div>
    </section>
  );
}
