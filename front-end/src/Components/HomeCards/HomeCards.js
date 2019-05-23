import React from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap'
import '../../Styles/HomeCards/HomeCards.css'

const Example = props => {
  return (
    <Row id='row'>
      <Col id='card' sm='6'>
        <Card body>
          <CardTitle>ARTIST</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional content.
          </CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col id='card' sm='6'>
        <Card body>
          <CardTitle>SHOP</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional content.
          </CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col id='card' sm='6'>
        <Card body>
          <CardTitle>GROCERY</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional content.
          </CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col id='card' sm='6'>
        <Card body>
          <CardTitle>ARTISAN</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional content.
          </CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col id='card' sm='6'>
        <Card body>
          <CardTitle>CAFE</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional content.
          </CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col id='card' sm='6'>
        <Card body>
          <CardTitle>FOOD</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional content.
          </CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    </Row>
  )
}

export default Example