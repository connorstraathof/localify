import React, { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'
import { InfoWindow, Marker } from 'google-maps-react'
import axios from 'axios'
const url = 'http://localhost:8080/shops'

const mapStyles = {
  width: '60%',
  height: '60%'
}

export class ShopMap extends Component {
  state = {
      locations: []
  }
  getLocations = () => {
    axios.get(url).then(response => {
      this.setState({
        locations: response.data[0].inventory[0].location
      })
      console.log(response.data[0].inventory[0].location)
    })
  }
  componentDidMount() {
    this.getLocations()
  }
  
  render() {
        return (
            <Map
              google={this.props.google}
              zoom={12.5}
              style={mapStyles}
              initialCenter={{
                lat: 49.246292,
                lng: -123.116226
              }}
            >
              <Marker onClick={this.onMarkerClick} name={'Kenyatta International Convention Centre'} />
              <InfoWindow
                marker={this.state.locations.location}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
              >
                <div>
                  <h4>{this.state.name}</h4>
                </div>
              </InfoWindow>
            </Map>
          )
        }
      
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCtKMlz5bz3VXsNVvtf8Ivq8H-_vEuuY_w'
})(ShopMap)
