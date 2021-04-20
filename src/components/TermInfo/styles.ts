import styled from "styled-components"

export const TermInfoCard = styled.div`
  position: relative;
  background: white;
  border-radius: 50px;
  padding: 30px 30px;
  margin-bottom: 20px;
`
export const TermInfoMessage = styled.span`
  display: inline-block;
  margin-top: 5px;
`

export const TermInfoCardHeading = styled.h4`
  font-size: 18px;
`

export const TermInfoStatus = styled.span`
  position: absolute;
  top: 20px;
  right: 30px; 
`

export const TermInfoLink = styled.a`
  display: inline-block;
  color: #000;
  text-decoration: none;
  margin-bottom: 5px;
  &:hover{
    text-decoration: underline;
  }
  
`