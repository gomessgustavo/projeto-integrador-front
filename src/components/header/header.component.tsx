import { Link } from "react-router-dom";
import { HeaderBar, HeaderLogo, HeaderNav } from "./header.style";

export const linkEstilo: React.CSSProperties = {
  textDecoration: "none",
  color: "#fff",
  fontWeight: "600",
};

export const Header = () => {
  return (
    <HeaderBar>
      <HeaderLogo>
        <h1>
          pe<span style={{ color: "#EBC330" }}>t</span>utor
        </h1>
      </HeaderLogo>
      <HeaderNav>
        <Link style={linkEstilo} to="adocao">
          Adoção
        </Link>
        <Link style={linkEstilo} to="cadastro">
          Cadastro
        </Link>
        <Link style={linkEstilo} to="sobre">
          Sobre
        </Link>
      </HeaderNav>
    </HeaderBar>
  );
};
