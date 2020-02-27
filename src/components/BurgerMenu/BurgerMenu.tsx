import React from 'react'
import styled from 'styled-components'
import theme from '../../styles/theme'
import { mq } from '../../styles/media'
import { Link } from 'gatsby'

export const StyledMenu = styled.nav<{ open: boolean }>`
  z-index: 1;
  display: flex;
  position: absolute;
  min-height: 100vh;
  max-height: 100vh;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.2s ease-in-out;
  background: ${theme.colors.primary};
  text-align: left;

  ${({ open }) => (open ? 'display: flex;' : 'display: none;')};

  ${mq.tablet} {
    display: none;
    width: 40rem;
  }
`

export const StyledLink = styled(Link)`
  margin-left: 2rem;
  padding: 1rem 0;
  font-size: 4rem;
  font-weight: ${theme.fontWeight.medium};
  letter-spacing: 0.5rem;
  color: ${theme.colors.white};
  text-decoration: none;
  transition: color 0.3s linear;
  outline: none;

  &:hover {
    opacity: 1;
  }
`

const LinksWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin-top: 3rem;
`

const Menu = ({
  open,
  setOpen,
  ...props
}: {
  open: boolean
  setOpen: (isOpen: boolean) => void
  id: string
}) => {
  const isHidden = open ? true : false
  const tabIndex = isHidden ? 0 : -1

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <LinksWrap>
        <StyledLink
          to="/"
          onClick={() => setOpen(false)}
          tabIndex={tabIndex}
        >
          Home
        </StyledLink>
        <StyledLink
          to="/work"
          onClick={() => setOpen(false)}
          tabIndex={tabIndex}
        >
          Work
        </StyledLink>
        <StyledLink
          to="/services"
          onClick={() => setOpen(false)}
          tabIndex={tabIndex}
        >
          Services
        </StyledLink>
        <StyledLink
          to="/about"
          onClick={() => setOpen(false)}
          tabIndex={tabIndex}
        >
          About
        </StyledLink>
        <StyledLink
          to="/contact"
          onClick={() => setOpen(false)}
          tabIndex={tabIndex}
        >
          Contact
        </StyledLink>
      </LinksWrap>
    </StyledMenu>
  )
}

export default Menu
