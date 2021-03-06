import React, { Fragment, Component } from 'react'
import { graphql } from 'gatsby'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import Fade from '../components/Fade'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Container from '../components/Container'
import { SectionWrap } from '../components/SectionWrap'
import styled from 'styled-components'
import theme from '../styles/theme'
import { PageHeadline } from '../components/PageHeadline'
import { mq } from '../styles/media'
import { standardTextLG } from '../styles/text'

const TeamItemWrap = styled.div`
  margin-bottom: 4rem;
`

const TeamItem = styled.div`
`

const TeamSection = styled(TransitionGroup)`
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

const PicParent = styled.div`
  width: 100%;
  max-width: 400px;
`

const StyledImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

const TeamItemDetails = styled.div`
  ${standardTextLG}
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`

const TeamItemName = styled.div``

const TeamItemJob = styled.div`
  color: ${theme.colors.darkerGrey};
`

const TeamItemPic = ({ src }) => (
  <PicParent>
    <StyledImg src={src} />
  </PicParent>
)

class About extends Component {
  render() {
    const people = this.props.data.people.edges
    const aboutPage = this.props.data.aboutPage.edges[0].node

    return (
      <Fragment>
        <Header />
        <Container>
          <SectionWrap>
            <Fade>
              <PageHeadline>
                {aboutPage.pageHeadline}
              </PageHeadline>
            </Fade>

            <TeamSection>
              {people.map((person, index) => (
                <TeamItemWrap key={person.node.id}>
                  <Fade key={index} delay={index * 200}>
                    <TeamItem>
                      <TeamItemPic src={person.node.profileImage} />
                      <TeamItemDetails>
                        <TeamItemName>{person.node.name}</TeamItemName>
                        <TeamItemJob>{person.node.position}</TeamItemJob>
                      </TeamItemDetails>
                    </TeamItem>
                  </Fade>
                </TeamItemWrap>
              ))}
            </TeamSection>
          </SectionWrap>
        </Container>
        <Footer footer={aboutPage.footer} />
      </Fragment>
    )
  }
}

export const query = graphql`
  query AboutQuery {
    aboutPage: allPagesJson(filter: {pageName: {eq: "about"}}) {
      edges {
        node {
          id
          pageHeadline
          footer {
            actionTitle
            actionLink
            actionLinkText
          }
        }
      }
    }
    people: allPeopleJson {
      edges {
        node {
          id
          name
          position
          profileImage
        }
      }
    }
  }
`

export default About
