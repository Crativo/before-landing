import styled from 'styled-components'
import theme from '../../styles/theme'
import { Link } from 'gatsby'

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10rem;
  padding: 0 10rem;
`

export const StyledNavigation = styled.header`
  display: flex;
  font-size: 2rem;
  letter-spacing: 0.1rem;
  line-height: 3rem;
  color: ${theme.colors.black};
`

export const StyledLink = styled(Link)`
  margin-left: 8rem;
  padding: 0.5rem 0.25rem;

  &:nth-child(1) {
    margin-left: 0;
  }
`
