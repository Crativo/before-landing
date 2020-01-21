import React, { Component } from 'react'
import Container from '../components/Container'
import { SectionWrap } from '../components/SectionWrap'
import { PageHeadline } from '../components/PageHeadline'
import { mq } from '../styles/media'
import styled, { css } from 'styled-components'
import theme from '../styles/theme'

const BrandName = styled.div`
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

  ${mq.tablet} {
    font-size: 3.2rem;
    line-height: 4.4rem;
  }
`

const StyledImageItem = styled.img`
  width: 100%;
  height: auto;
`

const Row = styled.div<{ spacing: number }>`
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

const Col = styled.div<{ spacing: number }>`
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

interface Col {
  imageSrc: string
}
interface Row {
  cols: [Col]
}
interface CaseStudy {
  rows: [Row]
  spacing: number
  brandPageHeadline: string
  brandName: string
  workType: string
}

class CaseStudyTemplate extends Component<{ caseStudy: CaseStudy }> {
  renderRows(caseStudy: CaseStudy) {
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
            <PageHeadline>{caseStudy?.brandPageHeadline}</PageHeadline>
            <BrandName>{caseStudy?.brandName}</BrandName>
            <WorkType>{caseStudy?.workType}</WorkType>
          </StyledTop>
        </SectionWrap>

        <SectionWrap>{this.renderRows(caseStudy)}</SectionWrap>
      </Container>
    )
  }
}

export default CaseStudyTemplate
