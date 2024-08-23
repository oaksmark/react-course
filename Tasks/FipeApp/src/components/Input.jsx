import { useContext, useState, useRef, useEffect } from "react";
import UseDataContext from "../store/DataContext";
import { customStyle } from "../selectStyle.js";

// import classNames from 'classnames';
import Select from "react-select";

export default function Input({ id, datas, label, article, onChange }) {
  const dataCtx = useContext(UseDataContext);
  const [selectedOption, setSelectedOption] = useState([]);

  // const clear = useRef();


  // A lógica abaixo associada com a prop value={null} do Select
  // executa a mesma função da lógica value={id < dataCtx.order && selectedOption}}
  // const palceholderMsg = selectedOption && (id < dataCtx.order)
  //   ? selectedOption : dataCtx.isLoading && (id == dataCtx.order)
  //     ? "Pesquisando" : `Selecione ${article} ${label}`;

  const palceholderMsg = dataCtx.isLoading && (id == dataCtx.order)
    ? "Pesquisando" : `Selecione ${article} ${label}`;
  const noOptionsMsg = () => dataCtx.order < 5
    ? dataCtx.warning[2].name : "Aguarde...";

  // console.log(clear.current);
  // console.log(selectedOption);

  // O useEffect abaixo limpa o select
  // useEffect(() => {
  //   if (id < dataCtx.order) {
  //    () => {
  //      clear.current.clearValue();
  //    };
  //    console.log("clear")
  //   }
  // },[dataCtx.order]);

  return (
    <>
      <label>{label}</label>
      <Select
        // ref={clear}
        value={id < dataCtx.order && selectedOption}
        styles={customStyle}
        onChange={(value) => (onChange(value), setSelectedOption(value))}
        options={!dataCtx.isLoading && datas || []}
        isSearchable={false}
        isLoading={id == (dataCtx.order) && dataCtx.isLoading}
        loadingMessage={() => dataCtx.warning[1].name}
        placeholder={palceholderMsg}
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option.code}
        noOptionsMessage={noOptionsMsg}
        isOptionDisabled={(option) => option.disabled}

      // value={null}
      // onChange={(value) => onChange(value)}
      // onChange={(value) => dataCtx.order == id && onChange(value)}
      // screenReaderStatus={() => dataCtx.warning[2].name}
      // isClearable
      // inputValue={selectedOption}
      // defaultValue={dataCtx.warning[2].name}
      />
    </>
  );
}
