import React, { useRef, useState } from 'react'
import { LogoIcon } from '../LogoIcon'
import Container from '../Container'
import styled from 'styled-components'
import theme from '../../styles/theme'
import { Link } from 'gatsby'
import FocusLock from 'react-focus-lock'
import { SectionWrap } from '../SectionWrap'
import { mq } from '../../styles/media'
import { useOnClickOutside } from '../hooks'
import Burger from '../Burger/Burger'
import Menu from '../BurgerMenu/BurgerMenu'

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
  font-weight: ${theme.fontWeight.medium};

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

export const StyledWrapBurger = styled.div`
  display: inline-block;

  ${mq.tablet} {
    display: none;
  }
`

const Header = () => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  const menuId = "main-menu"

  useOnClickOutside(node, () => setOpen(false))

  return (
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
          <StyledWrapBurger>
            <FocusLock disabled={!open}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
            </FocusLock>
          </StyledWrapBurger>
        </StyledHeader>
      </SectionWrap>
    </Container>
  )
}

export default Header
