import React, { Component } from 'react';
import BaseModal from './BaseModal';
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
        <button
          type="button"
          className="SleepModalLauncher-Button"
          onClick={() => this.handleToggleModal()}>
          Open Modal
        </button>

        {showModal && (
          <BaseModal onClose={() => this.handleToggleModal()}>
            <SleepModal />
          </BaseModal>
        )}
      </div>
    );
  }
}

export default SleepModalLauncher;
