import React from 'react'
import ReactRevealFade from 'react-reveal/Fade'

const Fade = ({ children, ...rest }) => <ReactRevealFade bottom distance="50%" duration={700} delay={100} {...rest}>{children}</ReactRevealFade>

export default Fade