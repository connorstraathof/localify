import React from 'react'
import JoinForm from '../Tools/JoinForm/JoinForm'
import '../../Styles/Join/Join.css'

class JoinPage extends React.Component {
  render() {
    return (
      <div className='join-page'>
        <div className='join-page__organizer'>
          <div className='join-header__container'>
              <div className='join-page__br'/>
            <div>JOIN</div>
            <p>
              Interested in adding your business to Localify? Please go ahead and fill out the form
              below so we can review and get back to you!
            </p>
            <div className='join-page__br'/>
          </div>
          <div className='join-form__container'>
            <JoinForm />
          </div>
        </div>
      </div>
    )
  }
}
export default JoinPage
