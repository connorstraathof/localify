import React from 'react'
import { animateScroll as scroll } from 'react-scroll'

class ScrollToTop extends React.Component {
  constructor(props) {
    super(props)
    this.scrollToTop = this.scrollToTop.bind(this)
  }

  scrollToTop() {
    scroll.scrollToTop()
  }
  render() {
    return (
      <div>
        <a onClick={this.scrollToTop}>To the top!</a>
      </div>
    )
  }
}

export default ScrollToTop