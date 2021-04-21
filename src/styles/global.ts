import { createGlobalStyle } from "styled-components"
import { BACKGROUND_GRAY } from "../constants/color"
import { mq } from "../constants/theme"

export const GlobalStyle = createGlobalStyle`

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: "Inter", Arial, Helvetica, sans-serif;
    font-weight:400;
    background: ${BACKGROUND_GRAY};
  }

  html{
      font-size: 62.5%;
      
    @media screen and (max-width: ${mq.phone.wide.maxWidth}){
      font-size:58%;
    }

    @media screen and (max-width: ${mq.phone.narrow.maxWidth}){
        font-size: 51%;
    }
  }

  h1,h2,h3,h4,h5,h6,strong{
    font-weight: 600;
  }
  
  button{
    cursor: pointer;
  }
`