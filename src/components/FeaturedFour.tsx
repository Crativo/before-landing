import React from 'react'
import Fade from 'react-reveal/Fade'
import Container from './Container'
import styled, { css } from 'styled-components'
import theme from '../styles/theme'
import { mq } from '../styles/media'
import { Link } from 'gatsby'

const CaseStudy = styled(Link)`
  display: flex;
  flex-direction: column;

  ${mq.tablet} {
    margin-bottom: 2rem;
    margin-right: 2rem;

    &:nth-child(even) {
      margin-right: 0;
    }
  }
`

const CaseStudyImage = styled.img`
  width: 100%;
`

const CaseStudyImageWrap = styled.div`
  margin-bottom: 2rem;
  overflow: hidden;
  max-height: 30rem;
  width: auto;
  height: auto;
  
  ${mq.tablet} {
    margin-bottom: 3.2rem;
  }
`

const CaseStudyWrap = styled.div`
  margin-bottom: 4rem;
  width: 100%;

  ${mq.tablet} {
    width: 50%;
  }

  ${mq.desktop} {
  }
`

const StyledFeaturedFour = styled.div`
  display: flex;
  flex-direction: column;

  ${mq.tablet} {
    flex-wrap: wrap;
    flex-direction: row;
  }
`

const CaseStudyFoot = styled.div`
  display: flex;
  font-size: 2rem;
  line-height: 3.2rem;


  ${mq.desktop} {
    font-size: 2rem;
  }
`

const BrandName = styled.div`
  color: ${theme.colors.black};
`

const Splitter = styled.div`
  color: ${theme.colors.darkerGrey};
`

const WorkType = styled.div`
  color: ${theme.colors.darkerGrey};
`

export const FeaturedFour = ({ caseStudies }: any) => (
  <Container>
    <StyledFeaturedFour>
      {caseStudies.map((caseStudy: any, index: number) => (
        <CaseStudyWrap key={index}>
          <Fade bottom>
            <CaseStudy to={`/work/${caseStudy.parent.name}`}>
              <CaseStudyImageWrap>
                <CaseStudyImage src={caseStudy.coverImageHorizontal || '/img/nocover.png'} />
              </CaseStudyImageWrap>
              <CaseStudyFoot>
                <BrandName>{caseStudy.brandName}</BrandName>
                <Splitter>&nbsp;/&nbsp;</Splitter>
                <WorkType>{caseStudy.workType}</WorkType>
              </CaseStudyFoot>
            </CaseStudy>
          </Fade>
          </CaseStudyWrap>
      ))}
    </StyledFeaturedFour>
  </Container>
)