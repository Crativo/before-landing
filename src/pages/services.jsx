import React, { Fragment, Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Fade from '../components/Fade'
import Container from '../components/Container'
import { SectionWrap } from '../components/SectionWrap'
import styled from 'styled-components'
import theme from '../styles/theme'
import { PageHeadline } from '../components/PageHeadline'
import { mq } from '../styles/media'
import { graphql } from 'gatsby'
import { standardTextLG } from '../styles/text'

const ProvidedServices = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 4rem;

  ${mq.tablet} {
    margin-bottom: 10rem;
  }

  ${mq.desktop} {
    max-width: 106rem;
  }
`

const ServiceItem = styled.div`
  ${standardTextLG}
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  min-width: 20rem;
  margin-bottom: 3.2rem;
  margin-right: 1.6rem;

  ${mq.tablet} {
    min-width: auto;
    margin-right: 3rem;
  }
`

const ServiceTitle = styled.h3`
  ${standardTextLG}
`

const ServiceDetails = styled.div`
  ${standardTextLG}
  color: ${theme.colors.darkerGrey};
`

const ProcessSection = styled.div`
  background: ${theme.colors.primary};
  padding: 8rem 0;
`

const CreativeProcessText = styled.h3`
  font-size: 4rem;
  font-weight: ${theme.fontWeight.medium};
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
  margin-bottom: 1rem;
  max-width: 35rem;

  ${mq.desktop} {
    max-width: 45rem;
    margin-bottom: 4rem;
  }
`

const ProcessInfo = styled.div`
  ${standardTextLG}
  display: flex;
  flex-direction: column;
  margin-top: 0.8rem;
  margin-left: 1.8rem;
`

const ProcessItemNumber = styled.div`
  font-size: 6.5rem;
  line-height: 6.5rem;
  padding: none;
  margin: none;
  color: ${theme.colors.white};
`

const ProcessItemTitle = styled.div`
  color: ${theme.colors.white};
`

const ProcessItemDetails = styled.div`
  width: 100%;
  color: ${theme.colors.primaryLight};
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
    width: 40rem;
  }
`

class Services extends Component {
  render() {
    const servicesPage = this.props.data.servicesPage.edges[0].node
    return (
      <Fragment>
        <Header />
        <Container>
          <SectionWrap>
            <Fade>
              <PageHeadline>
                Simplified communication and intuitive controls, before anything
                else.
              </PageHeadline>
            </Fade>

            <ProvidedServices>
              {servicesPage.features.map((feature, i) => (
                <Fade key={i}>
                  <ServiceItem>
                    <ServiceTitle>{feature.title}</ServiceTitle>
                    {feature.featureCategories.map((fc, j) => (
                      <ServiceDetails key={j}>{fc.name}</ServiceDetails>
                    ))}
                  </ServiceItem>
                </Fade>
              ))}
            </ProvidedServices>
          </SectionWrap>
        </Container>

        <ProcessSection>
          <Container>
            <SectionWrap>
              <CreativeRow>
                <CreativeLeft>
                  <Fade>
                    <CreativeProcessText>
                      {servicesPage.processHeadline}
                    </CreativeProcessText>
                  </Fade>
                </CreativeLeft>
                <CreativeRight>
                  <Fade>
                    {servicesPage.process.map((p, i) => (
                      <ProcessItem key={i}>
                        <ProcessItemNumber>{i + 1}</ProcessItemNumber>
                        <ProcessInfo>
                          <ProcessItemTitle>{p.processTitle}</ProcessItemTitle>
                          <ProcessItemDetails>
                            {p.processText}
                          </ProcessItemDetails>
                        </ProcessInfo>
                      </ProcessItem>
                    ))}
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
    servicesPage: allPagesJson(filter: { pageName: { eq: "services" } }) {
      edges {
        node {
          id
          pageHeadline
          features {
            title
            featureCategories {
              name
            }
          }
          processHeadline
          process {
            processTitle
            processText
          }
        }
      }
    }
  }
`

export default Services
