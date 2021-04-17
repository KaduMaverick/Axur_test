import styled from 'styled-components'

export const SearchContainer = styled.div`
  max-width: 1024px;
  padding: 20px;
  margin: 0 auto;
`

export const SearchInput = styled.input`
    background: none;
    border: none;
    box-shadow: 12px 12px 24px 0 rgba(0, 0, 0, 0.2),
    -12px -12px 24px 0 rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.4);
    box-sizing: border-box;
    border-radius: 50px;
    width: 280px;
    height: 60px;
    padding: 20px;
    
  &, &::placeholder{
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: #414B5A;
    opacity: 0.4;
  }

  &:focus{
    border:none;
    outline: none;
    box-shadow: inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2),
    inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5);
  }
`