import React, { Component } from 'react';
import { getFirstDayOfMonth, getTimeDurationOffset } from './../../utils';
import { getAllSleep } from './../../model/sleep';

import moment from 'moment';

class CalendarCanvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sleepData: []
    };
  }
  componentWillMount() {
    getAllSleep().then(data => {
      this.setState({
        sleepData: data
      });
    });
  }

  getBackroundColor(interval) {
    if (interval <= 3) {
      return '#66c7a1';
    } else if (interval <= 5) {
      return '#28afb0';
    } else if (interval <= 7) {
      return '#41909c';
    } else if (interval <= 9) {
      return '#563362';
    } else {
      return '#751d54';
    }
  }

  render() {
    const { offset } = this.props;
    return (
      <div className="Calendar-canvas">
        <div className="Sleep">
          {this.state.sleepData.map((sleep, key) => (
            <div
              key={key}
              className="sleep"
              style={{
                top: 42 * moment(sleep.date).diff(getFirstDayOfMonth(), 'days'),
                left: `${getTimeDurationOffset(sleep.bedTime, offset) /
                  24 *
                  100}%`,
                width: `${Math.floor(sleep.interval / 24 * 100)}%`,
                backgroundColor: this.getBackroundColor(sleep.interval)
              }}>
              {sleep.interval}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default CalendarCanvas;
