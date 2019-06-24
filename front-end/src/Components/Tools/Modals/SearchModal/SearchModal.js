import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../../../../Styles/Navigation/Navigation.css'
import '../../../../Styles/ModalStyles/ModalStyles.css';
import SearchAreas from '../../../Searchs/Search/SearchAreas'


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
        <div>
        <Button id='nav__button' onClick={this.toggle}>
          <div className='search-modal__logo' />
          <div className='nav__button-title'>SEARCH</div>
        </Button>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader id='search-modal__header' toggle={this.toggle}>SEARCH LOCALIFY</ModalHeader>
          <ModalBody id='search-modal__body'>
            <SearchAreas/>
          </ModalBody>
          <ModalFooter id='search-modal__footer'>
            <Button id='search-modal__footer__button' onClick={this.toggle}><h1>CLOSE</h1></Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
