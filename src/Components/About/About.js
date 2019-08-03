import React from 'react'
import '../../Styles/About/About.css'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap'

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      modal2: false
    }

    this.toggle = this.toggle.bind(this)
    this.toggle2 = this.toggle2.bind(this)
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }
  toggle2() {
    this.setState(prevState => ({
      modal2: !prevState.modal2
    }))
  }

  modalDonate() {
    return (
        <div>
          <Button onClick={this.toggle} id='about-page__button-donate'>DONATE</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>DONATE</ModalHeader>
            <ModalBody>
                {this.modalDonateForm()}
            </ModalBody>
            <ModalFooter>
              <Button id='recommend-modal__button' color="primary" onClick={this.toggle}>SUBMIT</Button>
              <Button id='recommend-modal__button' color="primary" onClick={this.toggle}>CANCEL</Button>
            </ModalFooter>
          </Modal>
        </div>
      );
  }
  modalDonateForm() {
    return(
        <Form>
        <FormGroup>
          <Label>Full Name</Label>
          <Input placeholder="Type your full name.." />
        </FormGroup>
        <FormGroup>
          <Label>Amount</Label>
          <Input placeholder="Amount you wish to donate.." />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Note</Label>
          <Input placeholder='Notes about your donation..' />
        </FormGroup>
      </Form>
      )
  }
  modalRecommend() {
    return (
        <div>
          <Button onClick={this.toggle2} id='about-page__button-recommend'>
            RECOMMEND
          </Button>
          <Modal isOpen={this.state.modal2} toggle={this.toggle2} className={this.props.className}>
            <ModalHeader toggle={this.toggle2}>RECOMMEND A BUSINESS TO US</ModalHeader>
            <ModalBody>
              {this.modalRecommendForm()}
            </ModalBody>
            <ModalFooter>
              <Button id='recommend-modal__button' color='primary' onClick={this.toggle2}>
                SUBMIT
              </Button>
              <Button id='recommend-modal__button' color='primary' onClick={this.toggle2}>
                CANCEL
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      )
  }
  modalRecommendForm() {
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
      <div className='about'>
        <div className='about__break-upper' />
        <div className='about__header-container'>
          <h1 className='about__header'>ABOUT LOCALIFY</h1>
        </div>
        <div className='about__break-upper' />
        <div className='about__container'>
          <div className='about__paragraphs'>
            <p className='about__paragraph'>
              First of all, thank you for visiting our page and supporting our vision!
            </p>
            <p className='about__paragraph'>
              Localify began with a dream of an app to act as a support system to the
              local/independent shops. Our goal is to make it easy for visitors and locals to find
              and explore places that originated in the city they are situated in. Rather than
              supplying information about chains, and big brands Localify focuses on small local
              operations.
            </p>
            <p className='about__paragraph'>
              We are always looking to expand our reach, and support net, so if you know of a
              business that you could see on this platform click the recommend link below.
            </p>
            <p className='about__paragraph'>
              If you like what we're doing and feel like donating to the project, please click the
              donate link below.
            </p>
            <div className='about__break' />
            <div className='about__button-container'>
              {this.modalDonate()}
              {this.modalRecommend()}

            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default About
