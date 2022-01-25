import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ScheduleComponent, Inject, Day, Week, WorkWeek, Month, Agenda,
    EventSettingsModel } from '@syncfusion/ej2-react-schedule';


export const Calendar = () => {
    return (
        <ScheduleComponent currentView='Month'>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/> 
        </ScheduleComponent>
    )
}

// class Calendar extends React.Component {
//     render() {
//         return (
//             <ScheduleComponent><Inject services={[Day, Week, WorkWeek, Month, Agenda]}/> </ScheduleComponent>
//         )
//     }
// }

// export default Calendar;