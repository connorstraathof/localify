import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class RecommendForm extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for='exampleEmail'>BUSINESS NAME</Label>
          <Input placeholder='Business name..' />
        </FormGroup>
        <FormGroup>
          <Label>Address</Label>
          <Input
            placeholder='Business Address..'
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" placeholder='Tell us about this business..'/>
        </FormGroup>
      </Form>
    )
  }
}
export default RecommendForm
