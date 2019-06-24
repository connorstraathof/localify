import React from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap'
import '../../../Styles/HomeCards/HomeCards.css'

const HomeCards = props => {
  return (
    <div className='suggestions'>
      <div>
        <Row id='suggestions-cards'>
          <Col id='suggestions-cards__column'>
            <Button id='suggestions-cards__card' href='http://localhost:3000/artists/25'>
              <CardTitle>LERKE NENNEMANN</CardTitle>
              <CardText>
                Hailing from Hamburg, Germany Lerke has been steadily developing her style from an
                early age.
              </CardText>
            </Button>
          </Col>
          <Col id='suggestions-cards__column'>
            <Button id='suggestions-cards__card' href='http://localhost:3000/shops/13'>
              <CardTitle>E:CLE</CardTitle>
              <CardText>Find Korean fashion and Indi-Designer Brands at E:CLE.</CardText>
            </Button>
          </Col>
          <Col id='suggestions-cards__column'>
            <Button id='suggestions-cards__card' href='http://localhost:3000/grocery/7'>
              <CardTitle>FAMOUS FOODS</CardTitle>
              <CardText>
                Famous Foods has always been the spot in town to shop for Organic and natural foods
                such as flours, grains, beans, spices, and herbs.
              </CardText>
            </Button>
          </Col>
          <Col id='suggestions-cards__column'>
            <Button id='suggestions-cards__card' href='http://localhost:3000/drinks/26'>
              <CardTitle>THE LIBRA ROOM</CardTitle>
              <CardText>
                Funky hangout offering creative cocktails and casual Mediterranean eats plus live
                music nightly.
              </CardText>
            </Button>
          </Col>
          <Col id='suggestions-cards__column'>
            <Button id='suggestions-cards__card' href='http://localhost:3000/cafes/6'>
              <CardTitle>JJ BEAN</CardTitle>
              <CardText>
                This café is the perfect place to warm up on a cold day, with the perfect patio to
                cool off in summer.
              </CardText>
            </Button>
          </Col>
          <Col id='suggestions-cards__column'>
            <Button id='suggestions-cards__card' href='http://localhost:3000/food/15'>
              <CardTitle>Como Taperia</CardTitle>
              <CardText>
                Como Taperia is a tapas bar and restaurant in Vancouver's Mount Pleasant
                neighbourhood.
              </CardText>
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default HomeCards
