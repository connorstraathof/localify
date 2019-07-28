import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import CommentList from './CommentBuild/CommentList'
import CommentForm from './CommentBuild/CommentForm'
import '../../Styles/Comment/Comment.css'

class MainComment extends Component {
  constructor(props) {
    super(props)

    this.state = {
      comments: [],
      loading: false
    }

    this.addComment = this.addComment.bind(this)
  }

  componentDidMount() {
    // loading
    this.setState({ loading: true })

    // get all the comments
    fetch('http://localhost:7777')
      .then(res => res.json())
      .then(res => {
        this.setState({
          comments: res,
          loading: false
        })
      })
      .catch(err => {
        this.setState({ loading: false })
      })
  }

  /**
   * Add new comment
   * @param {Object} comment
   */
  addComment(comment) {
    this.setState({
      loading: false,
      comments: [comment, ...this.state.comments]
    })
  }

  render() {
    return (
        <div className='main-container'>
            <div className='header-container'>
            <h6 className='comment-header'>LEAVE YOUR FEEDBACK</h6>
            <div className='comment-br'/>
            <div className='subheader-container'>
            <p className='comment-subheader'>LET US KNOW WHAT YOU LIKED OR DISLIKED ABOUT A BUSINESS YOU VISITED</p>
            <p className='comment-subheader__two'>FEEL FREE TO ENTER ANONYMOUS INSTEAD OF YOUR NAME FOR PRIVACY</p>
            <div className='comment-subheader__br-container'>
            <div className='comment-subheader__br'/>
            </div>
            
            <p className='comment-warning'>PLEASE NOTE THAT PROFANITY AND DISCRIMINATORY COMMENTS WILL RESULT IN BEING BANNED FROM LOCALIFY</p>
            </div>
            </div>
      <div className='comment-container'>
        <div className='row'>
          <div className='col-4  pt-3 border-right'>
            <CommentForm addComment={this.addComment} />
          </div>
          <div className='col-8  pt-3 bg-white'>
            <CommentList loading={this.state.loading} comments={this.state.comments} />
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default MainComment
