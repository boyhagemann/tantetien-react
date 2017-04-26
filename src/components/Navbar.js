import React from 'react'
import styled from 'styled-components'

const Company = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 60%;
  padding: ${ props => props.theme.navbar.padding }px;
`

const Heading = styled.h1`
  color: ${ props => props.theme.navbar.title.color };
  font-size: ${ props => props.theme.navbar.title.size }px;
  font-weight: normal;
  margin: 0;
`

const Payoff = styled.h2`
  color: ${ props => props.theme.color.olive };
  font-size: ${ props => props.theme.navbar.payoff.size }px;
  font-weight: normal;
  margin: 0;
`

const Contact = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 40%;
  font-family: ${ props => props.theme.navbar.contact.font };
  font-size: ${ props => props.theme.navbar.contact.size }px;
  padding: ${ props => props.theme.navbar.padding }px;
  text-align: right;
`

const Phone = styled.a`
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  color: ${ props => props.theme.navbar.contact.color };
`

const Email = styled.a`
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  color: ${ props => props.theme.navbar.contact.color };
`

const Container = styled.div`
  background: ${ props => props.theme.navbar.color };
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
`
const Centered = styled.div`
  position: relative;
  max-width: ${ props => props.theme.app.maxWidth }px;
  margin: 0 auto;
`
export default ({ title, payoff }) => (
  <Container>
    <Centered>
      <Company>
        <Heading>{ title }</Heading>
        <Payoff>{ payoff }</Payoff>
      </Company>
      <Contact>
        <Phone>06 100 199 13</Phone>
        <Email>contact@tantetien.nl</Email>
      </Contact>
    </Centered>
  </Container>
)
