import React, { Component } from 'react'
import CommentBox from './CommentBox'
import Comments from './Comments'
import '../../Styles/Comment/Comment.css'

class MainComment extends Component {
  constructor(props) {
    super(props)
    this.handleAddComment = this.handleAddComment.bind(this)
    this.state = {
      comments: []
    }
  }
  componentDidMount() {
    /*global Ably*/
    const channel = Ably.channels.get('comments')

    channel.attach()
    channel.once('attached', () => {
      channel.history((err, page) => {
        // create a new array with comments only in an reversed order (i.e old to new)
        const comments = Array.from(page.items, item => item.data)

        this.setState({ comments })

        channel.subscribe(msg => {
          const commentObject = msg.data
          this.handleAddComment(commentObject)
        })
      })
    })
  }
  handleAddComment(comment) {
    this.setState(prevState => {
      return {
        comments: prevState.comments.concat(comment)
      }
    })
  }
  render() {
    return (
      <div className='comment-section'>
        <div className='comment-section__container'>
          <section className='section'>
            <div className='container'>
              <div className='columns'>
                <div className='column is-half is-offset-one-quarter'>
                  <CommentBox handleAddComment={this.handleAddComment} />
                  <Comments comments={this.state.comments} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default MainComment
