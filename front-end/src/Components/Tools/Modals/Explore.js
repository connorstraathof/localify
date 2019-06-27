import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CardTitle, Row, Col } from 'reactstrap';
import '../../../Styles/ModalStyles/ModalStyles.css';
import '../../../Styles/Navigation/Navigation.css'

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

  exploreCards() {
    return(
      <Row id='explore-cards'>
      <Col>
          <Button id='explore-cards__card' href='/artists'>
          <CardTitle id='explore-cards__card-title'>ARTISTS</CardTitle>
          </Button>
      </Col>
      <Col>
          <Button id='explore-cards__card' href=''>
          <CardTitle id='explore-cards__card-title'>ARTISANS</CardTitle>
          </Button>
      </Col>
      <Col>
          <Button id='explore-cards__card' href='/cafes'>
          <CardTitle id='explore-cards__card-title'>CAFES</CardTitle>
          </Button>
      </Col>
      <Col>
          <Button id='explore-cards__card' href='/drinks'>
          <CardTitle id='explore-cards__card-title'>DRINKS</CardTitle>
          </Button>
      </Col>
      <Col>
          <Button id='explore-cards__card' href='/grocery'>
          <CardTitle id='explore-cards__card-title'>GROCERIES</CardTitle>
          </Button>
      </Col>
      <Col>
          <Button id='explore-cards__card' href='/shops'>
          <CardTitle id='explore-cards__card-title'>SHOPS</CardTitle>
          </Button>
      </Col>
    </Row>
    )
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
            {this.exploreCards()}
          </ModalBody>
          <ModalFooter>
            <Button id='explore-modal__cancel-button' onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;