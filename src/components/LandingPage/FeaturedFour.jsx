import React from 'react'
import Container from '../Container'
import styled from 'styled-components'
import theme from '../../styles/theme'
import { mq } from '../../styles/media'

const StyledFeaturedFour = styled.div`
  display: flex;
  margin-bottom: 6rem;
  flex-direction: column;

  ${mq.tablet} {
    flex-wrap: wrap;
    flex-direction: row;
    margin-bottom: 12rem;
  }
`

const CaseStudy = styled.div`
  ${mq.tablet} {
    margin-right: 1.5rem;
  }
`

const CaseStudyWrap = styled.div`
  margin-bottom: 4rem;

  ${mq.tablet} {
    width: 50%;
    margin-bottom: 8rem;

    &:nth-child(even) {
      ${CaseStudy} {
        margin-left: 1.5rem;
        margin-right: 0;
      }
    }
  }
`

const CaseStudyImage = styled.img`
  width: 100%;
  height: 300px;
  margin-bottom: 2rem;

  ${mq.tablet} {
    margin-bottom: 3.2rem;
  }
`

const CaseStudyFoot = styled.div`
  display: flex;
  font-size: 2rem;
  line-height: 3.2rem;


  ${mq.desktop} {
    font-size: 3.2rem;
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

export const FeaturedFour = ({ caseStudies }) => (
  <Container>
    <StyledFeaturedFour>
      {caseStudies.map((caseStudy) => (
        <CaseStudyWrap>
          <CaseStudy>
            <CaseStudyImage />
            <CaseStudyFoot>
              <BrandName>{caseStudy.node.brandName}</BrandName>
              <Splitter>&nbsp;/&nbsp;</Splitter>
              <WorkType>{caseStudy.node.workType}</WorkType>
            </CaseStudyFoot>
          </CaseStudy>
        </CaseStudyWrap>
      ))}
    </StyledFeaturedFour>
  </Container>
)