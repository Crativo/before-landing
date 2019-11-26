import React, { Fragment, Component } from 'react'
import { graphql } from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Container from '../components/Container'
import { SectionWrap } from '../components/SectionWrap'
import { FeaturedFour } from '../components/LandingPage/FeaturedFour'

class Work extends Component<{ data: any }> {
  render() {
    const { caseStudies } = this.props.data.work.edges[0].node

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
    work: allPagesJson(filter: {pageName: {eq: "work"}}) {
      edges {
        node {
          id
          title
          caseStudies {
            brandName
            workType
          }
        }
      }
    }
  }
`

export default Work
