import React from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import ExploreModal from '../../Tools/Modals/ExploreModal/ExploreModal'
import '../../../Styles/Navigation/Navigation.css'
import '../../../Styles/About/About.css'
import SearchModal from '../../Tools/Modals/SearchModal/SearchModal'
import { Button } from 'reactstrap';


export default class Navigation extends React.Component {

  render() {
    return (
      <div>
        <Navbar color='faded' light>
          <NavbarBrand href='/' className='mr-auto'>
            LOCALIFY
          </NavbarBrand>
          <Button id='nav__button' href='/about'>
            <div className='about__logo'/>
            <div className='nav__button-title'>ABOUT</div>
            </Button>
          <div className='nav-break'/>
          <ExploreModal />
          <div className='nav-break'/>
          <Button id='nav__button' href='/join'>
            <div className='join__logo'/>
            <div className='nav__button-title'>JOIN</div>
          </Button>
          <div className='nav-break'/>
          <SearchModal />
          <div id='content' />
        </Navbar>
      </div>
    )
  }
}
