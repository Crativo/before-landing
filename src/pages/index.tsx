import React, { Fragment, Component } from 'react'
import { graphql } from 'gatsby'
import Fade from '../components/Fade'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { PageHeadline, PageHeadlineSpace } from '../components/PageHeadline'
import Container from '../components/Container'
import { SectionWrap } from '../components/SectionWrap'
import { FeaturedFour } from '../components/FeaturedFour'
import styled from 'styled-components'
import { mq } from '../styles/media'

const StyledPageHeadline = styled(PageHeadline)`
  ${mq.desktop} {
    font-size: 10rem;
    letter-spacing: -0.08;
    line-height: 9.6rem;
  }

  ${mq.desktopWide} {
    font-size: 16rem;
    letter-spacing: -0.16rem;
    line-height: 15.3rem;
    max-width: 146.6rem;
  }
`

class Landing extends Component<{data: any}> {
  render() {
    const caseStudies = this.props.data.caseStudies.nodes
    const landingPage = this.props.data.landingPage.edges[0].node

    return (
      <Fragment>
        <Header />
        <Container>
          <SectionWrap>
            <Fade>
              <PageHeadlineSpace>
                <StyledPageHeadline>
                  {landingPage.pageHeadline}
                </StyledPageHeadline>
              </PageHeadlineSpace>
            </Fade>
            <FeaturedFour caseStudies={caseStudies.slice(0, 4)} />
          </SectionWrap>
        </Container>
        <Footer />
      </Fragment>
    )
  }
}

export const query = graphql`
  query IndexQuery {
    landingPage: allPagesJson(filter: {pageName: {eq: "landing"}}) {
      edges {
        node {
          id
          pageHeadline
          social {
            network
            link
          }
        }
      }
    }

    caseStudies: allCaseStudiesJson {
      nodes {
        id
        brandName
        workType
        workDetails
        coverImageSquare
        coverImageHorizontal
        parent {
          ... on File {
            id
            name
          }
        }
      }
    }
  }
`

export default Landing
