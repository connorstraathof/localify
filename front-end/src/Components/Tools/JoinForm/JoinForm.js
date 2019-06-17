import React from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import '../../../Styles/JoinForm/JoinForm.css'

export default class Example extends React.Component {
  render() {
    return (
      <Form id='main__container'>
        <div id='form__row'>
          <FormGroup id='form__row'>
            <Label id='label' for='exampleEmail' sm={2}>
              Email
            </Label>
            <Col sm={10}>
              <Input type='email' name='email' placeholder='johndoe@example.com' />
            </Col>
          </FormGroup>
        </div>
        <div id='form__row'>
          <FormGroup id='form__row'>
            <Label id='label' for='exampleSelect' sm={2}>
              Company Type
            </Label>
            <Col sm={10}>
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
        </div>
        <div id='form__row'>
          <FormGroup id='form__row'>
            <Label id='label' for='exampleText' sm={2}>
              Description
            </Label>
            <Col sm={10}>
              <Input type='textarea' name='text' placeholder='Tell us about yourself...' />
            </Col>
          </FormGroup>
        </div>
        <div id='form__submit'>
          <FormGroup >
            <Col sm={{ size: 10, offset: 2 }}>
              <Button id='form__s-button'>Submit</Button>
            </Col>
          </FormGroup>
        </div>
      </Form>
    )
  }
}
