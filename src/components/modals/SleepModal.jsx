import React, { Component } from 'react';
import { Button, Input } from './../shared';
import { Form } from 'react-advanced-form';

class SleepModal extends Component {
  render() {
    return (
      <div className="SleepModal">
        <div className="Modal-heading">Add Sleep</div>
        <div className="Modal-content">
          <Form>
            <Input name="userEmail" required />
            <Input name="userPassword" type="password" required />
          </Form>
        </div>
        <div className="Modal-footer">
          <Button type="primary">Save</Button>
        </div>
      </div>
    );
  }
}

export default SleepModal;
