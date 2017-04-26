import React, { Component, PropTypes } from 'react'

class Responsive extends Component
{
  constructor(props) {
      super(props)

      this.state = {
        clientWidth: window.innerWidth,
        clientHeight: window.innerHeight,
      }

      this.handleResize = this.handleResize.bind(this)
  }

  handleResize(event) {
    const window = event.srcElement.window

        this.setState({
          clientWidth: window.innerWidth,
          clientHeight: window.innerHeight,
        })
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
  }

  getChildContext() {
    return this.state
  }

  render() {
    return <div>{ this.props.children }</div>
  }
}

Responsive.childContextTypes = {
  clientWidth: PropTypes.number,
  clientHeight: PropTypes.number,
};

export default Responsive
