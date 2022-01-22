import { configureStore, createSlice } from '@reduxjs/toolkit';


const appointmentSlice = createSlice({
    name: "appointment",
    initialState: {
        date: "01/01/2022",
        time: "12:00",
        length: "1:00",
        patient_first_name: "Jane",
        patient_last_name: "Doe",
        patient_phone: "555-555-5555"
    },
    reducers: {
    }
})