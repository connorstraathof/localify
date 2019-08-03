import React from 'react'
import {
  Navbar,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  CardTitle,
  Row,
  Col,
  ModalFooter,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import '../../Styles/Navigation/Navigation.css'
import '../../Styles/ModalStyles/ModalStyles.css'
import SearchAreas from '../../Components/Search/SearchAreas'

export default class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      modal2: false,
      dropdownOpen: false
    }

    this.toggle = this.toggle.bind(this)
    this.toggle2 = this.toggle2.bind(this)
    this.toggle3 = this.toggle3.bind(this)
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
  toggle3() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  infoDropdown() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle3}>
        <DropdownToggle id='nav__button'>
          <div className='about__logo' />
          <div className='nav__button__info-title'>INFO</div>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem id='dropdown-item'>
            <Button id='nav__button__dropdown-menu' href='/about'>
              <div className='nav-dropdown__button-title'>ABOUT LOCALIFY</div>
            </Button>
          </DropdownItem>
          <DropdownItem id='dropdown-item'>
            <Button id='nav__button__dropdown-menu' href='/join'>
              <div className='nav-dropdown__button-title'>JOIN LOCALIFY</div>
            </Button>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }

  searchModal() {
    return (
      <div>
        <div>
          <Button id='nav__button' onClick={this.toggle}>
            <div className='search-modal__logo' />
            <div className='nav__button__search-title'>SEARCH</div>
          </Button>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} id='search-modal'>
          <div id='search-modal__test'>
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
          </div>
        </Modal>
      </div>
    )
  }

  exploreModal() {
    return (
      <div>
        <Button id='nav__button' onClick={this.toggle2}>
          <div className='explore-modal__logo' />
          <div className='nav__button__explore-title'>EXPLORE</div>
        </Button>
        <Modal id='explore-modal' isOpen={this.state.modal2} toggle={this.toggle2}>
          <div class='explore-modal__container'>
            <ModalHeader toggle={this.toggle2}>
              <h1 className='explore-modal__header-title'>EXPLORE</h1>
              <p className='explore-modal__header-description'>What are you looking for?</p>
            </ModalHeader>
            <ModalBody id='explore-modal__body'>{this.exploreCards()}</ModalBody>
            <ModalFooter>
              <Button id='explore-modal__cancel-button' onClick={this.toggle2}>
                Cancel
              </Button>
            </ModalFooter>
          </div>
        </Modal>
      </div>
    )
  }
  exploreCards() {
    return (
      <Row id='explore-cards'>
        <Col id='explore-cards__column'>
          <Button id='explore-cards__card' href='/artists'>
            <CardTitle id='explore-cards__card-title'>ARTISTS</CardTitle>
          </Button>
        </Col>
        <Col id='explore-cards__column'>
          <Button id='explore-cards__card' href='/cafes'>
            <CardTitle id='explore-cards__card-title'>CAFES</CardTitle>
          </Button>
        </Col>
        <Col id='explore-cards__column'>
          <Button id='explore-cards__card' href='/drinks'>
            <CardTitle id='explore-cards__card-title'>DRINKS</CardTitle>
          </Button>
        </Col>
        <Col id='explore-cards__column'>
          <Button id='explore-cards__card' href='/food'>
            <CardTitle id='explore-cards__card-title'>FOOD</CardTitle>
          </Button>
        </Col>
        <Col id='explore-cards__column'>
          <Button id='explore-cards__card' href='/grocery'>
            <CardTitle id='explore-cards__card-title'>GROCERIES</CardTitle>
          </Button>
        </Col>
        <Col id='explore-cards__column'>
          <Button id='explore-cards__card' href='/shops'>
            <CardTitle id='explore-cards__card-title'>SHOPS</CardTitle>
          </Button>
        </Col>
      </Row>
    )
  }
  logIn() {
    return (
      <div>
        <Button id='nav__button' href='/login'>
          <div className='nav__button__search-title'>LOGIN</div>
        </Button>
      </div>
    )
  }
  logInHome() {
    return (
      <div>
        <Button id='nav__button' href='/signinhome'>
          <div className='nav__button__search-title'>HOME</div>
        </Button>
      </div>
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
            {this.logIn()}
            {this.logInHome()}
          <div className='nav-break' />
            {this.infoDropdown()}
            <div className='nav-break' />
            {this.exploreModal()}

            <div className='nav-break' />
            {this.searchModal()}
            <div id='content' />
          </div>
        </Navbar>
      </div>
    )
  }
}
