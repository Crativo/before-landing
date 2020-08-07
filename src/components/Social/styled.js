import styled from 'styled-components'

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
`

export const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Link = styled.a`
  outline: none;
  cursor: pointer;
  padding: 0 1rem;

  &:hover {
    path {
      opacity: 1;
    }
  }
`

export const Title = styled.span`
  position: absolute;
  width: 0;
  overflow: hidden;
`
