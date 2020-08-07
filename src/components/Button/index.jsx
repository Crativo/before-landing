import React from 'react'
import { StyledButton } from './styled'

const Button = ({ type, children, isPrimary = false }) => (
  <StyledButton type={type} isPrimary={isPrimary}>
    {children}
  </StyledButton>
)

export default Button
