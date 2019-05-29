import React from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import '../../Styles/Join/Join.css'

export default class Join extends React.Component {
  render() {
    return (
      <div className='join'>
        <div className='join__container'>
          <Form>
            <FormGroup>
              <Label>
                <h1>Join Localify</h1>
              </Label>
            </FormGroup>
            <FormGroup row>
              <Label for='exampleCompany' sm={2}>
                Company Name
              </Label>
              <Col sm={10}>
                <Input type='company' name='company' id='signup__name' placeholder='company name' />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for='exampleSelect' sm={2}>
                Company Type
              </Label>
              <Col sm={10}>
                <Input type='select' name='select' id='exampleSelect' placeholder='company type'>
                  <option value='' disabled selected>
                    company type
                  </option>
                  <option value='artisanal'>Artisan</option>
                  <option value='artist'>Artist</option>
                  <option value='cafe'>Cafe</option>
                  <option value='grocery'>Grocery</option>
                  <option value='food'>Food</option>
                  <option value='shop'>Shop</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for='exampleText' sm={2}>
                Description
              </Label>
              <Col sm={10}>
                <Input
                  type='textarea'
                  name='text'
                  id='exampleText'
                  placeholder='tell us about your company'
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for='exampleFile' sm={2}>
                File
              </Label>
              <Col sm={10}>
                <Input type='file' name='file' id='exampleFile' />
                <FormText color='muted'>
                  This is some placeholder block-level help text for the above input. It's a bit
                  lighter and easily wraps to a new line.
                </FormText>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for='checkbox2' sm={2} />
              <Col sm={{ size: 10 }}>
                <FormGroup check>
                  <Label check>
                    <Input type='checkbox' id='checkbox2' /> By checking this button I agree that
                    the information given is legitimate
                  </Label>
                </FormGroup>
              </Col>
            </FormGroup>
            <FormGroup check row>
              <Col sm={{ size: 10, offset: 2 }}>
                <Button>Submit</Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    )
  }
}
