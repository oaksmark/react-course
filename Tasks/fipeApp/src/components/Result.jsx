import { useContext } from "react";
import bike from "../assets/images/bikeIcon.png";
import car from "../assets/images/carIcon.png";
import truck from "../assets/images/truckIcon.png";
import Buttons from "./Buttons";
import UseDataContext from "../store/DataContext";

export default function Result({datas}) {
    const dataCtx = useContext(UseDataContext);
    return (
        <div className="modal-dialog">
        {dataCtx.type == "carros" && <img src={car} alt="car icon" />}
        {dataCtx.type == "motos" && <img src={bike} alt="bike icon" />}
        {dataCtx.type == "caminhoes" && <img src={truck} alt="truck icon" />}
            <h1>{datas.Marca}</h1>
            <p>{datas.Modelo} ({datas.Combustivel})</p>
            <h2> {datas.AnoModelo}</h2>
            <h1>{datas.Valor}</h1>
            <Buttons value="Nova Pesquisa" onClick={dataCtx.handleBtnClick} />
            </div>
    )
}