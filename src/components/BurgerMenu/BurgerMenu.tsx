import React from 'react'
import styled from 'styled-components'
import theme from '../../styles/theme'
import { mq } from '../../styles/media'
import { Link } from 'gatsby'

export const StyledMenu = styled.nav<{ open: boolean }>`
  display: flex;
  background: ${theme.colors.primary};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.2s ease-in-out;
  width: 100%;
  z-index: 1;

  ${({ open }) => open ? 'display: flex;' : 'display: none;'};

  ${mq.tablet} {
    display: none;
    width: 40rem;
  }
`;

export const StyledLink = styled(Link)`
  margin-left: 2rem;
  padding: 1rem 0;
  font-size: 4rem;
  font-weight: ${theme.fontWeight.medium};
  letter-spacing: 0.5rem;
  color: ${theme.colors.white};
  text-decoration: none;
  transition: color 0.3s linear;

  &:hover {
    opacity: 1;
  }
`

const LinksWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  margin-bottom: 3.8rem;
`

const Menu = ({ open, ...props }: { open: boolean; setOpen: (isOpen: boolean) => void; id: string }) => {
  const isHidden = open ? true : false
  const tabIndex = isHidden ? 0 : -1

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <LinksWrap>
      <StyledLink to="/" tabIndex={tabIndex}>Home</StyledLink>
        
      <StyledLink to="/work" tabIndex={tabIndex}>Work</StyledLink>
      <StyledLink to="/services" tabIndex={tabIndex}>Services</StyledLink>
      <StyledLink to="/about" tabIndex={tabIndex}>About</StyledLink>
      <StyledLink to="/contact" tabIndex={tabIndex}>Contact</StyledLink>
      </LinksWrap>
    </StyledMenu>
  )
}

export default Menu