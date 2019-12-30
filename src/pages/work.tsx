import React, { Fragment, Component } from 'react'
import { graphql } from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Container from '../components/Container'
import { SectionWrap } from '../components/SectionWrap'
import { FeaturedFour } from '../components/LandingPage/FeaturedFour'

class Work extends Component<{ data: any }> {
  render() {
    const caseStudies = this.props.data.caseStudies.nodes
    console.log(caseStudies)
    const workPage = this.props.data.work.edges[0]

    return (
      <Fragment>
        <Header />
        <Container>
          <SectionWrap>
            <FeaturedFour caseStudies={caseStudies} />
          </SectionWrap>
        </Container>
        <Footer />
      </Fragment>
    )
  }
}

export const query = graphql`
  query WorkQuery {
    caseStudies: allCaseStudiesJson {
      nodes {
        id
        brandName
        workType
        parent {
          ... on File {
            id
            name
          }
        }
      }
    }
    work: allPagesJson(filter: {pageName: {eq: "work"}}) {
      edges {
        node {
          id
          pageHeadline
        }
      }
    }
  }
`

export default Work
