import styled from "styled-components"
import { LIGHT_BLUE } from "../../constants/color"

interface AccordionContainerProps {
  open: boolean
}

export const AccordionWrapper = styled.div`
position: relative
`

export const AccordionButton = styled.button`
  background: none;
  border:none;
  outline: none;
  position: absolute;
  top: 0;
  right: 0;

`

export const AccordionContainer = styled.div<AccordionContainerProps>`
  overflow: hidden;
  transition: all .4s ease;
  max-height: ${(props: AccordionContainerProps) => (props.open ? '9999px' : '0px')};
`

export const AccordionContent = styled.div`
  margin-top: 2rem;
  height: 30rem;
  overflow: scroll;

  &::-webkit-scrollbar{
    width: 3px;
    height:3px;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${LIGHT_BLUE};
  }
`