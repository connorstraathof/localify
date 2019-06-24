import React from 'react'
import { Navbar,  Button} from 'reactstrap'
import ExploreModal from '../Tools/Modals/Explore'
import SearchModal from '../Tools/Modals/Search'
import '../../Styles/Navigation/Navigation.css'



export default class Navigation extends React.Component {

  render() {
    return (
      <div>
        <Navbar id='nav'>
          <div className='nav__left'>
          <Button id='localify' href='/'>
            LOCALIFY
          </Button>
          </div>
          <div className='nav__right'>
          <Button id='nav__button' href='/about'>
            <div className='about__logo'/>
            <div className='nav__button-title'>ABOUT</div>
            </Button>
          <div className='nav-break'/>
          <ExploreModal />
          <div className='nav-break'/>
          <Button id='nav__button' href='/join'>
            <div className='join__logo'/>
            <div className='nav__button-title'>JOIN</div>
          </Button>
          <div className='nav-break'/>
          <SearchModal />
          <div id='content' />
          </div>
        </Navbar>
      </div>
    )
  }
}
