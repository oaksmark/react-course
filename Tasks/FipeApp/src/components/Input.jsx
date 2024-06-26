import { useContext, useState } from "react";
import UseDataContext from "../store/DataContext";

export default function Input({ datas, label, article, error, isLoading, onChange }) {
  const dataCtx = useContext(UseDataContext);

  const icon = (cod) => String.fromCodePoint(cod);

  console.log(datas);

  const hasError = (
    <>
      <label>{label} </label>
      {/* <input value={dataCtx.brands.error} readOnly /> */}
    </>
  );

  return (
    <p>
      <label>{label}</label>
      <select onChange={onChange} defaultValue="">
        <option hidden value="">Selecione {article} {label}</option>
        {datas[0] ? datas.map((obj) => (
          <option key={obj.codigo} value={obj.codigo} disabled={obj.disabled}>
            {obj.nome?obj.nome :dataCtx.order < 2 ? "--Selecione o tipo--" : "Selecione a marca"}
          </option>
        )):datas.modelos.map((obj) => (
          <option key={obj.codigo} value={obj.codigo} disabled={obj.disabled}>
            {obj.nome?obj.nome :dataCtx.order < 2 ? "--Selecione o tipo--" : "Selecione a marca"}
          </option>
        ))}
      </select>
    </p>
  );
}
