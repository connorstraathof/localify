import React from 'react'
import '../../Styles/Generic/Generic.css'
import axios from 'axios'
import { Button } from 'reactstrap'
import ShopMap from '../ShopMap/ShopMap'
const url = 'http://localhost:8080/shops'

class Grocery extends React.Component {
  state = {
    shops: [],
    id: ''
  }
  getGrocery = () => {
    axios.get(url).then(response => {
      this.setState({
        shops: response.data[1].inventory
      })
      console.log(response.data[1].inventory)
    })
  }
  componentDidMount() {
    this.getGrocery()
  }

  render() {
    const groceryList = this.state.shops.map((grocery, i) => {
      return (
        <div>
          <div>
            <div id='generic__card'>
              <h1>{grocery.name}</h1>
              <div className='generic__image'/>
              <div className='generic__lower__card'>
              <p>{grocery.short_description}</p>
              <p>{grocery.contact}</p>
              <p>{grocery.address}</p>
              <Button href={grocery.website}>WEBSITE</Button>
              </div>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div>
        <div className='generic__head-space' />
        <div className='generic__header'>
          <h1>GROCERY</h1>
          <p>
            Listicle yr plaid thundercats artisan taxidermy put a bird on it before they sold out
            VHS prism wayfarers chartreuse mlkshk. Gentrify blog poke activated charcoal kickstarter
            marfa, artisan echo park hashtag next level. Vape woke pickled, neutra waistcoat
            activated charcoal wayfarers twee shaman pok pok hashtag. Quinoa trust fund pickled,
            authentic craft beer crucifix 8-bit health goth aesthetic vinyl bicycle rights.
          </p>
        </div>
        <div id='generic__row'>{groceryList}</div>
        <div className='generic__shopmap'>
          <ShopMap />
        </div>
      </div>
    )
  }
}

export default Grocery
