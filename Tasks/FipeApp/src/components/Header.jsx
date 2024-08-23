import { useContext } from "react";
import logo from "../assets/images/logoFipeApp.png";
import lupa from "../assets/images/lupa-200px.svg";
import UseDataContext from "../store/DataContext";

export default function Header({ children }) {
    const dataCtx = useContext(UseDataContext);

    return (
        <header id="header">
            <h1>FipeApp</h1>
            <img id="header-img" src={logo} alt="logo FipeApp" />
            {dataCtx.order == 5 && dataCtx.isLoading &&
                <img id="overlay-img" src={lupa} alt="lupa de busca" />}
            {children}
        </header>
    )
}