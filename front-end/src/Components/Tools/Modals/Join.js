import '../../../../Styles/ModalStyles/ModalStyles.css'
import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import JoinForm from '../../../Tools/JoinForm/JoinForm'

class ModalExample extends React.Component {
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
        <div>
          <Button id='join-button__container' onClick={this.toggle}>
            <div className='join__icon' />
            JOIN
          </Button>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader id='join-modal__header' toggle={this.toggle}>
            <h1 id='join-modal__title'>INTERESTED IN JOINING LOCALIFY?</h1>
          </ModalHeader>
          <ModalBody id='join-modal__body'>
            <JoinForm />
          </ModalBody>
          <ModalFooter id='join-modal__footer'>
            <Button id='join-modal__footer__close' onClick={this.toggle}>
              CLOSE
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default ModalExample
