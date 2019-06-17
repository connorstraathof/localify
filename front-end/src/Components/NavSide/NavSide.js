import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import DropDownSide from '../Tools/DropDownSide/DropDownSide'
import '../../Styles/Generic/Generic.css'
import DropDownShops from '../Tools/DropDownShops/DropDownShops'

export default class NavSide extends React.Component {
  render() {
    return (
      <div className='nav-side__main'>
        <div id='nav-side__links'>
          <Nav vertical>
            <DropDownSide/>
            <DropDownShops/>
            {/* <NavItem>
              <NavLink href='#'>ARTISTS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#'>ARTISANAL</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#'>CAFES</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#'>DRINKS</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#'>GROCERY</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#'>SHOPS</NavLink>
            </NavItem> */}
          </Nav>
        </div>
      </div>
    )
  }
}
