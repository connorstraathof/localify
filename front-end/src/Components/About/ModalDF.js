import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label>Full Name</Label>
          <Input placeholder="Type your full name.." />
        </FormGroup>
        <FormGroup>
          <Label>Amount</Label>
          <Input placeholder="Amount you wish to donate.." />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Note</Label>
          <Input placeholder='Notes about your donation..' />
        </FormGroup>
      </Form>
    );
  }
}