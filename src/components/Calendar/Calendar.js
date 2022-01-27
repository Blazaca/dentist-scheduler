import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ScheduleComponent, Inject, Day, Week, WorkWeek, Month, Agenda,
    EventSettingsModel, ResourcesDirective, ResourceDirective } from '@syncfusion/ej2-react-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data'

export const Calendar = () => {
    // var XMLData = 0
    // var jsonAppData = 0
    let appData
    async function getData() {
        let response = await fetch('http://127.0.0.1:5000/api/appointments')
        appData = await response
    }
    
    getData()

    // let remoteData = new DataManager({
    //     url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
    //     adaptor: new WebApiAdaptor,
    //     crossDomain: true
    // });


    return (
        <ScheduleComponent currentView='Month' eventSettings={{ dataSource: appData }}>
            <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/> 
        </ScheduleComponent>
    )
}