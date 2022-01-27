// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import React, { useState } from 'react';

// const localizer = momentLocalizer(moment)

// async function processEvents() {
//   const data = await (await fetch('http://127.0.0.1:5000/api/appointments')).json()

//   const formatted = data.map(entry => ({
//     id: entry.id,
//     title: `${entry.First_Name} ${entry.Last_Name} : ${entry.Subject}`,
//     AllDay: false,
//     start: new Date(`${entry.Date} ${entry.StartTime}`),
//     end: new Date(`${entry.Date} ${entry.EndTime}`)
//   })
//   )
//   console.log('processed')
//   console.log(formatted)
//   return formatted
// }

// const formattedJson = processEvents()

// export const BasicCalendar = () => {
//   const now = new Date()
  
//   return (
//   <div>
//     <Calendar
//       localizer={localizer}
//       events={formattedJson}
//       startAccessor="start"
//       endAccessor="end"
//       style={{ height: 500 }}
//     />
//   </div>
//   )
// }

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import React, { useState, useEffect } from "react";

const localizer = momentLocalizer(moment);

export const BasicCalendar = () => {
  // we need to define our state here
  const [json, setJson] = useState();

  useEffect(() => {
    async function processEvents() {
      const data = await (
        await fetch("http://127.0.0.1:5000/api/appointments")
      ).json();

      const formatted = data.map((entry) => ({
        id: entry.id,
        title: `${entry.First_Name} ${entry.Last_Name} : ${entry.Subject}`,
        AllDay: false,
        start: new Date(`${entry.Date} ${entry.StartTime}`),
        end: new Date(`${entry.Date} ${entry.EndTime}`),
      }));
      // we'll update our json state here
      setJson(formatted);
    }
    // kick off the network request here
    processEvents();
  }, []);

  // state hasn't been updated yet?
  // let's render something else while the network request is still resolving
  if (!json) {
    return <>still loading...</>;
  }
  // json should be ready here!
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={json}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

const myEventsList = [
  {
    "id": 4,
    "title": "Evan Hollier : Ultimate Front Teeth",
    "AllDay": false,
    "start": "2022-01-04T19:00:00.000Z",
    "end": "2022-01-04T23:00:00.000Z"
  },
  {
    "id": 2,
    "title": "Blake Alonzo : Super Duper Clean Combo Deal",
    "AllDay": false,
    "start": "2022-01-05T16:30:00.000Z",
    "end": "2022-01-05T19:00:00.000Z"
  },
  {
    "id": 3,
    "title": "Faith Johnson : Gold Plating Top Half",
    "AllDay": false,
    "start": "2022-01-05T19:00:00.000Z",
    "end": "2022-01-05T22:30:00.000Z"
  },
  {
    "id": 5,
    "title": "Ann Johnson : Spinach stuck in teeth",
    "AllDay": false,
    "start": "2022-01-02T23:00:00.000Z",
    "end": "2022-01-03T05:00:00.000Z"
  }
]
