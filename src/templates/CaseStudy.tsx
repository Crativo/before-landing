import React, { Fragment, Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
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

const Row = styled.div<{ spacing: number}>`
  ${({spacing}) => spacing && css`
    margin-bottom: ${spacing/10}rem;

    &:last-of-type {
      margin-right: 0;
    } 
  `}
  width: 100%;
  display: flex;
  justify-content: flex-start;
`

const Col = styled.div<{ spacing: number}>`
  ${({spacing}) => spacing && css`
    margin-right: ${spacing/10}rem;

    &:last-of-type {
      margin-right: 0;
    } 
  `}
  width: 100%;
`

class CaseStudy extends Component<{ pageContext: any }> {
  render() {
    const caseStudy = this.props.pageContext.node

    return (
      <Fragment>
        <Header />
        <Container>
          <SectionWrap>
            <StyledTop>
              <PageHeadline>
                Lovebrands also need their own eshop, sometimes.
              </PageHeadline>
              <BrandName>{caseStudy.brandName}</BrandName>
              <WorkType>{caseStudy.workType}</WorkType>
            </StyledTop>
          </SectionWrap>

          <SectionWrap>
            {caseStudy.rows.map((row: any) => (
              <Row spacing={caseStudy.spacing}>
                {row.cols.map((col: any) => (
                  <Col spacing={caseStudy.spacing}>
                    <StyledImageItem src={col.imageSrc} />
                  </Col>
                ))}
              </Row>
            ))}
          </SectionWrap>
        </Container>
        <Footer />
      </Fragment>
    )
  }
}

// export const query = graphql`
//   query CaseStudyQuery {
//     caseStudy: allCaseStudiesJson {
//       edges {
//         node {
//           id
//           brandName
//         }
//       }
//     }
//   }
// `

export default CaseStudy
