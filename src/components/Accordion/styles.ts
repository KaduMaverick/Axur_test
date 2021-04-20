import styled from "styled-components"

interface AccordionContainerProps {
  open: boolean
}

// export const AccordionContainer = styled.div<AccordionContainerProps>`
//   background: ${(props:AccordionContainerProps) => (props.open ? 'blue' : '#000')};
// `

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
  margin-top: 20px;
  height: 300px;
  overflow: scroll;

  &::-webkit-scrollbar{
    width: 3px;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #458986;
  }
`