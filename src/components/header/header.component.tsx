import "./header.style.css";
import { Link } from "react-router-dom";
import { HeaderBar, HeaderLogo, HeaderNav } from "./headerComponents.style";

export const Header = () => {
  return (
    <HeaderBar>
      <HeaderLogo>
        <h1>
          pe<span style={{ color: "#EBC330" }}>t</span>utor
        </h1>
      </HeaderLogo>
      <HeaderNav>
        <Link className="header__link" to="adocao">
          Adoção
        </Link>
        <Link className="header__link" to="cadastro">
          Cadastro
        </Link>
        <Link className="header__link" to="sobre">
          Sobre
        </Link>
      </HeaderNav>
    </HeaderBar>
  );
};
