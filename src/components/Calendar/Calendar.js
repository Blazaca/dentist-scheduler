import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ScheduleComponent, Inject, Day, Week, WorkWeek, Month, Agenda,
    EventSettingsModel } from '@syncfusion/ej2-react-schedule';

export const Calendar = () => {
    var XMLData = 0
    var jsonAppData = 0
    
    async function getData() {
        let response = await fetch('http://127.0.0.1:5000/api/appointments')
        let data = await response.json()
        jsonAppData = await data
        console.log(jsonAppData)

        

    }

    getData()

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