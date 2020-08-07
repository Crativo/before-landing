import React, { Fragment, Component } from 'react'
import { graphql } from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Container from '../components/Container'
import { SectionWrap } from '../components/SectionWrap'
import { FeaturedFour } from '../components/FeaturedFour'

class Work extends Component {
  render() {
    const caseStudies = this.props.data.caseStudies.nodes

    const sortedCaseStudies = caseStudies
      .sort(function(a, b) {
        return a.position - b.bosition
      })

    return (
      <Fragment>
        <Header />
        <Container>
          <SectionWrap>
            <FeaturedFour caseStudies={sortedCaseStudies} />
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
        position
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
    work: allPagesJson(filter: { pageName: { eq: "work" } }) {
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
