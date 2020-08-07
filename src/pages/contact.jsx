import React, { Fragment, Component } from 'react'
import Fade from '../components/Fade'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Container from '../components/Container'
import { SectionWrap } from '../components/SectionWrap'
import styled from 'styled-components'
import theme from '../styles/theme'
import { PageHeadline } from '../components/PageHeadline'
import { mq } from '../styles/media'
import { standardText, standardTextLG } from '../styles/text'

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  justify-content: space-between;
  width: 100%;

  ${mq.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

const CardItem = styled.div`
  margin-bottom: 4rem;

  ${mq.tablet} {
    width: 33%;
    margin-bottom: 4;
  }
`

const CardTitle = styled.h3`
  ${standardTextLG}
  margin: 0;

  ${mq.tablet} {
    margin-right: 4rem;
  }

  ${mq.desktop} {
    margin-right: 4rem;
  }
`

const CardInfo = styled.div`
  ${standardTextLG}
  color: ${theme.colors.darkerGrey};

  ${mq.tablet} {
    margin-right: 4rem;
  }

  ${mq.desktop} {
    margin-right: 4rem;
  }
`

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Container>
          <SectionWrap>
            <Fade>
              <PageHeadline>
                Contact us if your business can't afford being misunderstood.
              </PageHeadline>
            </Fade>

              <Fade>
            <CardList>
                <CardItem>
                  <CardTitle>Contact Info</CardTitle>
                  <CardInfo>
                    <div>Michal Ivanecký</div>
                    <div>+ 420 601 097 043</div>
                    <div>michal@before.cz</div>
                  </CardInfo>
                </CardItem>

                <CardItem>
                  <CardTitle>Prague Office</CardTitle>
                  <CardInfo>
                    <div>Slavíkova 1611/5</div>
                    <div>120 00 Vinohrady</div>
                    <div>Prague, Czech Republic</div>
                  </CardInfo>
                </CardItem>



                <CardItem>
                  <CardTitle>Company Details</CardTitle>
                  <CardInfo>
                    <div>Chopsticks s.r.o.</div>
                    <div>IC: 03604080</div>
                    <div>DIC: CZ03604080</div>
                  </CardInfo>
                </CardItem>
            </CardList>
              </Fade>
          </SectionWrap>
        </Container>
        <Footer />
      </Fragment>
    )
  }
}

export default Contact
