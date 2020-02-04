import React, { FC } from 'react'
import ReactRevealFade from 'react-reveal/Fade'

const Fade: FC<{}> = ({ children }) => <ReactRevealFade bottom distance="50%" duration={700} delay={100}>{children}</ReactRevealFade>

export default Fade