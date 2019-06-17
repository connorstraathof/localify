import React from 'react'
import '../../Styles/Footer/Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
            <div className='footer__container'>
                <div className='footer__left'>
                    <div className='footer__legal'>
                        <div className='footer__copyright'/>
                        <h1 className='footer__logo'>2019 LOCALIFY INC</h1>
                    </div>
                </div>
                <div className='footer__right'>
                    <div className='footer__aid'>
                    <div>CONTACT</div>
                    <div className='footer-br'/>
                    <div>HELP</div>
                    <div className='footer-br'/>
                    <div>SMTH</div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default Footer