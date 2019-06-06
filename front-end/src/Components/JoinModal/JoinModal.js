import React from 'react'
import { Button} from 'reactstrap'
import Modal from 'react-bootstrap/Modal'


class JoinModal extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      return (
        <>
          <Button variant="primary" onClick={this.handleShow}>
            Join Localify
          </Button>
  
          <Modal show={this.state.show} backdrop='static'>
            <Modal.Header closeButton>
              <Modal.Title>Join Localify</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                <h1>Join Localify</h1>
                </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }
  
  export default JoinModal