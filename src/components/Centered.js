import styled from 'styled-components'

export default styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  ${ props => props.height ? 'min-height: ' + props.height + 'px;' : null }
`
