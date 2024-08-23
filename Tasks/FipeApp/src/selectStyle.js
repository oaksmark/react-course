export const customStyle = {
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
      backgroundColor: "transparent",
      // borderColor: "#ffffff",
      boxShadow: "none",
      border: state.isFocused ? "2px solid orange" : "2px solid white",
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
  }