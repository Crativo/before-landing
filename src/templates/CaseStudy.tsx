import React, { Fragment, Component } from 'react'
import { graphql } from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Container from '../components/Container'
import { SectionWrap } from '../components/SectionWrap'
import { FeaturedFour } from '../components/LandingPage/FeaturedFour'

class CaseStudy extends Component<{ pageContext: any }> {
  render() {
    const caseStudy = this.props.pageContext.node
    console.log(this.props.pageContext.node);
    
    // const caseStudy = this.props.data.caseStudy.edges[0].node
    return (
      <Fragment>
        <Header />
        <Container>
          <SectionWrap>
            {caseStudy.brandName}
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
