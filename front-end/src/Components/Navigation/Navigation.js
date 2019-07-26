import React from 'react'
import { Navbar, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { CardTitle, Row, Col } from 'reactstrap';
import '../../Styles/Navigation/Navigation.css'
import '../../Styles/ModalStyles/ModalStyles.css';
import SearchAreas from '../../Components/Search/SearchAreas'

export default class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      modal2: false
    }

    this.toggle = this.toggle.bind(this)
    this.toggle2 = this.toggle2.bind(this)
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }
  toggle2() {
    this.setState(prevState => ({
      modal2: !prevState.modal2
    }))
  }


  searchModal() {
    return (
      <div>
        <div>
          <Button id='nav__button' onClick={this.toggle}>
            <div className='search-modal__logo' />
            <div className='nav__button-title'>SEARCH</div>
          </Button>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader id='search-modal__header' toggle={this.toggle}>
            SEARCH LOCALIFY
          </ModalHeader>
          <ModalBody id='search-modal__body'>
            <SearchAreas />
          </ModalBody>
          <ModalFooter id='search-modal__footer'>
            <Button id='search-modal__footer__button' onClick={this.toggle}>
              <h1>CLOSE</h1>
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }

  exploreModal() {
    return (
      <div>
        <Button id='nav__button' onClick={this.toggle2}>
            <div className='explore-modal__logo'/>
            <div className='nav__button-title'>EXPLORE</div>
        </Button>
        <Modal isOpen={this.state.modal2} toggle={this.toggle2} >
          <ModalHeader toggle={this.toggle2}>
              <h1 className='explore-modal__header-title'>EXPLORE</h1>
              <p className='explore-modal__header-description'>What are you looking for?</p>
          </ModalHeader>
          <ModalBody id='explore-modal__body'>
            {this.exploreCards()}
          </ModalBody>
          <ModalFooter>
            <Button id='explore-modal__cancel-button' onClick={this.toggle2}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
  exploreCards() {
    return(
      <Row id='explore-cards'>
      <Col>
          <Button id='explore-cards__card' href='/artists'>
          <CardTitle id='explore-cards__card-title'>ARTISTS</CardTitle>
          </Button>
      </Col>
      <Col>
          <Button id='explore-cards__card' href=''>
          <CardTitle id='explore-cards__card-title'>ARTISANS</CardTitle>
          </Button>
      </Col>
      <Col>
          <Button id='explore-cards__card' href='/cafes'>
          <CardTitle id='explore-cards__card-title'>CAFES</CardTitle>
          </Button>
      </Col>
      <Col>
          <Button id='explore-cards__card' href='/drinks'>
          <CardTitle id='explore-cards__card-title'>DRINKS</CardTitle>
          </Button>
      </Col>
      <Col>
          <Button id='explore-cards__card' href='/grocery'>
          <CardTitle id='explore-cards__card-title'>GROCERIES</CardTitle>
          </Button>
      </Col>
      <Col>
          <Button id='explore-cards__card' href='/shops'>
          <CardTitle id='explore-cards__card-title'>SHOPS</CardTitle>
          </Button>
      </Col>
    </Row>
    )
  }
  
  render() {
    return (
      <div>
        <Navbar id='nav'>
          <div className='nav__left'>
            <Button id='localify' href='/'>
              LOCALIFY
            </Button>
          </div>
          <div className='nav__right'>
            <Button id='nav__button' href='/about'>
              <div className='about__logo' />
              <div className='nav__button-title'>ABOUT</div>
            </Button>
            <div className='nav-break' />
            {this.exploreModal()}
            <div className='nav-break' />
            <Button id='nav__button' href='/join'>
              <div className='join__logo' />
              <div className='nav__button-title'>JOIN</div>
            </Button>
            <div className='nav-break' />
            {this.searchModal()}
            <div id='content' />
          </div>
        </Navbar>
      </div>
    )
  }
}
