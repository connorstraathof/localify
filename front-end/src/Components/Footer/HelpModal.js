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
        <Button onClick={this.toggle}>
          <div className='footer__help'>
            <div className='footer__help-logo' />
            <h1 className='footer__word'>HELP</h1>
          </div>
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>LOCALIFY HELP</ModalHeader>
          <ModalBody className='footer__help-input'>
              <h1 className='footer__input__title'>What can we help you with?</h1>
              <input className='footer__input' placeholder='Leave your feedback...' />
          </ModalBody>
          <ModalFooter>
            <Button className='footer__submit-button'  onClick={this.toggle}>
              SUBMIT
            </Button>{' '}
            <Button className='footer__cancel-button' onClick={this.toggle}>
              CANCEL
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default HelpModal
