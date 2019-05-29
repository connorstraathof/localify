import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import '../../Styles/Scroller/Scroller.css'

class Scroll extends React.Component {
  render() {
    return (
      <div className='scroll__container'>
        <button onClick={() => scroll.scrollMore(700)} className='suggestions'>
          SUGGESTIONS
        </button>
        <button onClick={() => scroll.scrollMore(1600)} className='suggestions'>
          MAP
        </button>
      </div>
    )
  }
}

export default Scroll
