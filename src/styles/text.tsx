import { css } from "styled-components";
import theme from './theme'
import { mq } from './media'

export const standardText = css`
  margin: 0;
  font-size: 2rem;
  line-height: 2.8rem;
  letter-spacing: -0.02rem;
  color: ${theme.colors.black};
  font-weight: ${theme.fontWeight.medium};

  ${mq.desktopWide} {
    font-size: 3rem;
    line-height: 3.8rem;
  }
`