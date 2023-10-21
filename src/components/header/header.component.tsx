import "./header.style.css";
import { Link } from "react-router-dom";
import { HeaderBar, HeaderLogo, HeaderNav } from "./headerComponents.style";

interface PropHeader {
  nome?: string;
}

const Logo = () => {
  return (
    <span>
      pe<span style={{ color: "#EBC330" }}>t</span>utor
    </span>
  );
};

export const Header = (prop: PropHeader) => {
  return (
    <HeaderBar>
      <HeaderLogo>
        <h1>{prop?.nome ? <span>{prop.nome}</span> : <Logo />}</h1>
      </HeaderLogo>
      <HeaderNav>
        <Link className="header__link" to="/adocao">
          Adoção
        </Link>
        <Link className="header__link" to="/cadastro">
          Cadastro
        </Link>
        <Link className="header__link" to="/sobre">
          Sobre
        </Link>
      </HeaderNav>
    </HeaderBar>
  );
};
