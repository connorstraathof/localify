import React from 'react'
import NotFound from '../../../Components/NotFound/NotFound'
import { RichText } from 'prismic-reactjs'
import Text from '../../Slices/Text'
import Quote from '../../Slices/Quote'
import ImageCaption from '../../Slices/ImageCaption'
import { Helmet } from 'react-helmet'
import Loader from '../../Tools/Loader/Loader'
import '../../../Styles/Generic/Generic.css'

// Declare your component
export default class Shop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      doc: null,
      notFound: false
    }
    if (props.prismicCtx) {
      this.fetchPage(props)
    }
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
    return props.prismicCtx.api.getByUID('shop_post', props.match.params.uid, {}, (err, doc) => {
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
      <div className='home__two'>
        <div className='blog-avatar__two' style={avatar} />
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

  render() {
    if (this.state.doc) {
      let titled = this.state.doc.data.title.length !== 0
      return (
        <div className='main'>
          <Helmet>
            <title>{titled ? RichText.asText(this.state.doc.data.title) : 'Untitled'}</title>
          </Helmet>
          <div className='outer-container'>
            <div className='backup__container'>
              <div className='back'>
                <a href='/grocery'>back to list</a>
              </div>
              {this.logo()}
              <div className='info__container'>
                <div className='generic__post__title'>
                  <h1>{titled ? RichText.asText(this.state.doc.data.title) : 'Untitled'}</h1>
                </div>
                <div className='generic__post__one'>
                  {titled ? RichText.asText(this.state.doc.data.long_description) : 'Untitled'}
                </div>
                <div className='generic__post__one'>
                  {titled ? RichText.asText(this.state.doc.data.contact) : 'Untitled'}
                </div>
                <div className='generic__post__one'>
                  {titled ? RichText.asText(this.state.doc.data.address) : 'Untitled'}
                </div>
              </div>
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
