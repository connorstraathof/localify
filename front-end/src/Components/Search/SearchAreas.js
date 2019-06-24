import React from 'react'
import '../../Styles/Search/Search.css'
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'

const Shops = [
  {
    id: '1',
    name: 'JJ Bean',
    area: 'Commercial Drive JJBean EastVan Cafe',
    route: '/cafes/6'
  },
  {
    id: '2',
    name: 'Elysian',
    area: 'Mount Pleasant Elysian Main Cafe',
    route: '/cafes/4'
  },
  {
    id: '3',
    name: 'Le Marché',
    area: 'Mount Pleasant LeMarcheStGeorge Main Cafe',
    route: '/cafes/2'
  },
  {
    id: '4',
    name: 'Revolver',
    area: 'Gastown Revolver Downtown Cafe',
    route: '/cafes/1'
  },
  {
    id: '5',
    name: '49th Parellel',
    area: 'Mount Pleasant 49thParellel Main Cafe',
    route: '/cafes/3'
  },
  {
    id: '6',
    name: 'Milano Coffee',
    area: 'Mount Pleasant MilanoCoffee Main Cafe',
    route: '/cafes/5'
  },
  {
    id: '7',
    name: 'Libra Room',
    area: 'Commercial Drive LibraRoom EastVan Drinks Bar Music',
    route: '/drinks/26'
  },
  {
    id: '8',
    name: 'The Emerald',
    area: 'Chinatown Emerald Drinks Bar',
    route: '/drinks/25'
  },
  {
    id: '9',
    name: 'The Diamond',
    area: 'Gastown Diamond Downtown Drinks Bar',
    route: '/drinks/24'
  },
  {
    id: '10',
    name: 'Strange Fellows',
    area: 'Commercial Drive StrangeFellows EastVan Beer Brewery Drinks',
    route: '/drinks/23'
  },
  {
    id: '11',
    name: '33 Acres',
    area: 'Mount Pleasant 33Acres Main Beer Brewery Drinks',
    route: '/drinks/22'
  },
  {
    id: '12',
    name: 'Storm Brewing',
    area: 'Commercial Drive Storm EastVan Beer Brewery Drinks',
    route: '/drinks/21'
  },
  {
    id: '13',
    name: 'Hundy',
    area: 'Kitsilano Hundy Food Burgers',
    route: '/food/20'
  },
  {
    id: '14',
    name: 'DD Mau',
    area: 'Chinatown DDMau Vietnamese Dinner Food',
    route: '/food/19'
  },
  {
    id: '15',
    name: 'Hunnybee',
    area: 'Mount Pleasant Hunnybee Main Brunch Food',
    route: '/food/18'
  },
  {
    id: '16',
    name: 'Pepinos',
    area: 'Commercial Drive Pepinos EastVan Food Dinner Italian',
    route: '/food/17'
  },
  {
    id: '17',
    name: 'Down Low',
    area: 'Commercial Drive DownLow EastVan Food Lunch Dinner',
    route: '/food/16'
  },
  {
    id: '18',
    name: 'Como Taperia',
    area: 'Mount Pleasant Como Taperia Main Spanish Dinner Food',
    route: '/food/15'
  },
  {
    id: '19',
    name: 'Bronze Age',
    area: 'Vancouver Bronze Shop Clothing Online',
    route: '/shops/12'
  },
  {
    id: '20',
    name: 'Fjordlife',
    area: 'North Vancouver Fjordlife Shop Clothing Online',
    route: '/shops/14'
  },
  {
    id: '21',
    name: 'The Block',
    area: 'Gastown Downtown Block Shop Clothing',
    route: '/shops/11'
  },
  {
    id: '26',
    name: 'E:CLE',
    area: 'Gastown Downtown E:CLE Shop Clothing',
    route: '/shops/13'
  },
  {
    id: '22',
    name: 'Les Amis',
    area: 'Chinatown Les Amis Du Fromage Grocery Food ',
    route: '/grocery/8'
  },
  {
    id: '23',
    name: 'Home on the Range',
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
    area: 'Mount Pleasant Federalf Main Grocery',
    route: '/grocery/10'
  }
]

function searchingFor(term) {
  return function(x) {
    return x.area.toLowerCase().includes(term.toLowerCase()) || !term
  }
}

class SearchArea extends React.Component {
  popOver() {
    return (
      <div>
        <Button id='popover-button' type='button'>
          SEARCH TIPS
        </Button>
        <UncontrolledPopover trigger='focus' placement='bottom' target='popover-button'>
          <PopoverHeader>SEARCH BY..</PopoverHeader>
          <PopoverBody>
            <ul>
              <li>POPULAR LOCATION</li>
              <li>SHOP TYPE IE. CAFE</li>
              <li>SHOP NAME IE. JJ BEAN</li>
              <li>WHAT YOU'RE LOOKING FOR</li>
            </ul>
          </PopoverBody>
        </UncontrolledPopover>
      </div>
    )
  }
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
        <div>{this.popOver()}</div>
        <div className='search__container'>
          <input
            class='searchbar'
            type='text'
            onChange={this.searchHandler}
            value={term}
            placeholder='Search...'
          />
          <a id='btnSearch' class='btn-search'>
            <i class='fa fa-search' />
          </a>
        </div>
        <div className='search__container__two'>
          {Shops.filter(searchingFor(term)).map(shop => {
            return (
              <a className='search__shops' key={shop.id} href={shop.route}>
                <div className='search__shops__route'>
                  <h1 className='search__shop-name'>{shop.name}</h1>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    )
  }
}
export default SearchArea
