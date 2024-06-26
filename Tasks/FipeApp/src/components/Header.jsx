// import img from "../../public/bitcoin-Currency.png";

export default function Header({children}) {
    return (

    <header id="header">
    {/* <img id="header img" src={img}/> */}
    <h1>FipeApp</h1>
    {children}
    </header>
    )
}