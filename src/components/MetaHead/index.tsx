import React from 'react'
import Helmet from 'react-helmet'

const MetaHead = ({ title, description } : { title: string; description: string}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:image" content="/static/assets/banner.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="628" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta name="twitter:card" content="summary_large_image" />
  </Helmet>
)

MetaHead.defaultProps = {
  title: 'before',
  description: 'Small design studio helping brands being understood by a viewer on the other side of the screen.',
}

export default MetaHead
