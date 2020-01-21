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
    font-size: 3.2rem;
    letter-spacing: -0.032rem;
    line-height: 5.6rem;
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

  ${mq.tablet} {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

const FooterLogo = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  margin-bottom: 8rem;

  ${mq.tablet} {
    flex-direction: row;
    margin-right: 5rem;
  }
`

export const StyledLink = styled(Link)`
  margin-bottom: 4rem;
  color: ${theme.colors.black};
  font-weight: ${theme.fontWeight.medium};
  
  ${mq.tablet} {
    margin-right: 1rem;
    font-size: 2rem;
    line-height: 3rem;
    letter-spacing: 0.01rem;
  }
`

export const StyledNavigation = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  
  max-width: 40rem;
  font-size: 2rem;
  letter-spacing: 0.1rem;
  line-height: 3rem;
  color: ${theme.colors.black};

  ${mq.tablet} {
  }
  ${mq.desktop} {
    flex-direction: row;
  }
`

// export const StyledLinks = styled.div`
//   max-width: 60rem;
//   display: flex;
//   justify-content: space-between;
//   flex-direction: column;
// `


export const StyledSocialNavigation = styled.div`
  display: flex;
  flex: 0 1 auto;
  justify-content: space-between;
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
    {/* <StyledLinks> */}
      <StyledLink to="/work">work</StyledLink>
      <StyledLink to="/services">services</StyledLink>
      <StyledLink to="/about">about</StyledLink>
      <StyledLink to="/contact">contact</StyledLink>
    {/* </StyledLinks> */}
  </StyledNavigation>
)

const SocialLinks = () => (
  <StyledSocialNavigation>
    <StyledLink to="http://instagram.com">instagram</StyledLink>
  </StyledSocialNavigation>
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
          <Navigation />
          <SocialLinks />
        </FooterFoot>
      </SectionWrap>
    </Container>
  </StyledFooter>
)

export default Footer
