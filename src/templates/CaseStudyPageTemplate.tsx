import React, { Fragment, Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CaseStudyTemplate from './CaseStudyTemplate'

class CaseStudyPageTemplate extends Component<{ pageContext: any}> {
  render() {
    const caseStudy = this.props.pageContext.node

    return (
      <Fragment>
        <Header />
          <CaseStudyTemplate caseStudy={caseStudy} />
        <Footer />
      </Fragment>
    )
  }
}

export default CaseStudyPageTemplate
