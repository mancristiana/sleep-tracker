import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createField, fieldPresets } from 'react-advanced-form';

class Input extends Component {
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

  render() {
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

        <input id={id || name} className={inputClassNames} {...fieldProps} />

        {hint && <small className="Form-text">{hint}</small>}

        {errors &&
          errors.map((error, index) => (
            <div key={index} className="Form-error">
              {error}
            </div>
          ))}
      </div>
    );
  }
}

export default createField(fieldPresets.input)(Input);
