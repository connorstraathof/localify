import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import SubmissionList from './SubmissionBuild/SubmissionList'
import SubmissionForm from './SubmissionBuild/SubmissionForm'

class SubmissionMain extends Component {
  constructor(props) {
    super(props)

    this.state = {
      submissions: [],
      loading: false
    }

    this.addSubmission = this.addSubmission.bind(this)
  }

  componentDidMount() {
    // loading
    this.setState({ loading: true })

    // get all the comments
    fetch('http://localhost:7777')
      .then(res => res.json())
      .then(res => {
        this.setState({
          submissions: res,
          loading: false
        })
      })
      .catch(err => {
        this.setState({ loading: false })
      })
  }

  /**
   * Add new comment
   * @param {Object} submission
   */
  addSubmission(submission) {
    this.setState({
      loading: false,
      submissions: [submission, ...this.state.submissions]
    })
  }

  render() {
    return (
        <div className='submission__main-container'>
            <div className='submission__header-container'>
            <h6 className='submission__header'>LEAVE YOUR FEEDBACK</h6>
            <div className='submission__br'/>
            <div className='submission__subheader-container'>
            <p className='submission__subheader'>LET US KNOW WHAT YOU LIKED OR DISLIKED ABOUT A BUSINESS YOU VISITED</p>
            <div className='submission__subheader__br-container'>
            <div className='submission__subheader__br'/>
            </div>
            
            <p className='submission__warning'>PLEASE NOTE THAT PROFANITY AND DISCRIMINATORY COMMENTS WILL RESULT IN BEING BANNED FROM LOCALIFY</p>
            </div>
            </div>
      <div className='submission__container'>
        <div className='row'>
          <div className='col-4  pt-3 border-right'>
            <SubmissionForm addSubmission={this.addSubmission} />
          </div>
          <div className='col-8  pt-3 bg-white'>
            <SubmissionList loading={this.state.loading} submissions={this.state.submissions} />
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default SubmissionMain