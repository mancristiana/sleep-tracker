import React, { Component } from 'react';
import { Button, Input, TimePicker } from './../shared';
import { Form } from 'react-advanced-form';

class SleepModal extends Component {
  render() {
    return (
      <div className="SleepModal">
        <div className="Modal-heading">Add Sleep</div>
        <div className="Modal-content">
          <Form>
            <Input label="Comment" name="comment" />
            <TimePicker label="Bed time" name="timePicker" required />
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
