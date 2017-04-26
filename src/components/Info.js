import React from 'react'
import styled from 'styled-components'

import SubHeading from './SubHeading'
import Description from './Description'
import Price from './Price'

const Info = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: ${ props => props.theme.info.width * 100 }%;
  padding: ${ props => props.theme.info.padding };
  margin-top: ${ props => props.theme.info.margin.top }px;
  margin-bottom: ${ props => props.theme.info.margin.bottom }px;
  text-align: center;
  vertical-align: top;
`

const Circle = styled.div`
  display: inline-block;
  box-sizing: border-box;
  font-size: 30px;
  background: ${ props => props.theme.color[props.color] || "#222" };
  border-radius: 100%;
  width: 50px;
  height: 50px;
  line-height: 60px;
  vertical-align: middle;
`

export default ({ icon = null, iconColor, title, color, description, price, alpha = 0.5 }) => {

  return (
  <Info>
    <Circle color={ iconColor }>{ icon }</Circle>
    <SubHeading color={ color }>{ title }</SubHeading>
    <Description alpha={ alpha }>{ description }</Description>
    { price && <Price value={price} /> }
  </Info>
)}
