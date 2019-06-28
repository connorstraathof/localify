import React from 'react'
import '../../Styles/Home/Home.css'
import {
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'
import { animateScroll as scroll } from 'react-scroll'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'
import '../../Styles/Map/Map.css'
import CurrentLocation from '../../Map'
// import Map from '../Maps/Map/index'
// import Loader2 from '../Loader2/Loader2'
// import ScrollUp from '../ScrollToTop/ScrollToTop'

class Home extends React.Component {
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      modal: false,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      stores: [{ name: 'libra room', latitude: 49.271157, longitude: -123.069342 },
      {name: 'ME', latitude: 37.515491, longitude: 127.019452}
    ]
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }
  componentDidMount() {
    this.setState({ isLoading: false })
  }
  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker onClick={store.name} key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     >
       <InfoWindow
       marker={this.state.activeMarker}
       visible={this.state.showingInfoWindow}
       onClose={this.onClose}>
         <h1>{this.name}</h1>
       </InfoWindow>
     </Marker>
    })
  }
  bigMap() {
    return (
      <div>
        <div className='map-header__container'>
          <h1 className='header'>VENDOR LOCATIONS</h1>
        </div>
        <div>
          <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
            {this.displayMarkers()}
            <Marker onClick={this.onMarkerClick} name={'current location'} />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
          </CurrentLocation>
        </div>
      </div>
    )
  }
  homeMapModal() {
    return (
      <div>
        <Button onClick={this.toggle}>MAP</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody>{this.bigMap()}</ModalBody>
          <ModalFooter>
            <Button color='secondary' onClick={this.toggle}>
              CLOSE
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
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
    return (
      <div className='scroll__container'>
        <button onClick={() => scroll.scrollMore(700)} className='suggestions'>
          SUGGESTIONS
        </button>
        <button onClick={() => scroll.scrollMore(1600)} className='suggestions'>
          {this.homeMapModal()}
        </button>
      </div>
    )
  }
  render() {
    return (
      // this.state.isLoading ? <Loader2/> :
      <div>
        <div className='home__container__one'>
          <div className='home__organizers'>
            <div className='organizer__one'>
              <h4 className='home__title'>LOCALIFY VANCOUVER</h4>
            </div>
            <div className='organizer__two'>{this.scroller()}</div>
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
export default GoogleApiWrapper(props => ({
  apiKey: 'AIzaSyCtKMlz5bz3VXsNVvtf8Ivq8H-_vEuuY_w'
}))(Home)
