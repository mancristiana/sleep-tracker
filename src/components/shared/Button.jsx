import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Button extends Component {
  static propTypes = {
    type: PropTypes.oneOf([
      'primary',
      'secondary',
      'success',
      'info',
      'warning',
      'danger',
      'subtile'
    ]),
    size: PropTypes.oneOf(['small']),
    onClick: PropTypes.func
  };

  getBtnStyle = () => {
    return `Button-${this.props.type}`;
  };

  getBtnSize = () => {
    return this.props.size === 'small' ? 'Button-small' : null;
  };

  render() {
    return (
      <button
        className={['Button', this.getBtnStyle(), this.getBtnSize()].join(' ')}
        onClick={() => this.props.onClick && this.props.onClick()}>
        {this.props.children}
      </button>
    );
  }
}
