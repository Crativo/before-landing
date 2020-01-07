import React from 'react'
import styled from 'styled-components'
import { mq } from '../styles/media'
import theme from '../styles/theme'

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

    font-size: 6rem;
    letter-spacing: -0.04rem;
    line-height: 6.6rem;
  }

  ${mq.desktop} {
    margin-top: 16rem;
    margin-bottom: 16rem;

    font-size: 16rem;
    letter-spacing: -0.06rem;
    line-height: 15.3rem;
  }
`
