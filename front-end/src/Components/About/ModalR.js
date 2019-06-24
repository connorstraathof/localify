import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ModalForm from './ModalF'
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
        <Button onClick={this.toggle} id='about-page__button-recommend'>RECOMMEND</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>RECOMMEND A BUSINESS TO US</ModalHeader>
          <ModalBody>
            <ModalForm/>
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