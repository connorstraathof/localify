import React from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import DropDown from '../../Components/DropDown/DropDown'
import DropDownNav from '../../Components/DropDownNav/DropDownNav'
import Search from '../../Components/Search/Search'
import '../../Styles/Navigation/Navigation.css'

export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Navbar color='faded' light>
          <NavbarBrand href='/' className='mr-auto'>
            LOCALIFY
          </NavbarBrand>
          <DropDownNav />
          <DropDown />
          <div id='content'/>
        </Navbar>
      </div>
    )
  }
}
