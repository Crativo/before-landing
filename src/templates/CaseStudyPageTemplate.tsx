import React, { Fragment, Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CaseStudyTemplate from './CaseStudyTemplate'
import styled from 'styled-components'

const StyledCaseStudyTemplate = styled.div`
  margin-bottom: 12rem;
` 

class CaseStudyPageTemplate extends Component<{ pageContext: any}> {
  render() {
    const caseStudy = this.props.pageContext.node

    return (
      <Fragment>
        <Header />
          <StyledCaseStudyTemplate><CaseStudyTemplate caseStudy={caseStudy} /></StyledCaseStudyTemplate>
        <Footer />
      </Fragment>
    )
  }
}

export default CaseStudyPageTemplate
