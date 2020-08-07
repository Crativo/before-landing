import React, { ReactChildren } from 'react'
import MetaHead from '../MetaHead'
import { Wrap } from './styled'

const Layout = ({ children }) => (
  <Wrap>
    <MetaHead />
    {children}
  </Wrap>
)

export default Layout
