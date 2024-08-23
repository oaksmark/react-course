import { useContext } from "react";
import Buttons from "./Buttons";
import UseDataContext from "../store/DataContext";

export default function Result() {
    const dataCtx = useContext(UseDataContext);
    return (
        <div className="modal-dialog">
            {<img src={`../../src/assets/images/${dataCtx.type}.png`}
                alt={`${dataCtx.result.type} icon`} />}
            <h1>{dataCtx.result.brand}</h1>
            <p>{dataCtx.result.model} ({dataCtx.result.fuel})</p>
            <h2> {dataCtx.result.modelYear}</h2>
            <h1>{dataCtx.result.price}</h1>
            <Buttons value="Nova Pesquisa" onClick={dataCtx.handleBtnClick} />
        </div>
    )
}