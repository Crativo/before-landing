import React, { Fragment, Component } from 'react'
import { graphql } from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Container from '../components/Container'
import { SectionWrap } from '../components/SectionWrap'
import styled from 'styled-components'
import theme from '../styles/theme'
import { PageHeadline } from '../components/PageHeadline'
import { mq } from '../styles/media'

const TeamItemWrap = styled.div`
  margin-bottom: 6rem;
`

const TeamItem = styled.div`
  margin-bottom: 6rem;
`

const TeamSection = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 10px;
  margin-bottom: 20rem;

  ${mq.tablet} {
    grid-template-columns: 50% 50%;
  }

  ${mq.desktop} {
    grid-template-columns: 25% 25% 25% 25%;
  }
`

const TeamItemPic = styled.div`
  background: ${theme.colors.grey};
  width: 100%;
  height: 400px;
`

const TeamItemDetails = styled.div`
  display: flex;
  font-size: 2rem;
  line-height: 2.4rem;
  margin-top: 2.4rem;
`

const Splitter = styled.div`
  color: ${theme.colors.darkerGrey};
`

const TeamItemName = styled.div``

const TeamItemJob = styled.div`
  color: ${theme.colors.darkerGrey};
`

class About extends Component<{ data: any }> {
  render() {
    return (
      <Fragment>
        <Header />
        <Container>
          <SectionWrap>
            <PageHeadline>
              A small collective of international designers who share the same
              city.
            </PageHeadline>

            <TeamSection>
              <TeamItemWrap>
                <TeamItem>
                  <TeamItemPic />
                  <TeamItemDetails>
                    <TeamItemName>Jeff Gee</TeamItemName>
                    <Splitter>&nbsp;/&nbsp;</Splitter>
                    <TeamItemJob>Art Direction</TeamItemJob>
                  </TeamItemDetails>
                </TeamItem>
              </TeamItemWrap>

              <TeamItemWrap>
                <TeamItem>
                  <TeamItemPic />
                  <TeamItemDetails>
                    <TeamItemName>Michal Ivanecký</TeamItemName>
                    <Splitter>&nbsp;/&nbsp;</Splitter>
                    <TeamItemJob>Visual Design</TeamItemJob>
                  </TeamItemDetails>
                </TeamItem>
              </TeamItemWrap>

              <TeamItemWrap>
                <TeamItem>
                  <TeamItemPic />
                  <TeamItemDetails>
                    <TeamItemName>Miroslav Priščák</TeamItemName>
                    <Splitter>&nbsp;/&nbsp;</Splitter>
                    <TeamItemJob>Content Strategist</TeamItemJob>
                  </TeamItemDetails>
                </TeamItem>
              </TeamItemWrap>

              <TeamItemWrap>
                <TeamItem>
                  <TeamItemPic />
                  <TeamItemDetails>
                    <TeamItemName>Ondrej Solčány</TeamItemName>
                    <Splitter>&nbsp;/&nbsp;</Splitter>
                    <TeamItemJob>Motion Design</TeamItemJob>
                  </TeamItemDetails>
                </TeamItem>
              </TeamItemWrap>

              <TeamItemWrap>
                <TeamItem>
                  <TeamItemPic />
                  <TeamItemDetails>
                    <TeamItemName>Wouter Kooij</TeamItemName>
                    <Splitter>&nbsp;/&nbsp;</Splitter>
                    <TeamItemJob>Webflow Development</TeamItemJob>
                  </TeamItemDetails>
                </TeamItem>
              </TeamItemWrap>

              <TeamItemWrap>
                <TeamItem>
                  <TeamItemPic />
                  <TeamItemDetails>
                    <TeamItemName>Viktor Goliáš</TeamItemName>
                    <Splitter>&nbsp;/&nbsp;</Splitter>
                    <TeamItemJob>UX Design</TeamItemJob>
                  </TeamItemDetails>
                </TeamItem>
              </TeamItemWrap>

              <TeamItemWrap>
                <TeamItem>
                  <TeamItemPic />
                  <TeamItemDetails>
                    <TeamItemName>Iveta Beranová</TeamItemName>
                    <Splitter>&nbsp;/&nbsp;</Splitter>
                    <TeamItemJob>Copywriter</TeamItemJob>
                  </TeamItemDetails>
                </TeamItem>
              </TeamItemWrap>
            </TeamSection>
          </SectionWrap>
        </Container>
        <Footer />
      </Fragment>
    )
  }
}

export const query = graphql`
  query AboutQuery {
    about: allPagesJson(filter: {pageName: {eq: "about"}}) {
      edges {
        node {
          id
          pageHeadline
          people {
            name
            position
          }
        }
      }
    }
  }
`

export default About
