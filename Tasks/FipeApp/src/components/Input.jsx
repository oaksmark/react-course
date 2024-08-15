import { useContext, useState } from "react";
import UseDataContext from "../store/DataContext";
// import classNames from 'classnames';
import Select from "react-select";

export default function Input({ id, datas, label, article, onChange }) {
  const dataCtx = useContext(UseDataContext);
  const palceholderMsg = dataCtx.isLoading && id == (dataCtx.order)? "Pesquisando" : `Selecione ${article} ${label}`;
  console.log(datas);
  return (
    <>
      <label>{label}</label>
      <Select
        styles={{
          input: (styles) => ({
            ...styles,
            // color: "#ffdd00",
          }),
          indicatorSeparator: () => ({ display: "none" }),
          placeholder: (styles) => ({
            ...styles, color: "#ffffff",
            marginRight: "25px",
          }),
          singleValue: (styles, { data }) => ({
            ...styles,
            color: "#ffdd00"
          }),
          control: (baseStyles, state) => ({
            ...baseStyles,
            border: "#ffffff",
            backgroundColor: "transparent",
            // borderColor: "#ffffff",
            boxShadow: "none",
            border: state.isFocused ? "2px solid orange" : "1px solid white",
            '&:hover': {
              border: '2px solid orange',
            },
            width: "220px",
            // textAlign: "left",
            // marginRight: "25px",
          }),
          option: (base) => ({
            ...base,
            height: "100%",
            color: "black",
          }),
        }}
        options={!dataCtx.isLoading && datas || []}
        onChange={(value) => onChange(value)}
        isSearchable={false}
        isLoading={id == (dataCtx.order) && dataCtx.isLoading}
        loadingMessage={() =>dataCtx.warning[1].name}
        placeholder={palceholderMsg}
        getOptionLabel={(option) => option.name}
        getOptionValue={(option) => option.code}
        noOptionsMessage={() => dataCtx.warning[2].name}
        isOptionDisabled={(option) => option.disabled}
        // isClearable
      />
    </>
  );
}
