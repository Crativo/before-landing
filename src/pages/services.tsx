import React, { Fragment, Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Fade from 'react-reveal/Fade'
import Container from '../components/Container'
import { SectionWrap } from '../components/SectionWrap'
import styled, { css } from 'styled-components'
import theme from '../styles/theme'
import { PageHeadline } from '../components/PageHeadline'
import { mq } from '../styles/media'
import { graphql } from 'gatsby'
import { standardText } from '../styles/text'

const ProvidedServices = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 2rem;

  ${mq.tablet} {
    margin-bottom: 10rem;
  }

  ${mq.desktop} {
  }
`

const ServiceItem = styled.div`
  ${standardText}
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  min-width: 20rem;
  margin-bottom: 2rem;
  margin-right: 1.6rem;

  ${mq.tablet} {
    min-width: auto;
    margin-right: 3rem;
  }
`



const ServiceTitle = styled.h3`
  ${standardText}
`

const ServiceDetails = styled.div`
  ${standardText}
  color: ${theme.colors.black};
`

const ProcessSection = styled.div`
  background: ${theme.colors.primary};
  padding: 8rem 0;
`

const CreativeProcessText = styled.h3`
  font-size: 4rem;
  line-height: 4rem;
  color: ${theme.colors.white};
  margin-top: 0;
  margin-bottom: 10rem;

  ${mq.tablet} {
    letter-spacing: -0.056rem;
    line-height: 6.4rem;
    font-size: 5.6rem;
  }

  ${mq.tabletWide} {
    letter-spacing: -0.056rem;
    line-height: 6.4rem;
    font-size: 5.6rem;
  }

  ${mq.desktop} {
    letter-spacing: -0.07rem;
    line-height: 7.8rem;
    font-size: 7rem;
  }

  ${mq.desktopWide} {
    letter-spacing: -0.08rem;
    line-height: 8.8rem;
    font-size: 8rem;
  }
`

const ProcessItem = styled.div`
  display: flex;
  max-width: 35rem;
  margin-bottom: 1rem;

  ${mq.desktop} {
    margin-bottom: 4rem;
  }
`

const ProcessInfo = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 2rem;
  line-height: 2.8rem;
  margin-top: 0.8rem;
  margin-left: 1.8rem;
`

const ProcessItemNumber = styled.div`
  font-size: 6.5rem;
  line-height: 6.5rem;
  padding: none;
  margin: none;
  color: ${theme.colors.white};

  ${mq.tablet} {
    /* font-size: 14.6rem; */
    /* line-height: 20rem; */
  }
`

const ProcessItemTitle = styled.div`
  color: ${theme.colors.white};
  /* font-size: 3.2rem; */
  /* margin-bottom: 0.5rem; */
`

const ProcessItemDetails = styled.div`
  color: ${theme.colors.primaryLight};
  /* font-size: 3rem; */
  /* line-height: 4rem; */
  margin-bottom: 3rem;
`

const CreativeRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 7rem;

  ${mq.tabletWide} {
    flex-direction: row;
    justify-content: space-between;
  }
`

const CreativeLeft = styled.div`
  max-width: 50rem;

  ${mq.tablet} {
    max-width: 60rem;
  }

  ${mq.desktop} {
    max-width: 80rem;
  }
`

const CreativeRight = styled.div`
  ${mq.tabletWide} {
    padding-left: 5rem;
  }

  ${mq.desktop} {
    padding-left: 10rem;
  }
`

class Services extends Component<{ data: any }> {
  render() {
    return (
      <Fragment>
        <Header />
        <Container>
          <SectionWrap>
            <Fade bottom>
              <PageHeadline>
                Simplified communication and intuitive controls, before anything
                else.
              </PageHeadline>
            </Fade>

            <ProvidedServices>
              <Fade bottom>
                <ServiceItem>
                  <ServiceTitle>Branding</ServiceTitle>
                  <ServiceDetails>Naming</ServiceDetails>
                  <ServiceDetails>Visual Identity</ServiceDetails>
                  <ServiceDetails>Brand Strategy</ServiceDetails>
                </ServiceItem>
              </Fade>

              <Fade bottom>
                <ServiceItem>
                  <ServiceTitle>Motion</ServiceTitle>
                  <ServiceDetails>Explainer</ServiceDetails>
                  <ServiceDetails>Presentation</ServiceDetails>
                  <ServiceDetails>Infographics</ServiceDetails>
                </ServiceItem>
              </Fade>

              <Fade bottom>
                <ServiceItem>
                  <ServiceTitle>Interactive</ServiceTitle>
                  <ServiceDetails>Website / Eshop</ServiceDetails>
                  <ServiceDetails>Mobile / Web App</ServiceDetails>
                  <ServiceDetails>Game</ServiceDetails>
                </ServiceItem>
              </Fade>

              <Fade bottom>
                <ServiceItem>
                  <ServiceTitle>Photography</ServiceTitle>
                  <ServiceDetails>Product</ServiceDetails>
                  <ServiceDetails>Lifestyle</ServiceDetails>
                  <ServiceDetails>Food</ServiceDetails>
                </ServiceItem>
              </Fade>
            </ProvidedServices>
          </SectionWrap>
        </Container>

        <ProcessSection>
          <Container>
            <SectionWrap>
              <CreativeRow>
                <CreativeLeft>
                  <Fade bottom>
                    <CreativeProcessText>
                      Following process to make sure we deliver design that
                      actually serves you
                    </CreativeProcessText>
                  </Fade>
                </CreativeLeft>
                <CreativeRight>
                  <Fade bottom>
                    <ProcessItem>
                      <ProcessItemNumber>1</ProcessItemNumber>
                      <ProcessInfo>
                        <ProcessItemTitle>Understand</ProcessItemTitle>
                        <ProcessItemDetails>
                          We dive deep into the problem we're trynig to solve
                          and we define it.
                        </ProcessItemDetails>
                      </ProcessInfo>
                    </ProcessItem>

                    <ProcessItem>
                      <ProcessItemNumber>2</ProcessItemNumber>
                      <ProcessInfo>
                        <ProcessItemTitle>Strategize</ProcessItemTitle>
                        <ProcessItemDetails>
                          We set a key message, structure of information and
                          strategy to achieve understanding.
                        </ProcessItemDetails>
                      </ProcessInfo>
                    </ProcessItem>

                    <ProcessItem>
                      <ProcessItemNumber>3</ProcessItemNumber>
                      <ProcessInfo>
                        <ProcessItemTitle>Concept</ProcessItemTitle>
                        <ProcessItemDetails>
                          We prepare a visual concept to make sure we're on the
                          same page.
                        </ProcessItemDetails>
                      </ProcessInfo>
                    </ProcessItem>

                    <ProcessItem>
                      <ProcessItemNumber>4</ProcessItemNumber>
                      <ProcessInfo>
                        <ProcessItemTitle>Design</ProcessItemTitle>
                        <ProcessItemDetails>
                          After we agreed on a concept and strategy, we proceed
                          to make it all happen.
                        </ProcessItemDetails>
                      </ProcessInfo>
                    </ProcessItem>
                  </Fade>
                </CreativeRight>
              </CreativeRow>
            </SectionWrap>
          </Container>
        </ProcessSection>
        <Footer />
      </Fragment>
    )
  }
}

export const query = graphql`
  query ServicesQuery {
    landingPage: allPagesJson(filter: { pageName: { eq: "services" } }) {
      edges {
        node {
          id
          pageHeadline
        }
      }
    }
  }
`

export default Services
