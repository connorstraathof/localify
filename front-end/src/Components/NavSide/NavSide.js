// import React, { Component } from 'react'
// import { Collapse, Button, CardBody, Card } from 'reactstrap'
// import DropDownSide from './DropDownSide/DropDownSide'
// import '../../Styles/NavSide/NavSide.css'

// class NavSide extends Component {
//   constructor(props) {
//     super(props)
//     this.toggle = this.toggle.bind(this)
//     this.state = { collapse: false }
//   }

//   toggle() {
//     this.setState(state => ({ collapse: !state.collapse }))
//   }

//   render() {
//     return (
//       <div className='nav-side__main'>
//         <div id='nav-side__links'>
//           <Button color='primary' onClick={this.toggle} style={{ marginBottom: '1rem' }}>
//             Toggle
//           </Button>
//           <Collapse isOpen={this.state.collapse}>
//             <Card>
//               <CardBody>
//                 <DropDownSide />
//               </CardBody>
//             </Card>
//           </Collapse>
//         </div>
//       </div>
//     )
//   }
// }

// export default NavSide

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavSide extends Component {
  navigationLinks() {
    return [
      <ul>
        <li key={1}>
          <Link to='about'>ABOUT</Link>
        </li>
        <li key={2}>
          <Link to='blog'>BLOG</Link>
        </li>
        <li key={3}>
          <Link to='portfolio'>PORTFOLIO</Link>
        </li>
      </ul>
    ]
  }
  handleResize() {
    this.setState({ windowWidth: window.innerWidth })
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this))
  }
  renderMobileNav() {
    if (this.state.mobileNavVisible) {
      return this.navigationLinks()
    }
  }

  handleNavClick() {
    if (!this.state.mobileNavVisible) {
      this.setState({ mobileNavVisible: true })
    } else {
      this.setState({ mobileNavVisible: false })
    }
  }
  constructor(props) {
    super(props)
    this.state = {
      windowWidth: window.innerWidth,
      mobileNavVisible: false
    }
  }
  renderNavigation() {
    if (this.state.windowWidth <= 1080) {
      return [
        <div className='mobile_nav'>
          <p onClick={this.handleNavClick.bind(this)}>
            <i class='material-icons'>view_headline</i>
          </p>
          {this.renderMobileNav()}
        </div>
      ]
    } else {
      return [
        <div key={7} className='nav_menu'>
          {this.navigationLinks()}
        </div>
      ]
    }
  }
  render() {
    return (
      <div className='nav_container'>
        <div className='site_title'>
          <Link to='/'>WEBSITE TITLE</Link>
        </div>
        {this.renderNavigation()}
      </div>
    )
  }
}

export default NavSide
