import React from 'react'
import '../../Styles/Home/Home.css'
import {
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Modal,
  ModalBody,
  ModalFooter
} from 'reactstrap'
import { animateScroll as scroll } from 'react-scroll'
import {  GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'
import '../../Styles/Map/Map.css'
import CurrentLocation from '../../Map'
// import Map from '../Maps/Map/index'
// import Loader2 from '../Loader2/Loader2'
// import ScrollUp from '../ScrollToTop/ScrollToTop'

class Home extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      modal: false,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      stores: [{ name: 'THE LIBRA ROOM', latitude: 49.271157, longitude: -123.069342 },
      {name:'THE EMERALD COCKTAIL LOUNGE', latitude:49.280664, longitude:-123.097446},
      {name:'THE DIAMOND COCKTAIL LOUNGE', latitude:49.283358, longitude:-123.104006},
      {name:'33 ACRES BREWING', latitude:49.264112, longitude:-123.105328},
      {name:'DD MAU', latitude:49.282243, longitude:-123.101125},
      {name:'PEPINOS', latitude:49.279082, longitude:-123.070617},
      {name:'DOWN LOW CHICKEN SHACK', latitude:49.276579, longitude:-123.069678},
      {name:'COMO TAPERIA', latitude:49.264971, longitude:-123.100688},
      {name:'THE BLOCK CLOTHING', latitude:49.284118, longitude:-123.109990},
      {name:'MILANO COFFEE', latitude:49.263926, longitude:-123.108736},
      {name:'JJ BEAN COFFEE', latitude:49.264976, longitude:-123.069420},
      {name:'THE FEDERAL', latitude:49.261917, longitude:-123.103182},
      {name:'E:CLE', latitude:49.284537, longitude:-123.110863},
      {name:'STRANGE FELLOWS BREWING', latitude:49.272705, longitude:-123.077861},
      {name:'FAMOUS FOODS', latitude:49.248541, longitude:-123.071462},
      {name:'STORM BREWING', latitude:49.282200, longitude:-123.070220},
      {name:'REVOLVER COFFEE', latitude:49.283387, longitude:-123.109420},
      {name:'49TH PARALLEL COFFEE', latitude:49.259196, longitude:-123.100795},
      {name:'ELYSIAN COFFEE', latitude:49.264494, longitude:-123.105053},
      {name:'HOME ON THE RANGE ORGANICS', latitude:49.262999, longitude:-123.100179},
      {name:'HUNDY', latitude:49.267964, longitude:-123.151432},
      {name:'HUNNYBEE BRUNCH', latitude:49.277772, longitude:-123.097174},
      {name:'LES AMI DU FROMAGE', latitude:49.281259, longitude:-123.086226},
      {name:'LE MARCHE ST.GEORGE', latitude:49.245788, longitude:-123.094435}
    ]
    }
    this.onMarkerClick = this.onMarkerClick.bind(this)
    this.toggle = this.toggle.bind(this)
  }


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
      return <Marker onClick={this.onMarkerClick} name={store.name} key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     >
       <Button>Hello</Button>
       <InfoWindow
       marker={this.state.activeMarker}
       visible={this.state.showingInfoWindow}
       onClose={this.onClose}>
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
        <Button id='home-map__modal-button' onClick={this.toggle}>MAP</Button>
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
        <div className='home__container'>
        <div className='home__container__one'>
          <div className='home__organizers'>
            <div className='organizer__one'>
              <div className='home__title'>
              <h4 className='home__company'>LOCALIFY</h4>
              <h4 className='home__city'>VANCOUVER</h4>
              </div>
            </div>
            <div className='organizer__two'>{this.scroller()}</div>
          </div>
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
