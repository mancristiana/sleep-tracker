import React, { Component } from 'react';
import { getDaysOfMonth, getTimesOfDay } from './../utils';

class Calendar extends Component {
  render() {
    const offset = 15;
    return (
      <div className="Calendar">
        <div className="Calendar-times">
          <div className="container">
            {getTimesOfDay(offset).map((time, key) => (
              <div key={key} className="time">
                {time}
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <div className="Calendar-days">
            {getDaysOfMonth().map((day, key) => (
              <div className="day" key={key}>
                <div className="name">{day.name}</div>
                <div className="number">{day.number}</div>
              </div>
            ))}
          </div>
          <div className="Calendar-canvas">CANVAS</div>
        </div>
      </div>
    );
  }
}

export default Calendar;
