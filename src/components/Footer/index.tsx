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

  ${mq.tablet} {
    font-size: 4.8rem;
    letter-spacing: -0.048rem;
    line-height: 5.6rem;
  }
`

const FooterAction = styled.div`
  font-size: 2rem;
  font-weight: ${theme.fontWeight.medium};
  line-height: 6.6rem;
  color: ${theme.colors.primary};

  ${mq.tablet} {
    font-size: 4.8rem;
    letter-spacing: -0.096rem;
    line-height: 6.6rem;
  }
`

const FooterFoot = styled.div`
  display: flex;
  flex-direction: column;

  ${mq.tablet} {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

const FooterLogo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8rem;

  ${mq.tablet} {
    flex-direction: row;
    margin-right: 8rem;
  }
`

const FooterNav = styled.div``

export const StyledLink = styled(Link)`
  margin-bottom: 4rem;
  color: ${theme.colors.black};
  font-weight: ${theme.fontWeight.medium};
  
  ${mq.tablet} {
    margin-right: 8rem;
    font-size: 2rem;
    line-height: 3rem;
    letter-spacing: 0.01rem;
  }
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

const SocialLinks = () => (
  <StyledNavigation>
    <StyledLink to="http://instagram.com">instagram</StyledLink>
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
          <FooterNav><SocialLinks /></FooterNav>
        </FooterFoot>
      </SectionWrap>
    </Container>
  </StyledFooter>
)

export default Footer
