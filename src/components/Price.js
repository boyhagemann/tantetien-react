import React from 'react'
import styled from 'styled-components'

const format = value => {
  return '&euro; ' + value + ',-'
}

const fontSize = (props) => {
  return props.theme.price.size
}

const Price = styled.h2`
  color: ${ props => props.theme.color[props.color] || props.theme.color.default };
  font-size: ${ fontSize }px;
  line-height: ${ fontSize }px;
  font-weight: normal;
  text-shadow: 0 0 20px rgba(0,0,0,.8);
`

export default ({ value }) => (
  <Price>{ format(value) }}</Price>
)
