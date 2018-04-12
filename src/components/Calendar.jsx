import React, { Component } from 'react';
import { getDaysOfMonth } from './../utils';

class Calendar extends Component {
  render() {
    return (
      <div className="Calendar">
        <div className="Calendar-days">
          {getDaysOfMonth().map((day, key) => (
            <div className="day" key={key}>
              <div className="name">{day.name}</div>
              <div className="number">{day.number}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Calendar;
