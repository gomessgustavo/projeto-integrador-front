import { AiOutlineLogout } from "react-icons/ai";
import { DEFAULT_YELLOW, RED_ERROR } from "../../utils/css.constants";
import { IconButton } from "../icon-button/icon-button.component";
import "./header.style.css";
import { HeaderBar } from "./headerComponents.style";
import { useNavigate } from "react-router-dom";

interface PropHeader {
  name?: string;
}

const Logo = () => {
  return (
    <span>
      pe<span style={{ color: DEFAULT_YELLOW }}>t</span>utor
    </span>
  );
};

export const Header = (prop: PropHeader) => {
  const navigate = useNavigate();

  const logout = () => {
    //TO-DO: fazer logout certo
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <HeaderBar>
      <div></div>
      <h1>{prop?.name ? <span>{prop.name}</span> : <Logo />}</h1>
      <IconButton
        color={RED_ERROR}
        onClick={logout}
        icon={<AiOutlineLogout />}
      />
    </HeaderBar>
  );
};
