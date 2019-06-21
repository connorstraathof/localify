import React from 'react'
import HomeCards from '../Home/HomeCards/HomeCards'
import '../../Styles/Home/Home.css'
import Scroll from '../Tools/Scrollers/Scroller/Scroller'
// import Map from '../Maps/Map/index'
// import Loader2 from '../Loader2/Loader2'
// import ScrollUp from '../ScrollToTop/ScrollToTop'

class Home extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    isLoading: true
 }}
 componentDidMount(){
  this.setState({isLoading: false})
}
  render() {
    return (
      // this.state.isLoading ? <Loader2/> :
      <div>
        <div className='home__container__one'>
          <div className='organizer__one'>
            <h4 className='home__title'>LOCALIFY VANCOUVER</h4>
            <Scroll />
          </div>
        </div>
        <div className='home__container__two'>
          <HomeCards />
        </div>
        {/* <div className='home__container__three'>
          <Map />
        </div> */}
      </div>
    )
  }
}
export default Home
