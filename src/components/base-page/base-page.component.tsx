import { ReactElement } from "react";
import {
  BaseContent,
  BaseDiv,
  BaseFooter,
  BaseHeader,
  FooterTitle,
  LogoPrefeitura,
  LogosImg,
} from "./base-page.styles";
import { ColumnDiv, RowDiv } from "../utils";
import LogoPref from "../../assets/img/logopref.png";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineInfoCircle, AiOutlineSearch } from "react-icons/ai";
import { IconButton } from "../icon-button/icon-button.component";
import { FooterLinks } from "./constants/footer-links.constants";
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";

interface PropsBasePage {
  component: ReactElement;
  title: string;
}

const LOGOS_SRC =
  "https://www.canoas.rs.gov.br/wp-content/themes/bones/assets/dist/images/logos.png";

export const BasePage = ({ component, title }: PropsBasePage) => {
  const navigateTo = (url: string) => {
    window.open(url);
  };

  return (
    <BaseDiv>
      <BaseHeader>{title}</BaseHeader>
      <BaseContent>{component}</BaseContent>
      <BaseFooter>
        <RowDiv
          $height="100%"
          $alignItems="center"
          $justifyContent="space-between"
        >
          <ColumnDiv $alignItems="center">
            <LogoPrefeitura src={LogoPref} />
          </ColumnDiv>
          <ColumnDiv $alignItems="center">
            <FooterTitle>Administração Transparente</FooterTitle>
            <RowDiv
              $height="100%"
              $justifyContent="center"
              $alignItems="center"
            >
              <IconButton
                onClick={() => navigateTo(FooterLinks.SISTEMA_FALA_BR)}
                icon={<BiMessageRounded />}
                color="none"
              />
              <IconButton
                onClick={() =>
                  navigateTo(FooterLinks.PORTAL_TRANSPARENCIA_PEDIDOS)
                }
                icon={<AiOutlineInfoCircle />}
                color="none"
              />
              <IconButton
                onClick={() => navigateTo(FooterLinks.PORTAL_TRANSPARENCIA)}
                icon={<AiOutlineSearch />}
                color="none"
              />
            </RowDiv>
          </ColumnDiv>
          <ColumnDiv $alignItems="center">
            <FooterTitle>Conecte-se com a prefeitura</FooterTitle>
            <RowDiv
              $height="100%"
              $justifyContent="center"
              $alignItems="center"
            >
              <IconButton
                onClick={() => navigateTo(FooterLinks.FACEBOOK)}
                icon={<CiFacebook />}
                color="none"
              />
              <IconButton
                onClick={() => navigateTo(FooterLinks.TWITTER)}
                icon={<CiTwitter />}
                color="none"
              />
              <IconButton
                onClick={() => navigateTo(FooterLinks.YOUTUBE)}
                icon={<CiYoutube />}
                color="none"
              />
              <IconButton
                onClick={() => navigateTo(FooterLinks.INSTAGRAM)}
                icon={<CiInstagram />}
                color="none"
              />
            </RowDiv>
          </ColumnDiv>
          <ColumnDiv $alignItems="center">
            <FooterTitle>Central de Atendimento ao Cidadão</FooterTitle>
            <h2>0800-5101234</h2>
          </ColumnDiv>
          <ColumnDiv $alignItems="center">
            <LogosImg src={LOGOS_SRC} alt="Logos" />
            <p>Politicas de Privacidade</p>
          </ColumnDiv>
        </RowDiv>
      </BaseFooter>
    </BaseDiv>
  );
};
