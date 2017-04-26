import React, { Component, PropTypes } from 'react'

class Scroll extends Component
{
  constructor(props) {
      super(props)

      this.state = {
        scrollTop: document.body.scrollTop,
        scrollHeight: document.body.clientHeight,
      }

      this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { scrollTop, scrollHeight } = event.srcElement.body

    this.setState({ scrollTop, scrollHeight })

    console.log(this.state.scrollTop)
  }

  getChildContext() {
    return this.state
  }

  render() {
    return  <div>{ this.props.children }</div>
  }
}

Scroll.childContextTypes = {
  scrollTop: PropTypes.number,
  scrollHeight: PropTypes.number,
}

export default Scroll
