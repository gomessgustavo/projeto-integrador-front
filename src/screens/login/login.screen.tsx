import { Header } from "../../components/header/header.component";
import { ColumnDiv, RowDiv } from "../../components/utils";
import { ImageHome, LeftSide, RightSide } from "./login.styles";
import Cachorro from "../../assets/img/cachorro2.png";
import { InputLabel } from "../../components/input-label/input-label.component";
import { Button } from "../../components/button/button.component";
import { useState } from "react";

export interface IValuesForm {
  email: string;
  password: string;
}

export const Login = () => {
  const [values, setValues] = useState<IValuesForm>({
    email: "",
    password: "",
  });

  const authenticate = () => {
    console.log("ok");
  };

  const onChangeValue = (event: any) => {
    console.log(event);
    const { value, name } = event.input;
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
          <form>
            <ColumnDiv>
              <InputLabel
                name="email"
                onChange={onChangeValue}
                value={values.email}
                label="E-mail"
              />
              <InputLabel
                name="password"
                onChange={onChangeValue}
                value={values.password}
                label="Senha"
              />
              <Button name="Entrar" onClick={authenticate} />
            </ColumnDiv>
          </form>
        </RightSide>
      </RowDiv>
    </div>
  );
};
