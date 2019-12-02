import React, { Fragment, Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Container from '../components/Container'
import { SectionWrap } from '../components/SectionWrap'
import styled from 'styled-components'
import theme from '../styles/theme'
import { PageHeadline } from '../components/PageHeadline'
import { mq } from '../styles/media'

const ProvidedServices = styled.div`
  display: flex;
  flex-direction: column;

  ${mq.tablet} {
    flex-direction: row;
    margin-bottom: 20rem;
  }
`

const ServiceItem = styled.div`
  ${mq.desktop} {
    width: 25%;
    margin-right: 10rem;
  }
`

const ServiceTitle = styled.h3`
  font-size: 3rem;
  margin-bottom: 1rem;

  ${mq.desktop} {
    font-size: 4rem;
    letter-spacing: -0.04rem;
    line-height: 5.6rem;
  }
`

const ServiceDetails = styled.div`
  font-size: 2rem;
  line-height: 3.2rem;

  ${mq.desktop} {
    font-size: 2rem;
  }
`

const ProcessSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8rem;

  ${mq.tablet} {
    flex-direction: row;
    margin-bottom: 20rem;
  }
`

const ProcessSectionLeft = styled.div`
  font-size: 8rem;
  letter-spacing: -0.08rem;
  line-height: 8.8rem;

  ${mq.tablet} {
    width: 50%;
  }
`

const ProcessSectionRight = styled.div`
  ${mq.tablet} {
    width: 50%;
  }
`

const ProcessItem = styled.div`
  margin-bottom: 1rem;

  ${mq.tablet} {
    margin-bottom: 2rem;
  }
  
  ${mq.desktop} {
    margin-bottom: 4rem;
  }
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
            <PageHeadline>
              Simplified communication and intuitive controls, before anything else.
            </PageHeadline>

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
                <PageHeadline>
                  A problem well stated is a problem half-solved.
                </PageHeadline>
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
