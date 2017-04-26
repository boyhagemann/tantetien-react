import React from 'react'
import styled from 'styled-components'

const Centered = styled.div`
  width: 100%;
  text-align: center;
`

const Circle = styled.div`
  display: inline-block;
  box-sizing: border-box;
  color: ${ props => props.color || 'white' };
  background-color: ${ props => props.background || 'black' };
  width: ${ props => props.size }px;
  height: ${ props => props.size }px;
  opacity: ${ props => props.alpha || 1 };
  border-radius: 50%;
  padding: 20px;
`

export default (props) => (
  <Centered><Circle {...props} /></Centered>
)
