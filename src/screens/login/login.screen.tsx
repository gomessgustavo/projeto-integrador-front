import { Header } from "../../components/header/header.component";
import { ColumnDiv, RowDiv } from "../../components/utils";
import { ImageHome, LeftSide, RightSide } from "./login.styles";
import Cachorro from "../../assets/img/cachorro2.png";
import { InputLabel } from "../../components/input-label/input-label.component";
import { Button } from "../../components/button/button.component";
import { useState } from "react";
import { DEFAULT_GREEN } from "../../utils/css.constants";
import LogoPrefa from "../../assets/img/logopref.png";
import { LogoPrefeitura } from "../../components/base-page/base-page.styles";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export interface IValuesForm {
  email: string;
  password: string;
}

const INVALID_EMAIL_MESSAGE = "O e-mail digitado não é válido";

export const Login = () => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const navigate = useNavigate();
  const [values, setValues] = useState<IValuesForm>({
    email: "",
    password: "",
  });

  const authenticate = (event: any) => {
    event.preventDefault();
    try {
      validateFields();
      localStorage.setItem("token", "token");
      navigate("/");
    } catch (e: any) {
      console.log(e);
      toast.error(e.message);
    }
  };

  const validateFields = () => {
    if (!emailRegex.test(values.email)) {
      throw new Error(INVALID_EMAIL_MESSAGE);
    }
  };

  const onChangeValue = (event: any) => {
    const { value, name } = event.target;
    setValues((oldVal) => ({
      ...oldVal,
      [name]: value,
    }));
  };

  return (
    <div>
      <RowDiv $justifyContent="auto">
        <LeftSide>
          <ImageHome src={Cachorro} />
        </LeftSide>
        <RightSide>
          <h1>Painel do ADMIN</h1>
          <form onSubmit={authenticate}>
            <ColumnDiv $alignItems="center" $justifyContent="center">
              <InputLabel
                name="email"
                onChange={onChangeValue}
                value={values.email}
                label="E-mail"
                width="70%"
                margin="10px 0"
                maxLength={250}
                required
              />
              <InputLabel
                name="password"
                onChange={onChangeValue}
                value={values.password}
                label="Senha"
                width="70%"
                margin="10px 0"
                type="password"
                maxLength={100}
                required
              />
              <Button
                name="Entrar"
                color={DEFAULT_GREEN}
                margin="10px 0"
                type="submit"
              />
            </ColumnDiv>
          </form>
          <LogoPrefeitura src={LogoPrefa} />
        </RightSide>
      </RowDiv>
    </div>
  );
};
