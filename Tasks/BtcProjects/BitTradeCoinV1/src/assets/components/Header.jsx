import img from "../bitcoin-Currency.png";

export default function Header({children}) {
    return (

    <header id="header">
    <img id="header img" src={img}/>
    <h1>BitTradeCoin</h1>
    {children}
    </header>
    )
}