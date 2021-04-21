import React from "react";
import axurLogo from "../../assets/axurLogo.svg";
import {
  Header,
  LogoContainer,
  LogoImg,
  HeaderContainer,
} from "./Header.styles";

export function PageHeader() {
  return (
    <Header>
      <HeaderContainer>
        <LogoContainer>
          <LogoImg src={axurLogo} />
        </LogoContainer>
      </HeaderContainer>
    </Header>
  );
}
