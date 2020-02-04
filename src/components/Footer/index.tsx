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
    padding-top: 10rem;
    padding-bottom: 5.6rem;
  }
`

const ActionSection = styled.div`
  font-size: 2rem;
  letter-spacing: -0.032rem;
  line-height: 3.5rem;
  margin-top: 4rem;
  margin-bottom: 4rem;

  ${mq.tablet} {
    font-size: 3.2rem;
    letter-spacing: -0.032rem;
    line-height: 3.8rem;
    margin-top: 8rem;
    margin-bottom: 8rem;
  }
`

const FooterActionTitle = styled.div`
`

const FooterAction = styled.div`
  color: ${theme.colors.primary};
`

const FooterFoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${mq.tablet} {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }
`

const FooterLogo = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;

  ${mq.tablet} {
    flex-direction: row;
    margin-right: 5rem;
  }
`

export const StyledLink = styled(Link)`
  flex: 0 1 auto;
  &:hover {
    opacity: 0.5;
  }
  
  ${mq.tablet} {
    margin-right: 1rem;
    font-size: 2rem;
    line-height: 3rem;
    letter-spacing: 0.01rem;
  }
`

export const StyledNavigation = styled.div`
  flex: 0 1 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  
  max-width: 40rem;
  font-size: 1.6rem;
  letter-spacing: 0.1rem;
  line-height: 3rem;
  font-weight: ${theme.fontWeight.medium};
  color: ${theme.colors.black};

  ${mq.tablet} {
    flex: 1 0 auto;
  }
  ${mq.desktop} {
    flex-direction: row;
  }
`

export const StyledSocialNavigation = styled.div`
  display: flex;
  flex: 0 1 auto;
  justify-content: space-between;
  flex-direction: column;
  font-size: 1.6rem;
  letter-spacing: 0.1rem;
  line-height: 3rem;
  font-weight: ${theme.fontWeight.medium};
  color: ${theme.colors.black};

  a {
    &:hover {
      opacity: 0.5;
    }

    ${mq.tablet} {
      margin-right: 1rem;
      font-size: 2rem;
      line-height: 3rem;
      letter-spacing: 0.01rem;
    }
  }

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
  <StyledSocialNavigation>
    <a href="http://instagram.com" target="_blank">instagram</a>
  </StyledSocialNavigation>
)

const Footer = () => (
  <StyledFooter>
    <Container>
      <SectionWrap>
        <ActionSection>
          <FooterActionTitle>What can we help you with?</FooterActionTitle>
          <Link to="/services"><FooterAction>see our services -></FooterAction></Link>
        </ActionSection>
        <FooterFoot>
          <FooterLogo><LogoIcon /></FooterLogo>
          <Navigation />
          <SocialLinks />
        </FooterFoot>
      </SectionWrap>
    </Container>
  </StyledFooter>
)

export default Footer
