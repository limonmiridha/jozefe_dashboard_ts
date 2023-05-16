import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Card from './GlobalCard';

const Calendar = () => {
  const [value, onChange] = useState<any>(new Date());

  return (
    <Card cls="box-shadow rounded-lg p-3">
      <ReactCalendar onChange={onChange} value={value} selectRange={true} />
    </Card>
  );
};

export default Calendar;
