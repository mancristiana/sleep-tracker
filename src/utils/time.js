import moment from 'moment';

export const getDaysOfMonth = () => {
  let daysOfMonth = [];
  let monthDate = moment().startOf('month');
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
