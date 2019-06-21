import React from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import '../../../Styles/DropDown/DropDown.css'

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
        <div className='dropdown__button-container'>
          <DropdownToggle id='dropdown-button'>
            <div className='dropdown__icon' />
            <h1>EXPLORE</h1>
          </DropdownToggle>
        </div>

        <DropdownMenu id='shop-dropdown__menu'>
          <DropdownItem href='/artists'>ARTISTS</DropdownItem>
          <DropdownItem href='/cafes'>CAFES</DropdownItem>
          <DropdownItem href='/drinks'>DRINKS</DropdownItem>
          <DropdownItem href='/food'>FOOD</DropdownItem>
          <DropdownItem href='/grocery'>GROCERY</DropdownItem>
          <DropdownItem href='/shops'>SHOPS</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }
}


