import React from 'react'
import Fade from './Fade'
import Container from './Container'
import styled, { css } from 'styled-components'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import theme from '../styles/theme'
import { mq } from '../styles/media'
import { Link } from 'gatsby'
import { standardTextLG } from '../styles/text'

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
    max-height: 38rem;
    margin-bottom: 3.2rem;
  }

  ${mq.desktop} {
    max-height: 44rem;
  }

  ${mq.desktopWide} {
    max-height: 50rem;
  }
`

const CaseStudyWrap = styled.div`
  margin-bottom: 4rem;
  width: 100%;

  ${mq.tablet} {
    width: 50%;
  }

  ${mq.desktop} {
    margin-bottom: 5rem;
  }

  ${mq.desktopWide} {
    margin-bottom: 6rem;
  }
`

const StyledFeaturedFour = styled(TransitionGroup)`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;

  ${mq.tablet} {
    flex-wrap: wrap;
    flex-direction: row;
  }
`

const CaseStudyFoot = styled.div`
  ${standardTextLG}
  display: flex;
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
            <Fade key={index} delay={index * 200}>
              <CaseStudy to={`/work/${caseStudy.parent.name}`}>
                <CaseStudyImageWrap>
                  <CaseStudyImage
                    src={caseStudy.coverImageHorizontal || '/img/nocover.png'}
                  />
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
