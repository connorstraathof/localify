import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import '../../Styles/Footer/Footer.css'

class HelpModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle} id='footer__button'>
            <div className='footer__help-logo' />
            <h1 className='footer__word'>HELP</h1>
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>LOCALIFY HELP</ModalHeader>
          <ModalBody className='footer__help-input'>
              <h1 className='help__input__title'>What can we help you with?</h1>
              <input className='help__input' placeholder='Leave your feedback...' />
          </ModalBody>
          <ModalFooter>
            <Button id='help-modal__button'  onClick={this.toggle}>
              SUBMIT
            </Button>
            <Button id='help-modal__button' onClick={this.toggle}>
              CANCEL
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default HelpModal
