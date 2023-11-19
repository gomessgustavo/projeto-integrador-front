import "./header.style.css";
import { HeaderBar, HeaderLogo } from "./headerComponents.style";

interface PropHeader {
  name?: string;
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
      <h1>{prop?.name ? <span>{prop.name}</span> : <Logo />}</h1>
    </HeaderBar>
  );
};
