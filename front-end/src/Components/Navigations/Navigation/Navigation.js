import React from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import DropDown from '../../Tools/DropDown/DropDown'
import '../../../Styles/Navigation/Navigation.css'
import '../../../Styles/About/About.css'
import SearchModal from '../../Searchs/SearchModal/SearchModal'
import JoinModal from '../../Tools/Modals/JoinModal/JoinModal'
import { Button } from 'reactstrap';


export default class Navigation extends React.Component {

  render() {
    return (
      <div>
        <Navbar color='faded' light>
          <NavbarBrand href='/' className='mr-auto'>
            LOCALIFY
          </NavbarBrand>
          <Button id='about__link' href='/about'>
            <div className='about__logo'/>
            ABOUT
            </Button>
          <div className='nav-break'/>
          <DropDown />
          <div className='nav-break'/>
          <JoinModal/>
          <div className='nav-break'/>
          <SearchModal />
          <div id='content' />
        </Navbar>
      </div>
    )
  }
}
