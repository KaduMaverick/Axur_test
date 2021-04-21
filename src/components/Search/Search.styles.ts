import styled from 'styled-components'
import { DARKER_GRAY, GRAY_WITH_OPACITY, ORANGE_RED,  WHITE } from '../../constants/color'

export const SearchContainer = styled.div`
  max-width: 1024px;
  padding: 2rem;
  margin: 0 auto;
`

export const SearchInput = styled.input`
    background: ${WHITE};
    width: 100%;
    border: none;
    box-shadow: 4px 4px 4px 4px  ${GRAY_WITH_OPACITY};
    border: 1px solid ${GRAY_WITH_OPACITY};
    box-sizing: border-box;
    border-radius: 50px;
    height: 6rem;
    padding: 2rem;
    
  &, &::placeholder{
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.3rem;
    color: ${DARKER_GRAY};
  }

  &:focus{
    border:none;
    outline: none;
    box-shadow: inset 4px 4px 4px 4px  ${GRAY_WITH_OPACITY};
  }
`

export const SearchInputMessage = styled.span`
  display: inline-block;
  text-align: right;
  width: 100%;
  padding: 1rem;
  font-size: 1.2rem;
  color: ${ORANGE_RED};
`