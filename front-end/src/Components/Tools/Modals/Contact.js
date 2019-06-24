import React from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import '../../../Styles/Footer/Footer.css'

class ContactModal extends React.Component {
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
            <div className='footer__contact-logo' />
            <h1 className='footer__word'>CONTACT</h1>
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>CONTACT</ModalHeader>
          <ModalBody className='footer__contact-input'>
              <h1 className='contact__questions'>QUESTIONS?</h1>
              <a className='footer__contact-email' href={'cstraathof@gmail.com'}><h1 className='footer__contact-link'>EMAIL US</h1></a>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default ContactModal
