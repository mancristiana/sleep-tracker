import React, { Component } from 'react';
import CalendarTimes from './CalendarTimes';
import CalendarDays from './CalendarDays';
import CalendarCanvas from './CalendarCanvas';
import { getDaysOfMonth, getTimesOfDay } from './../../../utils';
import SleepModalLauncher from './../../modals/SleepModalLauncher';

class Calendar extends Component {
  render() {
    const offset = 15;
    return (
      <div className="Calendar">
        <SleepModalLauncher />
        <CalendarTimes times={getTimesOfDay(offset)} />
        <div className="container">
          <CalendarDays days={getDaysOfMonth()} />
          <CalendarCanvas offset={offset} />
        </div>
      </div>
    );
  }
}

export default Calendar;
