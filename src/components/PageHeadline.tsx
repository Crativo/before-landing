import React from 'react'
import styled from 'styled-components'
import { mq } from '../styles/media'

export const PageHeadline = styled.h2`
  margin-top: 8rem;
  margin-bottom: 8rem;
  font-size: 4rem;
  letter-spacing: -0.08rem;
  line-height: 4.4rem;

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

    font-size: 8rem;
    letter-spacing: 0.08rem;
    line-height: 8.8rem;
  }
`
