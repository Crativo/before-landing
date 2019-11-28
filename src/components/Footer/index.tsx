import React from 'react'
import Container from '../Container'
import theme from '../../styles/theme'
import styled from 'styled-components'
import { SectionWrap } from '../SectionWrap'
import { LogoIcon } from '../LogoIcon'
import { Link } from 'gatsby'
import { mq } from '../../styles/media'

export const StyledFooter = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;
  background: ${theme.colors.grey};

  ${mq.tablet} {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
`

const ActionSection = styled.div`
  font-size: 2.4rem;
  margin-top: 6rem;
  margin-bottom: 10rem;

  ${mq.tablet} {
    font-size: 4rem;
    margin-top: 12rem;
    margin-bottom: 20rem;
  }
`

const FooterActionTitle = styled.div`
  font-size: 4rem;
`

const FooterAction = styled.div`
  color: ${theme.colors.primary};
`

const FooterFoot = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 80rem;
`

const FooterLogo = styled.div`
  
`

const FooterNav = styled.div`
  display: flex;
`

export const StyledLink = styled(Link)`
  margin-left: 8rem;
  padding: 0.5rem 0.25rem;

  &:nth-child(1) {
    margin-left: 0;
  }
`

export const StyledNavigation = styled.header`
  display: flex;
  font-size: 2rem;
  letter-spacing: 0.1rem;
  line-height: 3rem;
  color: ${theme.colors.black};
`


const Navigation = () => (
  <StyledNavigation>
    <StyledLink to="/work">work</StyledLink>
    <StyledLink to="/services">services</StyledLink>
    <StyledLink to="/about">about</StyledLink>
    <StyledLink to="/contact">contact</StyledLink>
  </StyledNavigation>
)

const Footer = () => (
  <StyledFooter>
    <Container>
      <SectionWrap>
        <ActionSection>
          <FooterActionTitle>What can we help you with?</FooterActionTitle>
          <FooterAction>see our services -></FooterAction>
        </ActionSection>
        <FooterFoot>
          <FooterLogo><LogoIcon /></FooterLogo>
          <FooterNav><Navigation /></FooterNav>
        </FooterFoot>
      </SectionWrap>
    </Container>
  </StyledFooter>
)

export default Footer
