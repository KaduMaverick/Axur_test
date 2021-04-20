import styled from 'styled-components'

export const SearchContainer = styled.div`
  max-width: 1024px;
  padding: 20px;
  margin: 0 auto;
`

export const SearchInput = styled.input`
    background: white;
    width: 100%;
    border: none;
    box-shadow: 4px 4px 4px 4px  rgba(255, 255, 255, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.4);
    box-sizing: border-box;
    border-radius: 50px;
    height: 60px;
    padding: 20px;
    
  &, &::placeholder{
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: #414B5A;
  }

  &:focus{
    border:none;
    outline: none;
    box-shadow: inset 4px 4px 4px 4px  rgba(255, 255, 255, 0.4);
  }
`

export const SearchInputMessage = styled.span`
  display: inline-block;
  text-align: right;
  width: 100%;
  padding: 10px;
  font-size: 12px;
  color: red;
`