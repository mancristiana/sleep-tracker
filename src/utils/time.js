import moment from 'moment';

export const getTimeDuration = time => {
  return moment.duration(time).asHours();
};

export const getTimeDurationOffset = (time, offset) => {
  return (getTimeDuration(time) + 24 - offset) % 24;
};

export const getFirstDayOfMonth = () => {
  return moment().startOf('month');
};

export const getDaysOfMonth = () => {
  let daysOfMonth = [];
  let monthDate = getFirstDayOfMonth();
  let daysCount = monthDate.daysInMonth();

  for (let i = 0; i < daysCount; i++) {
    let day = {
      number: monthDate.format('D'),
      name: monthDate.format('ddd')
    };
    daysOfMonth.push(day);
    monthDate.add(1, 'days');
  }
  return daysOfMonth;
};

export const getTimesOfDay = (offset = 0) => {
  let timesOfDay = [];
  for (let i = 0; i < 24; i++) {
    timesOfDay.push((i + offset) % 24);
  }

  return timesOfDay;
};

export const twoDigits = n => {
  return n < 10 ? `0${n}` : `${n}`;
};

export const formatHours = (hours, mode) => {
  const isPm = hours >= 12;
  if (mode === '24h') {
    return { hours, isPm };
  } else if (hours === 0 || hours === 12) {
    return { hours: 12, isPm };
  } else if (hours < 12) {
    return { hours, isPm };
  } else {
    return { hours: hours - 12, isPm };
  }
};

const mod = (a, b) => {
  return a - Math.floor(a / b) * b;
};

export const getShortestAngle = (from, to) => {
  const difference = to - from;
  return from + mod(difference + 180, 360) - 180;
};
