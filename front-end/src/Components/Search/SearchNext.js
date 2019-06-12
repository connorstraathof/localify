import React, {Component} from 'react'
import SearchInput, {createFilter} from 'react-search-input'
import '../../Styles/Search/Search.css'
import shops from '../../Data/Shops'
 
const KEYS_TO_FILTERS = ['name']
 
class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }
 
  render () {
    const filteredShops = shops.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
 
    return (
      <div>
        <form id='demo-2'>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        {filteredShops.map(shops => {
          return (
            <div className="mail" key={shops.id}>
              <div className="from">{shops.name}</div>
            </div>
          )
        })}
        </form>
      </div>
    )
  }
 
  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
}
export default Search