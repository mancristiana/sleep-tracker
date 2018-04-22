import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from './../../Button';
import classNames from 'classnames';
import Clock from './Clock';
import { formatHours, twoDigits } from './../../../../utils';

class TimePicker extends Component {
  static propTypes = {
    /** The initial value of the time picker. */
    defaultValue: PropTypes.instanceOf(Date),
    /** Sets the clock mode, 12-hour or 24-hour clocks are supported. */
    mode: PropTypes.oneOf(['12h', '24h']),
    /** Callback that is called with the new date (as Date instance) when the value is changed. */
    onChange: PropTypes.func,
    /** Callback that is called when the minutes are changed. Can be used to automatically hide the picker after selecting a time. */
    onMinutesSelected: PropTypes.func,
    /** The value of the time picker, for use in controlled mode. */
    value: PropTypes.instanceOf(Date)
  };

  static defaultProps = {
    mode: '12h'
  };

  constructor(props) {
    super(props);

    const defaultValue = new Date();
    defaultValue.setSeconds(0);
    defaultValue.setMilliseconds(0);
    const time = props.value || props.defaultValue || defaultValue;
    this.state = {
      select: 'h',
      hours: time.getHours(),
      minutes: time.getMinutes()
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.value != null &&
      (this.props.value == null ||
        nextProps.value.getTime() !== this.props.value.getTime())
    ) {
      this.setState({
        hours: nextProps.value.getHours(),
        minutes: nextProps.value.getMinutes()
      });
    }
  }

  handleClockChange = value => {
    if (this.state.select === 'h') {
      if (this.props.mode === '12h') {
        if (this.state.hours >= 12) {
          this.setState(
            { hours: value === 12 ? value : value + 12 },
            this.propagateChange
          );
        } else {
          this.setState(
            { hours: value === 12 ? 0 : value },
            this.propagateChange
          );
        }
      } else {
        this.setState({ hours: value }, this.propagateChange);
      }
    } else {
      this.setState({ minutes: value }, () => {
        this.propagateChange();
      });
    }
  };

  handleClockChangeDone = e => {
    e.preventDefault(); // prevent mouseUp after touchEnd

    if (this.state.select === 'm') {
      if (this.props.onMinutesSelected) {
        setTimeout(() => {
          this.props.onMinutesSelected();
        }, 300);
      }
    } else {
      setTimeout(() => {
        this.setState({ select: 'm' });
      }, 300);
    }
  };

  editHours = () => this.setState({ select: 'h' });

  editMinutes = () => this.setState({ select: 'm' });

  setAm = () => {
    if (this.state.hours >= 12) {
      this.setState({ hours: this.state.hours - 12 }, this.propagateChange);
    }
  };

  setPm = () => {
    if (this.state.hours < 12) {
      this.setState({ hours: this.state.hours + 12 }, this.propagateChange);
    }
  };

  propagateChange = () => {
    if (this.props.onChange != null) {
      const date = new Date();
      date.setHours(this.state.hours);
      date.setMinutes(this.state.minutes);
      date.setSeconds(0);
      date.setMilliseconds(0);
      this.props.onChange(date);
    }
  };

  render() {
    const { mode } = this.props;

    const clockMode = this.state.select === 'm' ? 'minutes' : mode;
    const { minutes } = this.state;
    const { hours, isPm } = formatHours(this.state.hours, mode);

    const getClassName = selectType =>
      classNames('TimePicker-time', {
        'TimePicker-select': this.state.select === selectType && 'active'
      });

    return (
      <div className="SleepModal">
        <div className="Modal-heading">
          <div className="TimePicker-header">
            <span className={getClassName('h')} onClick={this.editHours}>
              {twoDigits(hours)}
            </span>
            :
            <span className={getClassName('m')} onClick={this.editMinutes}>
              {twoDigits(minutes)}
            </span>
          </div>
          {mode === '12h' ? (
            <div className={'TimePicker-ampm'}>
              <span
                className={classNames('TimePicker-time', {
                  'TimePicker-select': isPm
                })}
                onClick={this.setPm}>
                PM
              </span>
              <span
                className={classNames('TimePicker-time', {
                  'TimePicker-select': !isPm
                })}
                onClick={this.setAm}>
                AM
              </span>
            </div>
          ) : (
            <div className={'TimePicker-placeholder'} />
          )}
        </div>
        <div className="Modal-content">
          <Clock
            mode={clockMode}
            onChange={this.handleClockChange}
            value={clockMode === 'minutes' ? minutes : hours}
            onMouseUp={this.handleClockChangeDone}
            onTouchEnd={this.handleClockChangeDone}
          />
        </div>
        <div className="Modal-footer">
          <Button type="primary">Done</Button>
        </div>
      </div>
    );
  }
}

export default TimePicker;
