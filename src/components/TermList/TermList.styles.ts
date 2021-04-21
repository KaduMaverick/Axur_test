import styled from 'styled-components'
import { mq } from '../../constants/theme'

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  @media screen and (max-width: ${mq.phone.wide.maxWidth}){
    margin: 0 2rem;
  }
`

export const TermInfoContent = styled.div`
`

export const TermInfoHeading = styled.h2`
  margin: 3rem 0 2rem;
`