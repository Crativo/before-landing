import React from 'react'
import Container from '../Container'
import theme from '../../styles/theme'
import styled from 'styled-components'
import { SectionWrap } from '../SectionWrap'
import { LogoIcon } from '../LogoIcon'
import { Link } from 'gatsby'
import { mq } from '../../styles/media'
import { standardText } from '../../styles/text'

export const StyledFooter = styled.div`
  padding-top: 4rem;
  padding-bottom: 4rem;
  background: ${theme.colors.grey};

  ${mq.tablet} {
    padding-top: 4rem;
    padding-bottom: 5.6rem;
  }
`

const ActionSection = styled.div`
  ${standardText}
  margin-top: 4rem;
  margin-bottom: 4rem;

  ${mq.tablet} {
    font-size: 3.2rem;
    letter-spacing: -0.032rem;
    line-height: 3.8rem;
    margin-top: 8rem;
    margin-bottom: 12rem;
  }
`

const FooterActionTitle = styled.div``

const FooterAction = styled.div`
  color: ${theme.colors.primary};
`

const FooterFoot = styled.div`
  ${standardText}
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${mq.tablet} {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  ${mq.desktop} {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }
`

const FooterLogo = styled.div`
  order: 4;
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  margin-top: 4rem;

  ${mq.tablet} {
    margin-top: 0;
    order: 0;
    flex-direction: row;
    margin-right: 5rem;
  }

  ${mq.tabletWide} {
    flex-direction: row;
    margin-right: 5rem;
    margin-bottom: 4rem;
  }

  ${mq.desktop} {
    flex-direction: row;
    margin-bottom: 0;
  }
`

export const StyledLink = styled(Link)`
  flex: 0 1 auto;
  margin-bottom: 1rem;

  &:hover {
    opacity: 0.5;
  }

  ${mq.tablet} {
    margin-right: 1rem;
  }

  ${mq.desktop} {
    margin-right: 4rem;
  }
`

export const StyledNavigation = styled.div`
  flex: 0 1 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: 40rem;

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
  margin-top: 2rem;

  a {
    &:hover {
      opacity: 0.5;
    }

    ${mq.tablet} {
      margin-right: 1rem;
    }
  }

  ${mq.tablet} {
    flex-direction: row;
    margin-top: 0;
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
    {/* <a href="http://instagram.com" target="_blank">instagram</a> */}
  </StyledSocialNavigation>
)

const Footer = ({ footer }) => footer && (
  <StyledFooter>
    <Container>
      <SectionWrap>
        <ActionSection>
          <FooterActionTitle>{footer.actionTitle}</FooterActionTitle>
          <Link to={footer.actionLink}>
            <FooterAction>{footer.actionLinkText}</FooterAction>
          </Link>
        </ActionSection>
        <FooterFoot>
          <FooterLogo>
            <LogoIcon />
          </FooterLogo>
          <Navigation />
          <SocialLinks />
        </FooterFoot>
      </SectionWrap>
    </Container>
  </StyledFooter>
)

export default Footer
