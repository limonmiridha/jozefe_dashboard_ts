import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendar = () => {
  const [value, onChange] = useState<any>(new Date());

  return (
    <div className="box-shadow rounded-lg p-3">
      <ReactCalendar onChange={onChange} value={value} selectRange={true} />
    </div>
  );
};

export default Calendar;
