import React from 'react';

const CalendarTimes = props => {
  const times = props.times;
  return (
    <div className="Calendar-times">
      <div className="container">
        {times.map((time, key) => (
          <div key={key} className="time">
            {time}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarTimes;
