import React from 'react'
import NotFound from '../../Tools/NotFound/NotFound'
import { RichText, Date } from 'prismic-reactjs'
import Prismic from 'prismic-javascript'
import { Helmet } from 'react-helmet'
import Loader from '../../Tools/Loaders/Loader/Loader'
import '../../../Styles/Generic/Generic.css'

export default class Foods extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      doc: null,
      notFound: false,
      posts: []
    }
    if (props.prismicCtx) {
      this.fetchPage(props)
    }
  }

  componentDidUpdate(prevProps) {
    this.props.prismicCtx.toolbar()
    if (!prevProps.prismicCtx) {
      this.fetchPage(this.props)
    }
  }

  fetchPage(props) {
    // We are using the function to get single type document
    return props.prismicCtx.api.getSingle('drinks_home').then(doc => {
      if (doc) {
        // We put the retrieved content in the state as a doc variable
        this.setState({ doc })
        props.prismicCtx.api
          .query(
            // Get the blog posts in descending order
            Prismic.Predicates.at('document.type', 'drinks_post'),
            { orderings: '[my.post.date desc]' }
          )
          .then(res => {
            this.setState({ posts: res.results })
          })
      } else {
        // We changed the state to display error not found if no matched doc
        this.setState({ notFound: !doc })
      }
    })
  }

  firstParagraph(post) {
    // Find the first text slice of post's body
    let firstTextSlice = post.data.body.find(slice => slice.slice_type === 'text')
    if (firstTextSlice != null) {
      // Set the character limit for the text we'll show in the homepage
      const textLimit = 300
      let text = RichText.asText(firstTextSlice.primary.text)
      let limitedText = text.substring(0, textLimit)

      if (text.length > textLimit) {
        // Cut only up to the last word and attach '...' for readability
        return <p>{limitedText.substring(0, limitedText.lastIndexOf(' ')) + '...'}</p>
      } else {
        // If it's shorter than the limit, just show it normally
        return <p>{text}</p>
      }
    } else {
      // If there are no slices of type 'text', return nothing
      return null
    }
  }

  blogPostsSection() {
    return (
      <div className='blog-main'>
        {/* Working from the array of all blog posts, we process each one */}
        {this.state.posts.map(post => {
          const logo = { backgroundImage: 'url(' + post.data.logo.url + ')' }
          /* Store the date as a Date object so we can format it to whatever we need */
          let postDate = Date(post.data.date)
          /* Default title when post has no title set */
          const defaultTitle = [<h1 key='title'>Untitled</h1>]
          return (
<a
              className='blog-post'
              data-wio-id={post.id}
              key={post.id}
              href={this.props.prismicCtx.linkResolver(post)}
            >
              <h2>
                {/* We render a link to a particular post using the linkResolver for the url and its title */}

                <div className='home'>
                  <div className='blog-avatar' style={logo} />
                </div>

                <div className='info__container'>
                  <div className='generic__post__title'>
                    <h1>{RichText.render(post.data.title, this.props.prismicCtx.linkResolver)}</h1>
                  </div>
                  {RichText.render(post.data.description, this.props.prismicCtx.linkResolver)}
                  {RichText.render(post.data.address, this.props.prismicCtx.linkResolver)}
                  {RichText.render(post.data.contact, this.props.prismicCtx.linkResolver)}
                </div>
              </h2>
              <p className='blog-post-meta'>
                <time className='created-at'>
                  {/* Format the date to M d, Y */}
                  {postDate
                    ? new Intl.DateTimeFormat('en-US', {
                        month: 'short',
                        day: '2-digit',
                        year: 'numeric'
                      }).format(postDate)
                    : ''}
                </time>
              </p>
              {/* Renders a small preview of the post's text */}
              {this.firstParagraph(post)}
            </a>
          )
        })}
      </div>
    )
  }

  shopHead() {
    // Using the queried blog_home document data, we render the top section
    const avatar = { backgroundImage: 'url(' + this.state.doc.data.image.url + ')' }
    return (
      <div className='home'>
        <div className='blog-avatar' style={avatar} />
        <h1 className='blog-title'>{RichText.asText(this.state.doc.data.headline)}</h1>
        <p className='blog-description'>{RichText.asText(this.state.doc.data.description)}</p>
      </div>
    )
  }
  goBack() {
    return (
      <div>
        <div className='previous'>
          <a className='generic__previous-button' href='/'>HOME</a>
        </div>
      </div>
    )
  }

  render() {
    if (this.state.doc) {
      return (
        <div>
          <Helmet>
            <title>{RichText.asText(this.state.doc.data.headline)}</title>
          </Helmet>
          {this.shopHead()}
          {this.goBack()}
          {this.blogPostsSection()}
        </div>
      )
    } else if (this.state.notFound) {
      return <NotFound />
    }
    return <Loader />
  }
}

