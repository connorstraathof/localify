import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


export default class DropDownSide extends React.Component {
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
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          CATEGORIES
        </DropdownToggle>
        <DropdownMenu>
          <DropdownToggle>ARTIST</DropdownToggle>
          <DropdownItem>ARTISANAL</DropdownItem>
          <DropdownItem>DRINKS</DropdownItem>
          <DropdownItem>GROCERY</DropdownItem>
          <DropdownItem>SHOPS</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}