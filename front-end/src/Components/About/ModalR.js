import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap'
import '../../Styles/About/About.css'

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

  modalForm() {
    return (
      <Form>
        <FormGroup>
          <Label for='exampleEmail'>BUSINESS NAME</Label>
          <Input placeholder='Business name..' />
        </FormGroup>
        <FormGroup>
          <Label>Address</Label>
          <Input placeholder='Business Address..' />
        </FormGroup>
        <FormGroup>
          <Label for='exampleText'>Text Area</Label>
          <Input type='textarea' placeholder='Tell us about this business..' />
        </FormGroup>
      </Form>
    )
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle} id='about-page__button-recommend'>
          RECOMMEND
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>RECOMMEND A BUSINESS TO US</ModalHeader>
          <ModalBody>
            {this.modalForm()}
          </ModalBody>
          <ModalFooter>
            <Button id='recommend-modal__button' color='primary' onClick={this.toggle}>
              SUBMIT
            </Button>
            <Button id='recommend-modal__button' color='primary' onClick={this.toggle}>
              CANCEL
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default ModalExample
