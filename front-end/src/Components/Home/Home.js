import React from 'react'
import '../../Styles/Home/Home.css'
import { Button, CardTitle, CardText, Row, Col } from 'reactstrap'
import { animateScroll as scroll } from 'react-scroll'
// import Map from '../Maps/Map/index'
// import Loader2 from '../Loader2/Loader2'
// import ScrollUp from '../ScrollToTop/ScrollToTop'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }
  componentDidMount() {
    this.setState({ isLoading: false })
  }
  homeCards() {
    return (
      <div id='suggestions'>
        <div>
          <Row id='suggestions-cards'>
            <Col id='suggestions-cards__column'>
              <Button id='suggestions-cards__card' href='http://localhost:3000/artists/25'>
                <CardTitle id='suggestion-card__title'>LERKE NENNEMANN</CardTitle>
                <CardText id='suggestion-card__text'>ARTIST</CardText>
              </Button>
            </Col>
            <Col id='suggestions-cards__column'>
              <Button id='suggestions-cards__card' href='http://localhost:3000/shops/13'>
                <CardTitle id='suggestion-card__title'>E:CLE</CardTitle>
                <CardText id='suggestion-card__text'>SHOP</CardText>
              </Button>
            </Col>
            <Col id='suggestions-cards__column'>
              <Button id='suggestions-cards__card' href='http://localhost:3000/grocery/7'>
                <CardTitle id='suggestion-card__title'>FAMOUS FOODS</CardTitle>
                <CardText id='suggestion-card__text'>GROCER</CardText>
              </Button>
            </Col>
            <Col id='suggestions-cards__column'>
              <Button id='suggestions-cards__card' href='http://localhost:3000/drinks/26'>
                <CardTitle id='suggestion-card__title'>THE LIBRA ROOM</CardTitle>
                <CardText id='suggestion-card__text'>DRINKS</CardText>
              </Button>
            </Col>
            <Col id='suggestions-cards__column'>
              <Button id='suggestions-cards__card' href='http://localhost:3000/cafes/6'>
                <CardTitle id='suggestion-card__title'>JJ BEAN</CardTitle>
                <CardText id='suggestion-card__text'>CAFE</CardText>
              </Button>
            </Col>
            <Col id='suggestions-cards__column'>
              <Button id='suggestions-cards__card' href='http://localhost:3000/food/15'>
                <CardTitle id='suggestion-card__title'>Como Taperia</CardTitle>
                <CardText id='suggestion-card__text'>FOOD</CardText>
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
  scroller() {
    return(
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
  render() {
    return (
      // this.state.isLoading ? <Loader2/> :
      <div>
        <div className='home__container__one'>
          <div className='organizer__one'>
            <h4 className='home__title'>LOCALIFY VANCOUVER</h4>
            {this.scroller()}
          </div>
        </div>
        <div className='home__container__two'>
          <div className='suggestions-header__br' />
          <div className='suggestions-header__title'>SUGGESTIONS</div>
          <div className='suggestions-header__br' />
        </div>
        <div className='home__container__three'>{this.homeCards()}</div>
        {/* <div className='home__container__three'>
          <Map />
        </div> */}
      </div>
    )
  }
}
export default Home
