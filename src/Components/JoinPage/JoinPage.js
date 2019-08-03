import React from 'react'
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import '../../Styles/Join/Join.css'

class JoinPage extends React.Component {
  joinForm() {
    return (
      <Form id='main__container'>
        <FormGroup id='form__rows'>
          <Label id='label'>Email</Label>
          <Col>
            <Input type='email' name='email' placeholder='johndoe@example.com' />
          </Col>
        </FormGroup>
        <FormGroup id='form__rows'>
          <Label id='label'>Company Type</Label>
          <Col>
            <Input type='select' name='select' placeholder='company type'>
              <option value='artist'>ARTIST</option>
              <option value='artisan'>ARTISAN</option>
              <option value='cafe'>CAFE</option>
              <option value='drinks'>DRINKS</option>
              <option value='grocery'>GROCERY</option>
              <option value='shop'>SHOP</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup id='form__rows'>
          <Label id='label'>Description</Label>
          <Col>
            <Input type='textarea' name='text' placeholder='Tell us about yourself...' />
          </Col>
        </FormGroup>
        <div id='form__submit'>
          <FormGroup>
            <Col>
              <Button id='join-form__button'>Submit</Button>
            </Col>
          </FormGroup>
        </div>
      </Form>
    )
  }
  render() {
    return (
      <div className='join-page'>
        <div className='join-page__organizer'>
          <div className='join-header__container'>
            <div className='join-page__br' />
            <div className='join-header__title'>JOIN</div>
            <p className='join-header-text'>Interested in adding your business to Localify?</p>
            <p className='join-header-text'>
              Please go ahead and fill out the form below so we can review and get back to you!
            </p>
            <div className='join-page__br' />
          </div>
          <div className='join-form__container'>{this.joinForm()}</div>
        </div>
      </div>
    )
  }
}
export default JoinPage
