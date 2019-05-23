import React from 'react'
import {animateScroll as scroll} from 'react-scroll'

class Scroll extends React.Component {
  
  render() {
    return (
      <div className='scroll__container'>
        <a onClick={() => scroll.scrollMore(800)}>SUGGESTIONS</a>
        <a onClick={() => scroll.scrollMore(1600)}>MAP</a>
      </div>
    )
  }
}

export default Scroll
