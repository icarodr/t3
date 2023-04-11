import React from 'react';
import { Calendar } from 'antd';
import type { Dayjs } from 'dayjs';
import type { CalendarMode } from 'antd/es/calendar/generateCalendar';

const NewCalendar = () => {

    const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
      };
    
    return(
        <div>
            <Calendar onPanelChange={onPanelChange} />
        </div>
    )
}

export default NewCalendar;