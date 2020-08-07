import styled from 'styled-components'
import { mq } from '../styles/media'

const Container = styled.div`
  margin: 0 auto;
  max-width: 150rem;

  ${mq.desktopWide} {
    max-width: 180rem;
  }
`

export default Container
