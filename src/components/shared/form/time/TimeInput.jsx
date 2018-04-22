import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createField, fieldPresets } from 'react-advanced-form';
import TimePicker from './TimePicker';
import { Modal } from './../../Modal';

class TimeInput extends Component {
  static propTypes = {
    /* General */
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    hint: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),

    /* Inherites */
    fieldProps: PropTypes.object.isRequired,
    fieldState: PropTypes.object.isRequired
  };
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
    const { fieldProps, fieldState, id, name, label, hint } = this.props;
    const { required, validating, valid, invalid, errors } = fieldState;

    const inputClassNames = [
      'Form-input',
      validating && 'is-validating',
      valid && 'is-valid',
      invalid && 'is-invalid'
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div className="Form-group">
        {label && (
          <label htmlFor={id || name}>
            {label}
            {required && ' *'}
          </label>
        )}

        <input
          id={id || name}
          className={inputClassNames}
          {...fieldProps}
          onFocus={() => this.handleToggleModal()}
        />

        {hint && <small className="Form-text">{hint}</small>}

        {errors &&
          errors.map((error, index) => (
            <div key={index} className="Form-error">
              {error}
            </div>
          ))}

        {showModal && (
          <Modal width={300} onClose={() => this.handleToggleModal()}>
            <TimePicker mode="24h" />
          </Modal>
        )}
      </div>
    );
  }
}

export default createField(fieldPresets.input)(TimeInput);
