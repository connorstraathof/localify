import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import '../../Styles/Footer/Footer.css'

class Footer extends React.Component {
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

  helpModal() {
    return (
      <div>
        <Button onClick={this.toggle} id='footer__button'>
          <div className='footer__help-logo' />
          <h1 className='footer__word'>HELP</h1>
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>LOCALIFY HELP</ModalHeader>
          <ModalBody className='footer__help-input'>
            <div className='help__input__title'>What can we help you with?</div>
            <input className='help__input' placeholder='Leave your feedback...' />
          </ModalBody>
          <ModalHeader/>
          <ModalBody className='footer__contact-input'>
            <div className='contact__questions'>QUESTIONS?</div>
            <a className='footer__contact-email' href={'cstraathof@gmail.com'}>
              <div className='footer__contact-link'>EMAIL US</div>
            </a>
          </ModalBody>
          <ModalFooter>
            <Button id='help-modal__button' onClick={this.toggle}>
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

  render() {
    return (
      <div className='footer'>
        <div className='footer__container'>
          <div className='footer__left'>
            <div className='footer__legal'>
              <div className='footer__copyright' />
              <h1 className='footer__logo'>2019 LOCALIFY INC</h1>
            </div>
          </div>
          <div className='footer__right'>
            <div className='footer__aid'>
              <div className='footer-br' />
              {this.helpModal()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Footer
