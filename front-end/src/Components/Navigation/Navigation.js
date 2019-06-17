import React from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import DropDown from '../Tools/DropDown/DropDown'
import DropDownNav from '../Tools/DropDownNav/DropDownNav'
import '../../Styles/Navigation/Navigation.css'
import SearchModal from '../Searchs/SearchModal/SearchModal'
import JoinModal from '../Tools/JoinModal/JoinModal'

export default class Navigation extends React.Component {

  render() {
    return (
      <div>
        <Navbar color='faded' light>
          <NavbarBrand href='/' className='mr-auto'>
            LOCALIFY
          </NavbarBrand>
          <DropDownNav />
          <div className='nav-break'/>
          <DropDown />
          <div className='nav-break'/>
          <SearchModal />
          <div className='nav-break'/>
          <JoinModal/>
          <div id='content' />
        </Navbar>
      </div>
    )
  }
}
