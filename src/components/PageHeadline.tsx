import styled from 'styled-components'
import { mq } from '../styles/media'
import theme from '../styles/theme'

export const PageHeadlineSpace = styled.div`
    /* height: 70vh;
    display:flex;
    justify-content: center;
    align-items: center;
    max-height: 30rem;

    ${mq.tablet} {
      max-height: initial;
    } */
`

export const PageHeadline = styled.h2`
  margin-top: 1rem;
  margin-bottom: 4rem;
  font-size: 4rem;
  letter-spacing: -0.08rem;
  line-height: 4rem;
  font-weight: ${theme.fontWeight.medium};
  max-width: 100rem;

  ${mq.tablet} {
    margin-top: 12rem;
    margin-bottom: 12rem;
    font-size: 7.8rem;
    letter-spacing: -0.04rem;
    line-height: 7.8rem;
  }

  ${mq.desktop} {
    margin-top: 16rem;
    margin-bottom: 16rem;
    font-size: 8rem;
    letter-spacing: -0.08;
    line-height: 8.8rem;
  }

  ${mq.desktopWide} {
    margin-top: 19rem;
    margin-bottom: 19rem;
  }
`
