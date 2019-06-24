import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ExploreCards from './ExploreCards'
import '../../../../Styles/ModalStyles/ModalStyles.css'
import '../../../../Styles/Navigation/Navigation.css'

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
        <Button id='nav__button' onClick={this.toggle}>
            <div className='explore-modal__logo'/>
            <div className='nav__button-title'>EXPLORE</div>
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} >
          <ModalHeader toggle={this.toggle}>
              <h1 className='explore-modal__header-title'>EXPLORE</h1>
              <p className='explore-modal__header-description'>What are you looking for?</p>
          </ModalHeader>
          <ModalBody id='explore-modal__body'>
            <ExploreCards/>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;