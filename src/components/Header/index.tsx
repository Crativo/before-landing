import React from 'react'
import { LogoIcon } from '../LogoIcon'
import Container from '../Container'
import styled from 'styled-components'
import theme from '../../styles/theme'
import { Link } from 'gatsby'
import { SectionWrap } from '../SectionWrap'
import { mq } from '../../styles/media'

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10rem;
`

export const StyledNavigation = styled.header`
  display: none;
  font-size: 2rem;
  letter-spacing: 0.1rem;
  line-height: 3rem;
  color: ${theme.colors.black};

  ${mq.tablet} {
    display: flex;
  }
`

export const StyledLink = styled(Link)`
  margin-left: 8rem;
  padding: 0.5rem 0.25rem;

  &:nth-child(1) {
    margin-left: 0;
  }
`

const Header = () => (
  <Container>
    <SectionWrap>
      <StyledHeader>
        <Link to="/"><LogoIcon /></Link>        
        <StyledNavigation>
          <StyledLink to="/work">work</StyledLink>
          <StyledLink to="/services">services</StyledLink>
          <StyledLink to="/about">about</StyledLink>
          <StyledLink to="/contact">contact</StyledLink>
        </StyledNavigation>
      </StyledHeader>
    </SectionWrap>
  </Container>
)

export default Header
