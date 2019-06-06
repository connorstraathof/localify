import React, { Component, PropTypes } from 'react'
import '../../Styles/Search/Search.css'
import axios from 'axios'
import {Button} from 'react-bootstrap';
import { Redirect } from 'react-router'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          results: [],
          term: '',
        };
    
        this.submit = this.submit.bind(this);
        this.changeTerm = this.changeTerm.bind(this);
      }
    
      changeTerm(event) {
        this.setState({term: event.target.value});
      }
    
      submit(event) {
        let url = 'http://localhost:3000/' + encodeURI(this.state.term) + '&json=1';
        axios.get(url)
          .then(response => {
            let data = {
              results: response.data,
            };
            console.log(response.data)
            this.setState(data);
            console.log(data)
          })
          .catch(error => console.log(error));
      }

  render() {
    return (
      <div>
        <form id='demo-2' onSubmit={this.submit}>
          <input
            type='search'
            placeholder='Search'
            onChange={this.changeTerm}
          />
          <Button type="submit" bsstyle="primary">Find</Button>
        </form>
        {this.state.results.length > 0 &&
          <Redirect to={{
            state: { results: this.state.results }
          }}/>
        }
      </div>
    )
  }
}
export default Search
