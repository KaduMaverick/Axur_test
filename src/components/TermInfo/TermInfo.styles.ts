import styled from "styled-components"
import { DARKER_GRAY, SELAGO } from "../../constants/color"

export const TermInfoCard = styled.div`
  position: relative;
  background: ${SELAGO};
  border-radius: 50px;
  padding: 3rem;
  margin-bottom: 2rem;
`
export const TermInfoMessage = styled.span`
  display: inline-block;
  margin-top: 0.5rem;
`

export const TermInfoCardHeading = styled.h4`
  font-size: 1.8rem;
`

export const TermInfoStatus = styled.span`
  position: absolute;
  top: 2rem;
  right: 3rem; 
`

export const TermInfoLink = styled.a`
  display: inline-block;
  color: ${DARKER_GRAY};
  text-decoration: none;
  margin-bottom: 0.5rem;
  &:hover{
    text-decoration: underline;
  }
  
`