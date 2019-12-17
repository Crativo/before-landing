import React from 'react'
import styled from 'styled-components'
import theme from '../../styles/theme'
import { mq } from '../../styles/media'
import { Link } from 'gatsby';

export const StyledMenu = styled.nav<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${theme.colors.primary};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  width: 100%;

  ${mq.tablet} {
    display: none;
    width: 40rem;
  }
`;

export const StyledLink = styled(Link)`
  margin-left: 2rem;
  padding: 1rem 0;
  font-size: 4rem;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: ${theme.colors.white};
  text-decoration: none;
  transition: color 0.3s linear;

  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`

const Menu = ({ open, ...props }: { open: boolean; setOpen: (isOpen: boolean) => void; id: string }) => {
  const isHidden = open ? true : false
  const tabIndex = isHidden ? 0 : -1

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <StyledLink to="/work" tabIndex={tabIndex}>Work</StyledLink>
      <StyledLink to="/services" tabIndex={tabIndex}>Services</StyledLink>
      <StyledLink to="/about" tabIndex={tabIndex}>About</StyledLink>
      <StyledLink to="/contact" tabIndex={tabIndex}>Contact</StyledLink>
    </StyledMenu>
  )
}

export default Menu