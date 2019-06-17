import React from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import '../../../Styles/DropDown/DropDown.css'
import Modal from '../AboutModal/AboutModal'
import ContactModal from '../ContactModal/ContactModal'
import JoinModal from '../JoinModal/JoinModal'
import '../../../Styles/ModalStyles/ModalStyles.css'

class DropDown extends React.Component {
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
  state = {
    show: false
  }
  showModal = e => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <Dropdown id='dropdown nav' isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <div className='dropdown__button-container'>
        <div className='dropdown-nav__icon'/>
        <DropdownToggle id='dropdown nav' caret>
          INFO
        </DropdownToggle>
        </div>
        <DropdownMenu>
          <div>
            <Modal />
          </div>
          <div>
            <ContactModal />
          </div>
          <div>
            <JoinModal />
          </div>

          {/* <DropdownItem href="/join">BE A PART OF US</DropdownItem> */}
        </DropdownMenu>
      </Dropdown>
    )
  }
}
export default DropDown
