import React from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import DropDown from '../../Components/DropDown/DropDown'
import DropDownNav from '../../Components/DropDownNav/DropDownNav'
import Search from '../../Components/Search/Search'

export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <Navbar color='faded' light>
          <NavbarBrand href='/' className='mr-auto'>
            LOCALIFY
          </NavbarBrand>
          <DropDownNav/>
          <DropDown />
          <Search/>
        </Navbar>
      </div>
    )
  }
}
