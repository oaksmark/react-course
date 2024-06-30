import { useContext } from "react";
import UseDataContext from "../store/DataContext";

export default function Input({ datas, label, article, onChange }) {
  const dataCtx = useContext(UseDataContext);

  console.log(datas);
  return (
    <p>
      <label>{label}</label>
      <select onChange={onChange} defaultValue="">
        <option hidden value="">
          Selecione {article} {label}
        </option>
        {datas.map((obj) => (
          <option key={obj.codigo} value={obj.codigo} disabled={obj.disabled}>
            {obj.nome
              ? obj.nome
              : dataCtx.order < 2
              ? "--Selecione o tipo--"
              : dataCtx.order < 3
              ? "--Selecione a marca--"
              : "--Selecione o modelo--"}
          </option>
        ))}
      </select>
    </p>
  );
}
