import React from 'react'
import '../../Styles/Footer/Footer.css'
import HelpModal from '../Tools/Modals/Help'
import ContactModal from '../Tools/Modals/Contact'

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer__container'>
          <div className='footer__left'>
            <div className='footer__legal'>
              <div className='footer__copyright' />
              <h1 className='footer__logo'>2019 LOCALIFY INC</h1>
            </div>
          </div>
          <div className='footer__right'>
            <div className='footer__aid'>
              <ContactModal />
              <div className='footer-br' />
              <HelpModal />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Footer
