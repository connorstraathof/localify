import React, { Component } from "react";

export default class SubmissionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: "",

      submission: {
        business: "",
        note: ""
      }
    };

    // bind context to methods
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  /**
   * Handle form input field changes & update the state
   */
  handleFieldChange = event => {
    const { value, business } = event.target;

    this.setState({
      ...this.state,
      submission: {
        ...this.state.submission,
        [business]: value
      }
    });
  };

  /**
   * Form submit handler
   */
  onSubmit(e) {
    // prevent default form submission
    e.preventDefault();

    if (!this.isFormValid()) {
      this.setState({ error: "All fields are required." });
      return;
    }

    // loading status and clear error
    this.setState({ error: "", loading: true });

    // persist the comments on server
    let { submission } = this.state;
    fetch("http://localhost:7777", {
      method: "post",
      body: JSON.stringify(submission)
    })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          this.setState({ loading: false, error: res.error });
        } else {
          // add time return from api and push comment to parent state
          submission.time = res.time;
          this.props.addSubmission(submission);

          // clear the message box
          this.setState({
            loading: false,
            submission: { ...submission, business: "", note: "" }
          });
        }
      })
      .catch(err => {
        this.setState({
          error: "Something went wrong while submitting form.",
          loading: false
        });
      });
  }

  /**
   * Simple validation
   */
  isFormValid() {
    return this.state.submission.business !== "" && this.state.submission.note !== "";
  }

  renderError() {
    return this.state.error ? (
      <div className="alert alert-danger">{this.state.error}</div>
    ) : null;
  }


  render() {
    return (
      <React.Fragment>
        <form method="post" onSubmit={this.onSubmit}>
          <div className="form-group">
            <input
              onChange={this.handleFieldChange}
              value={this.state.submission.business}
              className="form-control"
              placeholder="BUSINESS NAME"
              business="business"
              type="text"
            />
          </div>
          <div className="form-group">
            <textarea
              onChange={this.handleFieldChange}
              value={this.state.submission.note}
              className="form-control"
              placeholder="TELL US WHY THIS WOULD BE A GOOD BUSINESS FOR US TO FEATURE"
              business="note"
              rows="5"
            />
          </div>

          {this.renderError()}

          <div className="form-group">
            <button disabled={this.state.loading} className="submission-button">
              COMMENT
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}