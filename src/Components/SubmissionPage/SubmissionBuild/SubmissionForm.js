import React, { Component } from 'react'

export default class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      error: '',

      recommendation: {
        remark: ''
      }
    }

    // bind context to methods
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  /**
   * Handle form input field changes & update the state
   */
  handleFieldChange = event => {
    const { value, remark } = event.target

    this.setState({
      ...this.state,
      recommendation: {
        ...this.state.recommendation,
        [remark]: value
      }
    })
  }

  /**
   * Form submit handler
   */
  onSubmit(e) {
    // prevent default form submission
    e.preventDefault()

    if (!this.isFormValid()) {
      this.setState({ error: 'All fields are required.' })
      return
    }

    // loading status and clear error
    this.setState({ error: '', loading: true })

    // persist the recommendations on server
    let { recommendation } = this.state
    fetch('http://localhost:7778', {
      method: 'post',
      body: JSON.stringify(recommendation)
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          this.setState({ loading: false, error: res.error })
        } else {
          // add time return from api and push recommendation to parent state
          recommendation.time = res.time
          this.props.addRecommendation(recommendation)

          // clear the message box
          this.setState({
            loading: false,
            recommendation: { ...recommendation, remark: '' }
          })
        }
      })
      .catch(err => {
        this.setState({
          error: 'Something went wrong while submitting form.',
          loading: false
        })
      })
  }

  /**
   * Simple validation
   */
  isFormValid() {
    return this.state.recommendation.remark !== ''
  }

  renderError() {
    return this.state.error ? <div className='alert alert-danger'>{this.state.error}</div> : null
  }

  render() {
    return (
      <React.Fragment>
        <form method='post' onSubmit={this.onSubmit}>
          <div className='form-group'>
            <input
              onChange={this.handleFieldChange}
              value={this.state.recommendation.remark}
              className='form-control'
              placeholder='PLACE YOU VISITED'
              remark='remark'
              type='text'
            />
          </div>

          {this.renderError()}

          <div className='form-group'>
            <button disabled={this.state.loading} className='comment-button'>
              COMMENT
            </button>
          </div>
        </form>
      </React.Fragment>
    )
  }
}
