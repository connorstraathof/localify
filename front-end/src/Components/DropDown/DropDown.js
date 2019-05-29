import React from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import '../../Styles/DropDownNav/DropDownNav.css'

export default class DropDown extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false
    }
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  render() {
    return (
      <Dropdown id='dropdown' isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>EXPLORE</DropdownToggle>
        <DropdownMenu>
          <DropdownItem href='/artists'>ARTISTS</DropdownItem>
          <DropdownItem href='/artisanal'>ARTISANAL</DropdownItem>
          <DropdownItem href='/cafes'>CAFES</DropdownItem>
          <DropdownItem href='/grocery'>GROCERY</DropdownItem>
          <DropdownItem href='/shops'>SHOPS</DropdownItem>
          <DropdownItem href='/food'>FOOD</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }
}
