import React from "react";
import axurLogo from "../../assets/axurLogo.svg";
import {
  Header,
  LogoContainer,
  LogoImg,
  LanguagueBtn,
  LanguagesBtnWrapper,
  HeaderContainer,
} from "./styles";

export function PageHeader() {
  return (
    <Header>
      <HeaderContainer>
        <LogoContainer>
          <LogoImg src={axurLogo} />
        </LogoContainer>

        <LanguagesBtnWrapper>
          <LanguagueBtn>PT</LanguagueBtn>
          <LanguagueBtn>EN</LanguagueBtn>
          <LanguagueBtn>ES</LanguagueBtn>
        </LanguagesBtnWrapper>
      </HeaderContainer>
    </Header>
  );
}
