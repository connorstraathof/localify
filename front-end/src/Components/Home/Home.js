import React from 'react'
import HomeCards from '../HomeCards/HomeCards'
import '../../Styles/Home/Home.css'
import Scroll from '../Scroller/Scroller'
import Map from '../Map/index'
import Loader2 from '../Loader2/Loader2'
// import ScrollUp from '../ScrollToTop/ScrollToTop'

class Home extends React.Component {
  state = {
    loading: true
 }
 componentDidMount(){
  setTimeout(()=>{
     this.setState({loading:false});
  },3000); // 2000 milliseconds = 2 seconds
}
  render() {
    if(this.state.loading){
      return (
        <div>
            <Loader2 size={100} />
        </div>
      );
   }
    return (
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
        <div className='home__container__three'>
          <Map />
        </div>
      </div>
    )
  }
}
export default Home
