import React, { Component } from 'react';
import { Button, Modal, Input, TimePicker } from './../shared';
import { Form } from 'react-advanced-form';

class SleepModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleToggleModal = e => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  render() {
    const { showModal } = this.state;
    return (
      <div className="SleepModalLauncher">
        <Button type="primary" onClick={() => this.handleToggleModal()}>
          Add new sleep
        </Button>

        {showModal && (
          <Modal onClose={() => this.handleToggleModal()} hasCloseButton>
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
          </Modal>
        )}
      </div>
    );
  }
}

export default SleepModal;
