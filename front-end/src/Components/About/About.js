import React from 'react'
import ModalRecommend from './ModalR'

class About extends React.Component {
    render() {
        return(
            <div className='about'>
                <div className='about__break-upper'/>
                <div className='about__header-container'>
                    <h1 className='about__header'>ABOUT LOCALIFY</h1>
                </div>
                <div className='about__break-upper'/>
                <div className='about__container'>
                    <div className='about__paragraphs'>
                    <p className='about__paragraph1'>First of all, thank you for visiting our page and supporting our dream!</p>
                    <p>Localify began with a dream of an app to act as a support system to the local/independent shops. 
                        Our goal is to make it easy for visitors and locals to find and explore places that originated in the city they are situated in. 
                        Rather than supplying information about chains, and big brands Localify focuses on small local operations.
                    </p>
                    <p>We are always looking to expand our reach, and support net, so if you know of a business that you could see on this platform click the recommend link below.</p>
                    <p>If you like what we're doing and feel like donating to the project, please click the donate link below.</p>
                    <div className='about__break'/>
                    <div className='about__button-container'>
                        <button id='about__button'>DONATE</button>
                        <button id='about__button'><ModalRecommend/></button>
                    </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default About