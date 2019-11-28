import React from 'react'
import Container from '../Container'
import styled from 'styled-components'
import theme from '../../styles/theme'
import { mq } from '../../styles/media'

const StyledFeaturedCaseStudy = styled.div`
  display: flex;
  flex-direction: column;

  ${mq.tablet} {
    flex-direction: row;
  }
`

const LeftFeatured = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-width: 40rem;
`

const FeaturedName = styled.div`
  color: ${theme.colors.black};
  font-size: 3.2rem;
  letter-spacing: -0.032rem;
  line-height: 3.8rem;
  margin-bottom: 0.8rem;
`

const FeaturedAction = styled.div`
  font-size: 3.2rem;
  letter-spacing: -0.064rem;
  line-height: 3.8rem;
  color: ${theme.colors.primary};
  margin-bottom: 5rem;

  ${mq.tablet} {
    margin-bottom: 10rem;
  }
`

const Img = styled.img`
  width: 100%;
  height: 500px;
  background: #7242f5;
  border: none;
`


interface IFeaturedCaseStudyProps {
  image: string;
  name: string;
  actionText: string;
}

export const FeaturedCaseStudy = ({ image="", name, actionText }: IFeaturedCaseStudyProps) => (
  <Container>
    <StyledFeaturedCaseStudy>
      <LeftFeatured>
        <FeaturedName>{name}</FeaturedName>
        <FeaturedAction>{actionText}</FeaturedAction>
      </LeftFeatured>
      <Img src={image} />
    </StyledFeaturedCaseStudy>
  </Container>
)