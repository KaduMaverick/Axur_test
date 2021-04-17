import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: "Inter", Arial, Helvetica, sans-serif;
    font-weight:400;
    background: #e9edf0;
  }

  html{
    @media only screen and (max-width:1080px) {
      font-size: 62.5%;
    }

    @media only screen and (max-width:720px){
      font-size:87.5%;
    }
  }

  h1,h2,h3,h4,h5,h6,strong{
    font-weight: 600;
  }
  
  button{
    cursor: pointer;
  }
`