import React, { Component } from 'react';

class BaseModal extends Component {
  // Init of the component before it is mounted.
  constructor(props) {
    super(props);
  }

  // Add listeners immediately after the component is mounted.
  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp, false);
    document.addEventListener('click', this.handleOutsideClick, false);
  }

  // Remove listeners immediately before a component is unmounted and destroyed.
  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp, false);
    document.removeEventListener('click', this.handleOutsideClick, false);
  }

  // Handle the key press event.
  handleKeyUp = e => {
    const { onClose } = this.props;
    const keys = {
      // On ESC key
      27: () => {
        e.preventDefault();
        onClose();
        window.removeEventListener('keyup', this.handleKeyUp, false);
      }
    };

    if (keys[e.keyCode]) {
      keys[e.keyCode]();
    }
  };

  // Handle the mouse click on browser window.
  handleOutsideClick = e => {
    const { onClose } = this.props;

    if (this.modal && !this.modal.contains(e.target)) {
      onClose();
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
  };

  render() {
    const { onClose, children } = this.props;

    return (
      <div className="BaseModal-overlay">
        <div className="BaseModal" ref={elem => (this.modal = elem)}>
          <div className="BaseModal-content">{children}</div>
        </div>

        <button type="button" className="BaseModal-Close" onClick={onClose} />
      </div>
    );
  }
}

export default BaseModal;
