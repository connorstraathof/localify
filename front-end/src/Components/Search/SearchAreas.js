import React from 'react'
import '../../Styles/Generic/Generic.css'

const Shops = [
  {
    id: '1',
    name: 'JJ Bean',
    area: 'Commercial Drive EastVan Cafe',
    route: '/cafes/6'
  },
  {
    id: '2',
    name: 'Elysian',
    area: 'Mount Pleasant Main Cafe',
    route: '/cafes/4'
  },
  {
      id: '3',
      name: 'Le Marché St George',
      area: 'Mount Pleasant Main Cafe',
      route: '/cafes/2'
  },
  {
    id: '4',
    name: 'Revolver',
    area: 'Gastown Downtown Cafe',
    route: '/cafes/1'
},
{
    id: '5',
    name: '49th Parellel',
    area: 'Mount Pleasant Main Cafe',
    route: '/cafes/3'
},
{
    id: '6',
    name: 'Milano Coffee',
    area: 'Mount Pleasant Main Cafe',
    route: '/cafes/5'
},
{
    id: '7',
    name: 'The Libra Room',
    area: 'Commercial Drive EastVan Drinks Bar Music',
    route: '/drinks/26'
},
{
    id: '8',
    name: 'The Emerald',
    area: 'Chinatown Drinks Bar',
    route: '/drinks/25'
},
{
    id: '9',
    name: 'The Diamond',
    area: 'Gastown Downtown Drinks Bar',
    route: '/drinks/24'
},
{
    id: '10',
    name: 'Strange Fellows Brewing',
    area: 'Commercial Drive EastVan Beer Brewery Drinks',
    route: '/drinks/23'
},
{
    id: '11',
    name: '33 Acres',
    area: 'Mount Pleasant Main Beer Brewery Drinks',
    route: '/drinks/22'
},
{
    id: '12',
    name: 'Storm Brewing',
    area: 'Commercial Drive EastVan Beer Brewery Drinks',
    route: '/drinks/21'
},
{
    id: '13',
    name: 'Hundy',
    area: 'Kitsilano Food Burgers',
    route: '/food/20'
},
{
    id: '14',
    name: 'DD Mau',
    area: 'Chinatown Vietnamese Dinner Food',
    route: '/food/19'
},
{
    id: '15',
    name: 'Hunnybee Bruncheonette',
    area: 'Mount Pleasant Main Brunch Food',
    route: '/food/18'
},
{
    id: '16',
    name: 'Pepinos Spaghetti House',
    area: 'Commercial Drive EastVan Food Dinner Italian',
    route: '/food/17'
},
{
    id: '17',
    name: 'Down Low Chicken Shack',
    area: 'Commercial Drive EastVan Food Lunch Dinner',
    route: '/food/16'
},
{
    id: '18',
    name: 'Como Taperia',
    area: 'Mount Pleasant Main Spanish Dinner Food',
    route: '/food/15'
},
{
    id: '19',
    name: 'Bronze Age',
    area: 'Vancouver Shop Clothing Online',
    route: '/shops/12'
},
{
    id: '20',
    name: 'Fjordlife',
    area: 'North Vancouver Shop Clothing Online',
    route: '/shops/14'
},
{
    id: '21',
    name: 'The Block',
    area: 'Gastown Downtown Shop Clothing',
    route: '/shops/11'
},
{
    id: '26',
    name: 'E:CLE',
    area: 'Gastown Downtown Shop Clothing',
    route: '/shops/13'
},
{
    id: '22',
    name: 'Les Amis Du Fromage',
    area: 'Chinatown Grocery Food ',
    route: '/grocery/8'
},
{
    id: '23',
    name: 'Home on the Range Organics Ltd.',
    area: 'Mount Pleasant Main Grocery',
    route: '/grocery/9'
},
{
    id: '24',
    name: 'Famous Foods',
    area: 'Mount Pleasant Main Grocery',
    route: '/grocery/7'
},
{
    id: '25',
    name: 'The Federal Store',
    area: 'Mount Pleasant Main Grocery',
    route: '/grocery/10'
}

]

function searchingFor(term) {
  return function(x) {
    return x.area.toLowerCase().includes(term.toLowerCase()) || !term
  }
}

class SearchArea extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      Shops: Shops,
      term: ''
    }
    this.searchHandler = this.searchHandler.bind(this)
  }
  searchHandler(event) {
    this.setState({ term: event.target.value })
  }
  render() {
    const { term, Shops } = this.state
    return (
      <div className='search'>
        <div className='search__container'>
          <form>
            <input className='search__input' type='text' onChange={this.searchHandler} value={term} />
          </form>
          </div>
          <div className='search__container__two'>
          {Shops.filter(searchingFor(term)).map(shop => {
            return (
              <div className='search__shops' key={shop.id}>
                <h1>{shop.name}</h1>
                <a className='search__shops__route' href={shop.route}>Shop</a>
              </div>
            )
          })}
          </div>
      </div>
    )
  }
}
export default SearchArea
