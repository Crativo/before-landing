import React, { Fragment, Component } from 'react'
import { graphql } from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Container from '../components/Container'
import { SectionWrap } from '../components/SectionWrap'
import styled from 'styled-components'
import theme from '../styles/theme'

const ContactHeadline = styled.h2`
  font-size: 8rem;
  letter-spacing: -0.08rem;
  line-height: 8.8rem;
  max-width: 122.5rem;
  margin-top: 20rem;
  margin-bottom: 20rem;
`

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
            <ContactHeadline>
              Contact us if your business can't afford being misunderstood. We'll ensure that won't happen.
            </ContactHeadline>

            <CardList>
              <CardItem>
                <CardTitle>Contact person</CardTitle>
                <CardInfo>
                  <div>Michal Ivanecký</div>
                  <div>+ 420 601 097 043</div>
                  <div>michal@before.cz</div>
                </CardInfo>
              </CardItem>

              <CardItem>
                <CardTitle>Headquarters</CardTitle>
                <CardInfo>
                  <div>Slavíkova 1611/5</div>
                  <div>120 00 Vinohrady</div>
                  <div>Prague, Czech Republic</div>
                </CardInfo>
              </CardItem>

              <CardItem>
                <CardTitle>Company details</CardTitle>
                <CardInfo>
                  <div>Chopsticks s.r.o.</div>
                  <div>IC: 03604080</div>
                  <div>DIC: CZ03604080</div>
                </CardInfo>
              </CardItem>
            </CardList>
          </SectionWrap>
        </Container>
        <Footer />
      </Fragment>
    )
  }
}

export default Contact
