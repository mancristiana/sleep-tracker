import React, { Component } from 'react';
import { Button } from './../shared';

class SleepModal extends Component {
  render() {
    return (
      <div className="SleepModal">
        <div className="Modal-heading">Add Sleep</div>
        <div className="Modal-content">Form will go here</div>
        <div className="Modal-footer">
          <Button type="primary">Save</Button>
        </div>
      </div>
    );
  }
}

export default SleepModal;
