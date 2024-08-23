import { useContext } from "react";
import UseDataContext from "../store/DataContext.jsx";
import Header from "./Header.jsx";
import Result from "./Result.jsx";
import Buttons from "./Buttons.jsx";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";
import Error from "./Error.jsx";
import Warning from "./Warning.jsx";
import useHttp from "../hooks/useHttp.js";

export default function Inputs() {
  const dataUrl = useHttp();
  const dataCtx = useContext(UseDataContext);
  const iconCode = (cod) => String.fromCodePoint(cod);

  return (
    <section id="user-input">
      <Header></Header>
      <form className="input-group center">
        <div>
          <Input
            id="1"
            type="select"
            label="tipo"
            article="o"
            onChange={dataCtx.handleSelectType}
            datas={dataCtx.order >= 1 && dataCtx.types}
          />
        </div>
        <div>
          <Input
            id="2"
            type="select"
            label="marca"
            article="a"
            onChange={dataCtx.handleSelectBrand}
            datas={dataCtx.order >= 2 && dataCtx.brands}
          />
        </div>
        <div>
          <Input
            id="3"
            type="select"
            label="modelo"
            article="o"
            onChange={dataCtx.handleSelectModel}
            datas={dataCtx.order >= 3 && dataCtx.models}
          />
        </div>
        <div>
          <Input
            id="4"
            type="select"
            label="ano"
            article="o"
            onChange={dataCtx.handleSelectYear}
            datas={dataCtx.order >= 4 && dataCtx.years}
          />{" "}
        </div>
      </form>
      <div className="center">
        <Buttons
          value={"Pesquisar " + iconCode(128269)}
          onClick={dataCtx.handleBtnClick}
          disabled={dataCtx.isLoading && true}
          shake={!dataCtx.isLoading && dataCtx.order == 5 && true}
        />
      </div>{" "}
      <Modal open={dataCtx.modal}>
        {!dataCtx.error && dataCtx.order == 6 ? (
          <Result />
         ) :
          dataCtx.error ? (
            <Error />
         ) : (
            <Warning />
        )}
      </Modal>
    </section>
  );
}
