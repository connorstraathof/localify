import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import CommentList from './SubmissionBuild/SubmissionList'
import CommentForm from './SubmissionBuild/SubmissionForm'
import '../../Styles/Comment/Comment.css'

class MainComment extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recommendations: [],
      loading: false
    }

    this.addRecommendation = this.addRecommendation.bind(this)
  }

  componentDidMount() {
    // loading
    this.setState({ loading: true })

    // get all the recommendations
    fetch('http://localhost:7778')
      .then(res => res.json())
      .then(res => {
        this.setState({
          recommendations: res,
          loading: false
        })
      })
      .catch(err => {
        this.setState({ loading: false })
      })
  }

  /**
   * Add new recommendation
   * @param {Object} recommendation
   */
  addRecommendation(recommendation) {
    this.setState({
      loading: false,
      recommendations: [recommendation, ...this.state.recommendations]
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
            <div className='comment-subheader__br-container'>
            <div className='comment-subheader__br'/>
            </div>
            
            <p className='comment-warning'>PLEASE NOTE THAT PROFANITY AND DISCRIMINATORY COMMENTS WILL RESULT IN BEING BANNED FROM LOCALIFY</p>
            </div>
            </div>
      <div className='comment-container'>
        <div className='row'>
          <div className='col-4  pt-3 border-right'>
            <CommentForm addRecommendation={this.addRecommendation} />
          </div>
          <div className='col-8  pt-3 bg-white'>
            <CommentList loading={this.state.loading} recommendations={this.state.recommendations} />
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default MainComment
