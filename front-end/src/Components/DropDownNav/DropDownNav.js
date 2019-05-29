import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../../Styles/DropDownNav/DropDownNav.css'
import Modal from '../AboutModal/AboutModal'
import ContactModal from '../ContactModal/ContactModal'
import JoinModal from '../JoinModal/JoinModal'


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
      <Dropdown id='dropdown nav' isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle id='dropdown nav' caret>
          INFO
        </DropdownToggle>
        <DropdownMenu>
          <div><Modal/></div>
          <div><ContactModal/></div>
          <div><JoinModal/></div>
          {/* <DropdownItem href="/join">BE A PART OF US</DropdownItem> */}
        </DropdownMenu>
      </Dropdown>
    );
  }
}