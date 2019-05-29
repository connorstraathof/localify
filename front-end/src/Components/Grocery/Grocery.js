import React from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap'
import '../../Styles/HomeCards/HomeCards.css'
import '../../Styles/Generic/Generic.css'

class Grocery extends React.Component {
  render() {
    return (
      <div className='generic__container'>
        <div className='generic__container1'>
          <h1>GROCERY</h1>
          <Card body>
            <CardText>
              Listicle yr plaid thundercats artisan taxidermy put a bird on it before they sold out
              VHS prism wayfarers chartreuse mlkshk. Gentrify blog poke activated charcoal
              kickstarter marfa, artisan echo park hashtag next level. Vape woke pickled, neutra
              waistcoat activated charcoal wayfarers twee shaman pok pok hashtag. Quinoa trust fund
              pickled, authentic craft beer crucifix 8-bit health goth aesthetic vinyl bicycle
              rights.
            </CardText>
          </Card>
        </div>
        <br />
        <div className='generic__container1'>
          <h1>Shops</h1>
          <Row id='row'>
            <Col id='card' sm='6'>
              <Card body>
                <CardTitle>Artisan</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col id='card' sm='6'>
              <Card body>
                <CardTitle>Artisan</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col id='card' sm='6'>
              <Card body>
                <CardTitle>Artisan</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
            <Col id='card' sm='6'>
              <Card body>
                <CardTitle>Artisan</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional content.
                </CardText>
                <Button>Go somewhere</Button>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
export default Grocery
