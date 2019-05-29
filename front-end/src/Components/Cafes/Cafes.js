import React from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap'
import '../../Styles/Generic/Generic.css'
import axios from 'axios'
import ShopMap from '../ShopMap/ShopMap'
const url = 'http://localhost:8080/shops'

class Cafes extends React.Component {
  state = {
    shops: [],
    id: ''
  }
  getCafes = () => {
    axios.get(url).then(response => {
      this.setState({
        shops: response.data[0].inventory
        
      })
      console.log(response.data)
    })
  }
  componentDidMount() {
    this.getCafes()
  }

  render() {
    const cafeList = this.state.shops.map((cafe, i) => {
      return (
        <div>
          <Row id='row' >
            <Col id='card' sm='6'>
              <Card body id='generic__card-body'>
                <CardTitle>{cafe.name}</CardTitle>
                <CardText>
                  {cafe.short_description}
                </CardText>
                <CardText>
                  {cafe.contact}
                </CardText>
                <CardText>
                  {cafe.address}
                </CardText>
                <Button href={cafe.website}>WEBSITE</Button>
              </Card>
            </Col>
          </Row>
        </div>
      )
  })
return(
  <div >
    <div className='generic__head-space'/>
    <div className='generic__shoplist'>
    {cafeList}
    </div>
    {/* <div><ShopMap /></div> */}
    
  </div>
)
}
}

export default Cafes
