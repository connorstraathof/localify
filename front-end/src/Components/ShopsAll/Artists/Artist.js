import React from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'
import NotFound from '../../Tools/NotFound/NotFound'
import { RichText } from 'prismic-reactjs'
import Text from '../../Slices/Text'
import Quote from '../../Slices/Quote'
import ImageCaption from '../../Slices/ImageCaption'
import Loader from '../../Tools/Loaders/Loader/Loader'
import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap'
import '../../../Styles/Generic/Generic.css'

const mapStyles = {
  width: '70%',
  height: '60%'
}
// Declare your component
class Artist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      doc: null,
      notFound: false,
      modal: false
    }

    this.toggle = this.toggle.bind(this)

    if (props.prismicCtx) {
      this.fetchPage(props)
    }
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  componentDidUpdate(prevProps) {
    this.props.prismicCtx.toolbar()
    // We fetch the page only after props have changed and PrismicCtx is no longer null
    if (!prevProps.prismicCtx) {
      this.fetchPage(this.props)
    }
  }

  fetchPage(props) {
    // We are using the function to get a document by its uid
    return props.prismicCtx.api.getByUID('drinks_post', props.match.params.uid, {}, (err, doc) => {
      if (doc) {
        // We put the retrieved content in the state as a doc variable
        this.setState({ doc })
      } else {
        // We changed the state to display error not found if no matched doc
        this.setState({ notFound: !doc })
      }
    })
  }

  logo() {
    const avatar = { backgroundImage: 'url(' + this.state.doc.data.logo.url + ')' }
    return (
      <div className='home'>
        <div className='blog-avatar' style={avatar} />
      </div>
    )
  }

  renderSliceZone(sliceZone) {
    return sliceZone.map((slice, index) => {
      switch (slice.slice_type) {
        case 'image_with_caption':
          return <ImageCaption slice={slice} key={'slice-' + index} />
        case 'quote':
          return <Quote slice={slice} key={'slice-' + index} />
        case 'text':
          return <Text slice={slice} key={'slice-' + index} prismicCtx={this.props.prismicCtx} />
        default:
          return null
      }
    })
  }

  shopFooter() {
    return <div className='shop-footer__container' />
  }

  shopModal() {
    return (
      <div id='shop-modal'>
      <div>
        <Button onClick={this.toggle}>MAP</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody id='shop-modal__map'>
          <div>{this.shopMap()}</div>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={this.toggle}>
              Do Something
            </Button>{' '}
            <Button color='secondary' onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      </div>
    )
  }

  shopMap() {
    if (this.state.doc)
    return(
      <div className='shop-map__container'>
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
        onClose={this.onClose}
      >
      </InfoWindow>
    </Map>
    </div>
    )
  }


  render() {
    if (this.state.doc) {
      let titled = this.state.doc.data.title.length !== 0
      return (
        <div id='post-main'>
          <div className='shop__logo-box__container'>
            <div className='shop__logo-box'>
              <div className='shop__logo-box__br' />
              {this.logo()}
              <div className='shop__logo-box__br' />
            </div>
          </div>
          <div className='shop-container'>
            <div className='outer-container'>
              <div className='back'>
                <a id='shop__back' href='/drinks'>
                  BACK
                </a>
              </div>
              <div className='info__container'>
                <div id='generic__post__title'>
                  {titled ? RichText.asText(this.state.doc.data.title) : 'Untitled'}
                </div>
                <div className='generic__post__one'>
                  {titled ? RichText.asText(this.state.doc.data.long_description) : 'Untitled'}
                </div>
                <div id='generic__post__address'>
                  <div className='generic__address'>ADDRESS:</div>
                  {titled ? RichText.asText(this.state.doc.data.address) : 'Untitled'}
                </div>
                <div className='generic__post__one'>
                  {titled ? RichText.asText(this.state.doc.data.contact) : 'Untitled'}
                </div>
              </div>
              <div>{this.shopModal()}</div>
            </div>
          </div>
          {/* Go through the slices of the post and render the appropiate one */}
          {this.renderSliceZone(this.state.doc.data.body)}
        </div>
      )
    } else if (this.state.notFound) {
      return <NotFound />
    }
    return <Loader />
  }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCtKMlz5bz3VXsNVvtf8Ivq8H-_vEuuY_w'
})(Artist)
