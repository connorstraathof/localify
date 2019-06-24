import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DonateForm from './ModalDF'
import '../../Styles/About/About.css'

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle} id='about-page__button-donate'>DONATE</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>DONATE</ModalHeader>
          <ModalBody>
              <DonateForm/>
          </ModalBody>
          <ModalFooter>
            <Button id='recommend-modal__button' color="primary" onClick={this.toggle}>SUBMIT</Button>
            <Button id='recommend-modal__button' color="primary" onClick={this.toggle}>CANCEL</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;