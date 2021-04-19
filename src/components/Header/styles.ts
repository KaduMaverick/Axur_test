import styled from 'styled-components'

export const Header = styled.header`
padding: 20px;
`

export const HeaderContainer = styled.div`
 max-width: 1120px;
 margin: 0 auto;
 display: flex;
 justify-content: space-between;
`
export const LogoContainer = styled.div`

`

export const LogoImg = styled.img``

export const LanguagesBtnWrapper = styled.div``

export const LanguagueBtn = styled.button`
  border: none;
  font-size: 12.6px;
  line-height: 22px;
  border: none;
  padding: 6px;
        color: #555555;


  font-weight:600;
  background: none;
  margin: 0 3px;

  &:focus{
    outline: none;
  }

  &:hover{
    text-decoration: underline;
  }
`