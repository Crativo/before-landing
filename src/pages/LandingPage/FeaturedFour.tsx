import React from 'react'
import Container from '../../components/Container'
import styled from 'styled-components'
import theme from '../../styles/theme'

const StyledFeaturedFour = styled.div`
  display: flex;
  flex-wrap: wrap;
`


const CaseStudy = styled.div`
  margin-right: 1.5rem;
`

const CaseStudyWrap = styled.div`
  width: 50%;
  margin-bottom: 8rem;

  &:nth-child(even) {
    ${CaseStudy} {
      margin-left: 1.5rem;
      margin-right: 0;
    }
  }

`

const CaseStudyImage = styled.img`
  width: 100%;
  height: 300px;
  margin-bottom: 3.2rem;
`

const CaseStudyFoot = styled.div`
  display: flex;
  font-size: 3.2rem;
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

interface ICaseStudy {
  brandName: string;
  workType: string;
}

interface IFeaturedFourProps {
  caseStudies: ICaseStudy[]
}

export const FeaturedFour = ({ caseStudies }: IFeaturedFourProps) => (
  <Container>
    <StyledFeaturedFour>
      {caseStudies.map((caseStudy) => (
        <CaseStudyWrap>
          <CaseStudy>
            <CaseStudyImage />
            <CaseStudyFoot>
              <BrandName>{caseStudy.brandName}</BrandName>
              <Splitter>&nbsp;/&nbsp;</Splitter>
              <WorkType>{caseStudy.workType}</WorkType>
            </CaseStudyFoot>
          </CaseStudy>
        </CaseStudyWrap>
      ))}
    </StyledFeaturedFour>
  </Container>
)