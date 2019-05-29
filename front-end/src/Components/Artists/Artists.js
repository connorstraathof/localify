import React from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap'
import '../../Styles/HomeCards/HomeCards.css'

class Artists extends React.Component {
  render() {
    return (
      <div>
        <Row id='row'>
          <Col id='card' sm='6'>
            <Card body>
              <CardTitle>Artist</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional content.
              </CardText>
              <Button>Go somewhere</Button>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Artists