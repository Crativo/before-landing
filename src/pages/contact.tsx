import React, { Fragment, Component } from 'react'
import Fade from 'react-reveal/Fade'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Container from '../components/Container'
import { SectionWrap } from '../components/SectionWrap'
import styled from 'styled-components'
import theme from '../styles/theme'
import { PageHeadline } from '../components/PageHeadline'

const CardList = styled.div`
  display: flex;
  margin-bottom: 20rem;
`

const CardItem = styled.div`
  margin-right: 10rem;
`

const CardTitle = styled.h3`
  font-size: 3.2rem;
`

const CardInfo = styled.div`
  font-size: 2rem;
  line-height: 3.2rem;
  color: ${theme.colors.darkerGrey};
`

class Contact extends Component<{ data: any }> {
  render() {
    return (
      <Fragment>
        <Header />
        <Container>
          <SectionWrap>
            <Fade bottom>
              <PageHeadline>
                Contact us if your business can't afford being misunderstood. We'll ensure that won't happen.
              </PageHeadline>
            </Fade>

            <CardList>
              <Fade bottom delay={700}>
                <CardItem>
                  <CardTitle>Contact person</CardTitle>
                  <CardInfo>
                    <div>Michal Ivanecký</div>
                    <div>+ 420 601 097 043</div>
                    <div>michal@before.cz</div>
                  </CardInfo>
                </CardItem>
              </Fade>

              <Fade bottom delay={1000}>
                <CardItem>
                  <CardTitle>Headquarters</CardTitle>
                  <CardInfo>
                    <div>Slavíkova 1611/5</div>
                    <div>120 00 Vinohrady</div>
                    <div>Prague, Czech Republic</div>
                  </CardInfo>
                </CardItem>
              </Fade>

              <Fade bottom>
                <CardItem>
                  <CardTitle>Company details</CardTitle>
                  <CardInfo>
                    <div>Chopsticks s.r.o.</div>
                    <div>IC: 03604080</div>
                    <div>DIC: CZ03604080</div>
                  </CardInfo>
                </CardItem>
              </Fade>
            </CardList>
          </SectionWrap>
        </Container>
        <Footer />
      </Fragment>
    )
  }
}

export default Contact
