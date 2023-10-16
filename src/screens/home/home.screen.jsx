import { Header } from "../../components/header/header.component";
import { RowDiv } from "../../components/utils";
import { LeftSide, RightSide } from "./home.styles";

export const Home = (props) => {
  return (
    <div>
      <Header />
      <RowDiv>
        <LeftSide></LeftSide>
        <RightSide></RightSide>
      </RowDiv>
    </div>
  );
};
