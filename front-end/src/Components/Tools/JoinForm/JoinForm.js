import React from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import '../../../Styles/Join/Join.css'

export default class Example extends React.Component {
  render() {
    return (
      <Form id='main__container'>
          <FormGroup id='form__rows'>
            <Label id='label' >
              Email
            </Label>
            <Col >
              <Input type='email' name='email' placeholder='johndoe@example.com' />
            </Col>
          </FormGroup>
          <FormGroup id='form__rows'>
            <Label id='label' >
              Company Type
            </Label>
            <Col >
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
            <Label id='label' >
              Description
            </Label>
            <Col>
              <Input type='textarea' name='text' placeholder='Tell us about yourself...' />
            </Col>
          </FormGroup>
        <div id='form__submit'>
          <FormGroup >
            <Col>
              <Button id='join-form__button'>Submit</Button>
            </Col>
          </FormGroup>
        </div>
      </Form>
    )
  }
}
