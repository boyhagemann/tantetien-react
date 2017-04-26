import React from 'react'
import styled from 'styled-components'

import Centered from './Centered'

const Content = styled.div`
  width: 100%;
  position: relative;
  padding: ${ props => props.theme.content.padding || 0 }
`
export default ({ children }) => (
  <Content>
    <Centered>
      { children }
    </Centered>
  </Content>
)
