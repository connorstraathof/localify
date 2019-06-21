import React from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap'
import '../../../Styles/HomeCards/HomeCards.css'

const HomeCards = props => {
  return (
    <div>
      <div className='suggestions__container'>
        <h1 className='header'>SUGGESTIONS</h1>
      </div>
      <div>
        <Row id='row'>
          <Col id='card' sm='6'>
            <Button href='http://localhost:3000/artists/25'>
              <Card className='card-body'>
                <CardTitle>LERKE NENNEMANN</CardTitle>
                <CardText>
                  Hailing from Hamburg, Germany Lerke has been steadily developing her style from an
                  early age.
                </CardText>
              </Card>
            </Button>
          </Col>
          <Col id='card' sm='6'>
            <Button href='http://localhost:3000/shops/13'>
              <Card className='card-body'>
                <CardTitle>E:CLE</CardTitle>
                <CardText>Find Korean fashion and Indi-Designer Brands at E:CLE.</CardText>
              </Card>
            </Button>
          </Col>
          <Col id='card' sm='6'>
            <Button href='http://localhost:3000/grocery/7'>
              <Card className='card-body'>
                <CardTitle>FAMOUS FOODS</CardTitle>
                <CardText>
                  Famous Foods has always been the spot in town to shop for Organic and natural
                  foods such as flours, grains, beans, spices, and herbs.
                </CardText>
              </Card>
            </Button>
          </Col>
          <Col id='card' sm='6'>
            <Button href='http://localhost:3000/drinks/26'>
              <Card className='card-body'>
                <CardTitle>THE LIBRA ROOM</CardTitle>
                <CardText>
                  Funky hangout offering creative cocktails and casual Mediterranean eats plus live
                  music nightly.
                </CardText>
              </Card>
            </Button>
          </Col>
          <Col id='card' sm='6'>
            <Button href='http://localhost:3000/cafes/6'>
              <Card className='card-body'>
                <CardTitle>JJ BEAN</CardTitle>
                <CardText>
                  This café is the perfect place to warm up on a cold day, with the perfect patio to
                  cool off in summer.
                </CardText>
              </Card>
            </Button>
          </Col>
          <Col id='card' sm='6'>
            <Button href='http://localhost:3000/food/15'>
              <Card className='card-body'>
                <CardTitle>Como Taperia</CardTitle>
                <CardText>
                  Como Taperia is a tapas bar and restaurant in Vancouver's Mount Pleasant
                  neighbourhood.
                </CardText>
              </Card>
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default HomeCards
