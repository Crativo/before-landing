import React, { Fragment, Component } from 'react'
import { graphql } from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Container from '../components/Container'
import { SectionWrap } from '../components/SectionWrap'
import styled from 'styled-components'
import theme from '../styles/theme'

const AboutHeadline = styled.h2`
  font-size: 8rem;
  letter-spacing: -0.08rem;
  line-height: 8.8rem;
  max-width: 89.4rem;
  margin-top: 20rem;
  margin-bottom: 20rem;
`

const TeamSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20rem;
`

const TeamItem = styled.div`
  width: 25%;
  margin-bottom: 6rem;
  margin-right: 3rem;
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

const TeamItemName = styled.div`
  
`

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
            <AboutHeadline>
              A small collective of international designers who share the same city.
            </AboutHeadline>

            <TeamSection>
              <TeamItem>
                <TeamItemPic />
                <TeamItemDetails>
                  <TeamItemName>Jeff Gee</TeamItemName>
                  <Splitter>&nbsp;/&nbsp;</Splitter>
                  <TeamItemJob>Art Direction</TeamItemJob>
                </TeamItemDetails>
              </TeamItem>

              <TeamItem>
                <TeamItemPic />
                <TeamItemDetails>
                  <TeamItemName>Michal Ivanecký</TeamItemName>
                  <Splitter>&nbsp;/&nbsp;</Splitter>
                  <TeamItemJob>Visual Design</TeamItemJob>
                </TeamItemDetails>
              </TeamItem>

              <TeamItem>
                <TeamItemPic />
                <TeamItemDetails>
                  <TeamItemName>Miroslav Priščák</TeamItemName>
                  <Splitter>&nbsp;/&nbsp;</Splitter>
                  <TeamItemJob>Content Strategist</TeamItemJob>
                </TeamItemDetails>
              </TeamItem>

              <TeamItem>
                <TeamItemPic />
                <TeamItemDetails>
                  <TeamItemName>Ondrej Solčány</TeamItemName>
                  <Splitter>&nbsp;/&nbsp;</Splitter>
                  <TeamItemJob>Motion Design</TeamItemJob>
                </TeamItemDetails>
              </TeamItem>

              <TeamItem>
                <TeamItemPic />
                <TeamItemDetails>
                  <TeamItemName>Wouter Kooij</TeamItemName>
                  <Splitter>&nbsp;/&nbsp;</Splitter>
                  <TeamItemJob>Webflow Development</TeamItemJob>
                </TeamItemDetails>
              </TeamItem>

              <TeamItem>
                <TeamItemPic />
                <TeamItemDetails>
                  <TeamItemName>Viktor Goliáš</TeamItemName>
                  <Splitter>&nbsp;/&nbsp;</Splitter>
                  <TeamItemJob>UX Design</TeamItemJob>
                </TeamItemDetails>
              </TeamItem>

              <TeamItem>
                <TeamItemPic />
                <TeamItemDetails>
                  <TeamItemName>Iveta Beranová</TeamItemName>
                  <Splitter>&nbsp;/&nbsp;</Splitter>
                  <TeamItemJob>Copywriter</TeamItemJob>
                </TeamItemDetails>
              </TeamItem>
            </TeamSection>
          </SectionWrap>
        </Container>
        <Footer />
      </Fragment>
    )
  }
}

export default About
