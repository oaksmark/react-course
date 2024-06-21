export default function Input({ data, label, type, onChange, error }) {
  const icon = (cod) => String.fromCodePoint(cod);
  const seting =
    data.includes("-") && data.includes("%")
      ? { cssClass: "negative", icon: icon(11015) }
      : data.includes("%")
      ? { cssClass: "positive", icon: icon(11014) }
      : false;

  return (
    <p>
      {type !== "select" ? (
        <>
          <label>{label} </label>
          <input
            type={type}
            readOnly
            value={error? "Erro" :(seting ? seting.icon + " " + data : data)}
            className={seting.cssClass}
          />
        </>
      ) : (
        <>
          <label>{data} ($)</label>
          <select onChange={onChange}>
            <option value="11">BITCOIN</option>
            <option value="12">ETHEREUM</option>
            <option value="190">LITECOIN</option>
            <option value="98">BNB</option>
          </select>
        </>
      )}
    </p>
  );
}
