import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../../Styles/DropDownNav/DropDownNav.css'

export default class DropDown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown id='dropdown' isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          EXPLORE
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>ARTISTS</DropdownItem>
          <DropdownItem>ARTISANAL</DropdownItem>
          <DropdownItem>CAFES</DropdownItem>
          <DropdownItem>GROCERY</DropdownItem>
          <DropdownItem>SHOPS</DropdownItem>
          <DropdownItem>FOOD</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}