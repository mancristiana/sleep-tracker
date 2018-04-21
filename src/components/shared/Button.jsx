import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Button extends Component {
  propTypes = {
    type: PropTypes.oneOf(['primary', 'success', 'info', 'warning', 'danger']),
    size: PropTypes.oneOf(['small'])
  };

  constructor(props) {
    super(props);
  }

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
        onClick={() => this.props.onClick()}>
        {this.props.children}
      </button>
    );
  }
}
