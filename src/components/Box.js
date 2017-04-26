import { PropTypes } from 'react'
import styled from 'styled-components'

const Box = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: ${ props => props.width ? props.width * 100 : 100 }%;
  padding: 0 32px;
  text-align: ${ props => props.align || 'left'};
  margin: ${ props => props.margin || 0 }
`

Box.contextTypes = {
  clientWidth: PropTypes.number.isRequired,
  clientHeight: PropTypes.number.isRequired,
};

export default Box
