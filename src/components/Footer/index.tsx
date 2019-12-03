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
  margin-top: 8rem;
  margin-bottom: 8rem;

  ${mq.tablet} {
    font-size: 4rem;
    margin-top: 12rem;
    margin-bottom: 20rem;
  }
`

const FooterActionTitle = styled.div`
  font-size: 2rem;
  font-weight: ${theme.fontWeight.medium};
`

const FooterAction = styled.div`
  font-size: 2rem;
  font-weight: ${theme.fontWeight.medium};
  line-height: 6.6rem;
  color: ${theme.colors.primary};
`

const FooterFoot = styled.div`
`

const FooterLogo = styled.div`
  
`

const FooterNav = styled.div`
  margin-top: 8rem;
`

export const StyledLink = styled(Link)`
  margin-bottom: 4rem;
  color: ${theme.colors.darkerGrey};
`

export const StyledNavigation = styled.header`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  letter-spacing: 0.1rem;
  line-height: 3rem;
  color: ${theme.colors.black};

  ${mq.tablet} {
    flex-direction: row;
  }

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
