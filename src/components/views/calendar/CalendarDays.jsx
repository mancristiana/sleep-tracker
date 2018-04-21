import React from 'react';

const CalendarDays = props => {
  const days = props.days;
  return (
    <div className="Calendar-days">
      {days.map((day, key) => (
        <div className="day" key={key}>
          <div className="name">{day.name}</div>
          <div className="number">{day.number}</div>
        </div>
      ))}
    </div>
  );
};

export default CalendarDays;
