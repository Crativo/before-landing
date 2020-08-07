import React, { Component } from 'react'
import Container from '../components/Container'
import { SectionWrap } from '../components/SectionWrap'
import { PageHeadline } from '../components/PageHeadline'
import { mq } from '../styles/media'
import styled, { css } from 'styled-components'
import theme from '../styles/theme'

const StyledPageHeadline = styled(PageHeadline)`
  ${mq.desktop} {
    margin-bottom: 8rem;
  }
`

const BrandName = styled.div`
  font-size: 2rem; 
  line-height: 2.4rem;

  ${mq.tablet} {
    font-size: 3.2rem;
    line-height: 4.4rem;
  }
`

const StyledTop = styled.div`
  margin-bottom: 8rem;

  ${mq.desktop} {
    margin-bottom: 16rem;
  }
`

const WorkType = styled.div`
  color: ${theme.colors.darkerGrey};

  font-size: 2rem; 
  line-height: 2.4rem;

  ${mq.tablet} {
    font-size: 3.2rem;
    line-height: 4.4rem;
  }
`

const StyledImageItem = styled.img`
  width: 100%;
  height: auto;
`

const Row = styled.div`
  ${({ spacing }) =>
    spacing &&
    css`
      margin-bottom: ${spacing / 10}rem;

      &:last-of-type {
        margin-right: 0;
      }
    `}
  width: 100%;
  display: flex;
  justify-content: flex-start;
`

const Col = styled.div`
  ${({ spacing }) =>
    spacing &&
    css`
      margin-right: ${spacing / 10}rem;

      &:last-of-type {
        margin-right: 0;
      }
    `}
  width: 100%;
`

class CaseStudyTemplate extends Component {
  renderRows(caseStudy) {
    return caseStudy?.rows?.map((row, rowIndex) => (
      <Row spacing={caseStudy.spacing} key={rowIndex}>
        {row?.cols?.map((col, colIndex) => (
          <Col spacing={caseStudy.spacing} key={colIndex}>
            <StyledImageItem src={col.imageSrc} />
          </Col>
        ))}
      </Row>
    ))
  }
  render() {
    const caseStudy = this.props.caseStudy

    return (
      <Container>
        <SectionWrap>
          <StyledTop>
            <StyledPageHeadline>{caseStudy?.brandPageHeadline}</StyledPageHeadline>
            <BrandName>{caseStudy?.brandName}</BrandName>
            <WorkType>{caseStudy?.workDetails}</WorkType>
          </StyledTop>
        </SectionWrap>

        <SectionWrap>{this.renderRows(caseStudy)}</SectionWrap>
      </Container>
    )
  }
}

export default CaseStudyTemplate
