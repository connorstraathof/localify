import React from 'react'
import '../../Styles/Search/Search.css'
import {Button} from 'react-bootstrap';

class Search extends React.Component {
constructor(){
  super();
  this.state={
    search: 'Favourite Company ...'
  };
}
updateSearch(event){
  this.setState({search: event.target.value})
}
  render() {
    return (
      <div>
        <form id='demo-2'>
          <input
            type='search'
            placeholder='Search'
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
          />
        </form>
      </div>
    )
  }
}
export default Search
