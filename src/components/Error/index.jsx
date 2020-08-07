import React from 'react'
import { InnerWrapper, Title, Message } from './styled'

class ErrorPage extends React.Component {
  render() {
    return (
      <InnerWrapper>
        <Title>You Got Lost</Title>
        <Message>
          Go back, you must. <br /> Do or do not. There is no try.
        </Message>
      </InnerWrapper>
    )
  }
}

export default ErrorPage
