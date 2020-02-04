import React, { Fragment, Component } from 'react'
import { graphql } from 'gatsby'
import Fade from '../components/Fade'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { PageHeadline, PageHeadlineSpace } from '../components/PageHeadline'
import Container from '../components/Container'
import { SectionWrap } from '../components/SectionWrap'
import { FeaturedFour } from '../components/FeaturedFour'

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
                <PageHeadline>
                  {landingPage.pageHeadline}
                </PageHeadline>
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
