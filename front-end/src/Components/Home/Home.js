import React from 'react'
import HomeCards from '../HomeCards/HomeCards'
import '../../Styles/Home/Home.css'
import Scroll from '../Scroller/Scroller'

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className='home__container__one'>
          <div className='organizer__one'>
          <h4>WELCOME</h4>
          <Scroll/>
          </div>
        </div>
        <div className='home__container__two'>
          <HomeCards/>
        </div>
      </div>
    )
  }
}
export default Home
