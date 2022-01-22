import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ScheduleComponent, Inject, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';

class Calendar extends React.Component {
    public render() {
        return (
            <ScheduleComponent></ScheduleComponent>
        )
    }
}

export default Calendar;