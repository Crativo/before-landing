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
import { standardText } from '../../styles/text'

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10rem;
`

export const StyledNavigation = styled.header`
  ${standardText}
  /* display: none; */
  font-weight: ${theme.fontWeight.medium};

  ${mq.tablet} {
    display: flex;
  }

  .router-link {
    margin-left: 4rem;
    padding: 0.5rem 0.25rem;
    color: ${theme.colors.darkerGrey};

    &:hover {
      color: ${theme.colors.black};
    }

    &:nth-child(1) {
      margin-left: 0;
    }

    ${mq.desktop} {
      margin-left: 8rem;
    }
  }

  .active {
    color: ${theme.colors.black};
  }
`

export const StyledWrapBurger = styled.div`
  display: inline-block;

  ${mq.tablet} {
    display: none;
  }
`

const isPartiallyActive = ({
  isPartiallyCurrent,
}) => {
  return isPartiallyCurrent
    ? { className: 'router-link active' }
    : { className: 'router-link' }
}

const Header = () => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  const menuId = 'main-menu'

  useOnClickOutside(node, () => setOpen(false))

  return (
    <Container>
      <SectionWrap>
        <StyledHeader>
          <Link to="/">
            <LogoIcon />
          </Link>
          <StyledNavigation>
          <a href="mailto:michal@before.cz">
            michal@before.cz
          </a>
          </StyledNavigation>
        </StyledHeader>
      </SectionWrap>
    </Container>
  )
}

export default Header
