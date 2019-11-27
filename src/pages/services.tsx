import React, { Fragment, Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Container from '../components/Container'
import { SectionWrap } from '../components/SectionWrap'
import styled from 'styled-components'
import theme from '../styles/theme'

const ServicesHeadline = styled.h2`
  font-size: 8rem;
  letter-spacing: -0.08rem;
  line-height: 8.8rem;
  max-width: 96.3rem;
  margin-top: 20rem;
  margin-bottom: 20rem;
`

const ProvidedServices = styled.div`
  display: flex;
  margin-bottom: 20rem;
`

const ServiceItem = styled.div`
  margin-right: 10rem;
`

const ServiceTitle = styled.div`
  font-size: 4rem;
  letter-spacing: -0.04rem;
  line-height: 5.6rem;
`

const ServiceDetails = styled.div`
  font-size: 2rem;
  line-height: 3.2rem;
`

const ProcessSection = styled.div`
  display: flex;
  margin-bottom: 20rem;
`

const ProcessSectionLeft = styled.h2`
  font-size: 8rem;
  letter-spacing: -0.08rem;
  line-height: 8.8rem;
  width: 50%;
`

const ProcessSectionRight = styled.div`
  width: 50%;
`

const ProcessItem = styled.div`
  margin-bottom: 4rem;
`

const ProcessItemTitle = styled.div`
  font-size: 3.2rem;
  margin-bottom: 3rem;
`

const ProcessItemDetails = styled.ul`
  font-size: 2rem;
  line-height: 4rem;
  margin-bottom: 3rem;
  color: ${theme.colors.darkerGrey};
`

class Services extends Component<{ data: any }> {
  render() {
    return (
      <Fragment>
        <Header />
        <Container>
          <SectionWrap>
            <ServicesHeadline>
              Simplified communication and intuitive controls, before anything else.
            </ServicesHeadline>

            <ProvidedServices>
              <ServiceItem>
                <ServiceTitle>Branding</ServiceTitle>
                <ServiceDetails>Naming</ServiceDetails>
                <ServiceDetails>Visual Identity</ServiceDetails>
                <ServiceDetails>Brand Strategy</ServiceDetails>
              </ServiceItem>
              <ServiceItem>
                <ServiceTitle>Motion</ServiceTitle>
                <ServiceDetails>Explainer</ServiceDetails>
                <ServiceDetails>Presentation</ServiceDetails>
                <ServiceDetails>Infographics</ServiceDetails>
              </ServiceItem>
              <ServiceItem>
                <ServiceTitle>Interactive</ServiceTitle>
                <ServiceDetails>Website / Eshop</ServiceDetails>
                <ServiceDetails>Mobile / Web App</ServiceDetails>
                <ServiceDetails>Game</ServiceDetails>
              </ServiceItem>
              <ServiceItem>
                <ServiceTitle>Photography</ServiceTitle>
                <ServiceDetails>Product</ServiceDetails>
                <ServiceDetails>Lifestyle</ServiceDetails>
                <ServiceDetails>Food</ServiceDetails>
              </ServiceItem>
            </ProvidedServices>

            <ProcessSection>
              <ProcessSectionLeft>
                A problem well stated is a problem half-solved.
              </ProcessSectionLeft>

              <ProcessSectionRight>
                <ProcessItem>
                  <ProcessItemTitle>1. Understand & Define</ProcessItemTitle>
                  <ProcessItemDetails>
                    <li>Communication / usability audit</li>
                    <li>Define a problem</li>
                    <li>Research (market & client)</li>
                    <li>Final problem statement</li>
                  </ProcessItemDetails>
                </ProcessItem>
                <ProcessItem>
                  <ProcessItemTitle>2. Strategize</ProcessItemTitle>
                  <ProcessItemDetails>
                    <li>Establishing messages</li>
                    <li>Structuring information</li>
                    <li>Prototyping wireframes</li>
                  </ProcessItemDetails>
                </ProcessItem>
                <ProcessItem>
                  <ProcessItemTitle>3. Design & Evaluate</ProcessItemTitle>
                  <ProcessItemDetails>
                    <li>Visual draft</li>
                    <li>Full visual design</li>
                    <li>Simplifying</li>
                  </ProcessItemDetails>
                </ProcessItem>
              </ProcessSectionRight>
            </ProcessSection>
          </SectionWrap>
        </Container>
        <Footer />
      </Fragment>
    )
  }
}

export default Services
