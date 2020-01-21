import React, { Fragment, Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Fade from 'react-reveal/Fade'
import Container from '../components/Container'
import { SectionWrap } from '../components/SectionWrap'
import styled from 'styled-components'
import theme from '../styles/theme'
import { PageHeadline } from '../components/PageHeadline'
import { mq } from '../styles/media'

const ProvidedServices = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  ${mq.tablet} {
  }

  ${mq.desktop} {
    /* flex-direction: row;
    flex-wrap: nowrap;
    margin-bottom: 20rem; */
  }
`

const ServiceItem = styled.div`
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
/* 

  ${mq.desktop} {
    flex: 1 0 20%;
  } */
`

const ServiceTitle = styled.h3`

  margin-bottom: 1rem;


    font-size: 3rem;
    letter-spacing: -0.03rem;
    line-height: 4rem;

  ${mq.desktop} {
    font-size: 4rem;
    letter-spacing: -0.04rem;
    line-height: 5.6rem;
  }
`

const ServiceDetails = styled.div`
  font-size: 1.6rem;
  line-height: 3.2rem;

  ${mq.desktop} {
    font-size: 2rem;
  }
`

const ProcessSection = styled.div`
  /* width: 100%;
  max-width: 150rem; */
  /* margin: 0 auto; */
  /* display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 8rem;

  ${mq.desktop} {
    flex-direction: row;
    margin-bottom: 20rem;
  } */
`

const CreativeProcessText = styled.h3`
  font-size: 8rem;
  letter-spacing: -0.08rem;
  line-height: 8.8rem;
  color: ${theme.colors.primary};
`

const ProcessSectionDetails = styled.div`
  background: ${theme.colors.primary};
  padding: 16rem 0;
`

const ProcessItem = styled.div`
  max-width: 35rem;
  margin-bottom: 1rem;

  ${mq.desktop} {
    margin-bottom: 4rem;
  }
`

const ProcessItemNumber = styled.div`
  color: ${theme.colors.white};
  ${mq.tablet} {
    font-size: 14.6rem;
    line-height: 20rem;
  }
`

const ProcessItemTitle = styled.div`
  color: ${theme.colors.white};
  font-size: 3.2rem;
  margin-bottom: 0.5rem;
`

const ProcessItemDetails = styled.div`
  color: ${theme.colors.primaryLight};
  font-size: 3.2rem;
  line-height: 4.4rem;
  margin-bottom: 3rem;
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
              <Fade bottom>
                <CreativeProcessText>
                  Creative process we follow
                </CreativeProcessText>
              </Fade>
            </SectionWrap>
          </Container>

          <ProcessSectionDetails>
            <Container>
              <SectionWrap>
                <Fade bottom>
                  <ProcessItem>
                    <ProcessItemNumber>1</ProcessItemNumber>
                    <ProcessItemTitle>Understand</ProcessItemTitle>
                    <ProcessItemDetails>
                      We dive deep into the problem we're trynig to solve and we
                      define it.
                    </ProcessItemDetails>
                  </ProcessItem>
                </Fade>

                <Fade bottom>
                  <ProcessItem>
                    <ProcessItemNumber>2</ProcessItemNumber>
                    <ProcessItemTitle>Strategize</ProcessItemTitle>
                    <ProcessItemDetails>
                      We set a key message, structure of information and
                      strategy to achieve understanding.
                    </ProcessItemDetails>
                  </ProcessItem>
                </Fade>

                <Fade bottom>
                  <ProcessItem>
                    <ProcessItemNumber>3</ProcessItemNumber>
                    <ProcessItemTitle>Concept</ProcessItemTitle>
                    <ProcessItemDetails>
                      We prepare a visual concept to make sure we're on the same
                      page.
                    </ProcessItemDetails>
                  </ProcessItem>
                </Fade>

                <Fade bottom>
                  <ProcessItem>
                    <ProcessItemNumber>4</ProcessItemNumber>
                    <ProcessItemTitle>Design</ProcessItemTitle>
                    <ProcessItemDetails>
                      After we agreed on a concept and strategy, we proceed to
                      make it all happen.
                    </ProcessItemDetails>
                  </ProcessItem>
                </Fade>
              </SectionWrap>
            </Container>
          </ProcessSectionDetails>
        </ProcessSection>
        <Footer />
      </Fragment>
    )
  }
}

export default Services
