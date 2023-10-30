import { ReactElement } from "react";
import {
  BaseContent,
  BaseDiv,
  BaseFooter,
  BaseHeader,
} from "./base-page.styles";

interface PropsBasePage {
  component: ReactElement;
  title: string;
}

export const BasePage = ({ component, title }: PropsBasePage) => {
  return (
    <BaseDiv>
      <BaseHeader>{title}</BaseHeader>
      <BaseContent>{component}</BaseContent>
      <BaseFooter></BaseFooter>
    </BaseDiv>
  );
};
