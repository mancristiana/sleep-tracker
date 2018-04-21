import React, { Component } from 'react';
import { Button, Modal } from './../shared';
import SleepModal from './SleepModal';

class SleepModalLauncher extends Component {
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
          <Modal onClose={() => this.handleToggleModal()}>
            <SleepModal />
          </Modal>
        )}
      </div>
    );
  }
}

export default SleepModalLauncher;
