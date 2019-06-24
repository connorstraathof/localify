import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import '../../../../Styles/ExploreCards/ExploreCards.css'

const Example = (props) => {
  return (
    <Row id='explore-cards'>
      <Col>
          <Button id='explore-cards__card' href='/artists'>
          <CardTitle id='explore-cards__card-title'>ARTISTS</CardTitle>
          <CardText></CardText>
          </Button>
      </Col>
      <Col>
          <Button id='explore-cards__card' href=''>
          <CardTitle id='explore-cards__card-title'>ARTISANS</CardTitle>
          <CardText></CardText>
          </Button>
      </Col>
      <Col>
          <Button id='explore-cards__card' href='/cafes'>
          <CardTitle id='explore-cards__card-title'>CAFES</CardTitle>
          <CardText></CardText>
          </Button>
      </Col>
      <Col>
          <Button id='explore-cards__card' href='/drinks'>
          <CardTitle id='explore-cards__card-title'>DRINKS</CardTitle>
          <CardText></CardText>
          </Button>
      </Col>
      <Col>
          <Button id='explore-cards__card' href='/grocery'>
          <CardTitle id='explore-cards__card-title'>GROCERIES</CardTitle>
          <CardText></CardText>
          </Button>
      </Col>
      <Col>
          <Button id='explore-cards__card' href='/shops'>
          <CardTitle id='explore-cards__card-title'>SHOPS</CardTitle>
          <CardText></CardText>
          </Button>
      </Col>
    </Row>
  );
};

export default Example;