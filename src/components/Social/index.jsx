import React from 'react'
import { Ul, Li, Link } from './styled'
import networkIcons from './networkIcons'

const Social = ({ networks }) => (
  <Ul>
    {networks.map((network) => (
      <Li key={network.network}>
        <Link target="_blank" rel="noopener noreferrer" href={network.link}>
          {networkIcons[network.network]}
        </Link>
      </Li>
    ))}
  </Ul>
)

export default Social
