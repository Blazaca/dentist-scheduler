import React, { Component } from 'react';
import { Drawer as Theme,
    makeStyles,
    createStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) =>
    createStyles({
      form: {
        maxWidth: 100,
      }
    })
  )

class Form extends React.Component {
    

    constructor(props) {
      super(props)

      this.state = {
        first_name: '',
        last_name: '',
        phone_no: '',
        email: '',
        subject: '',
        date: '',
        start_time: '',
        end_time: ''
      }
    }

    handleFirstNameChange = (event) => {
      this.setState({
        first_name: event.target.value
      })
    }

    handleLastNameChange = (event) => {
        this.setState({
            last_name: event.target.value
        })
    }
    handlePhoneChange = (event) => {
        this.setState({
            phone_no: event.target.value
        })
    }
    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handleSubjectChange = (event) => {
        this.setState({
            subject: event.target.value
        })
    }
    handleDateChange = (event) => {
        this.setState({
            date: event.target.value
        })
    }
    handleStartTimeChange = (event) => {
        this.setState({
            start_time: event.target.value
        })
    }
    handleEndTimeChange = (event) => {
        this.setState({
            end_time: event.target.value
        })
    }

    render() {
    
        return (
            <form>
                <div className="Form">
                    <label>First Name</label>
                    <input 
                        type='text' 
                        value={this.state.first_name} 
                        onChange={this.handleFirstNameChange}
                    />
                    <input 
                        type='text' 
                        value={this.state.last_name} 
                        onChange={this.handleLastNameChange}
                    />
                    <input 
                        type='text' 
                        value={this.state.phone_no} 
                        onChange={this.handlePhoneChange}
                    />
                    <input 
                        type='text' 
                        value={this.state.email} 
                        onChange={this.handleEmailChange}
                    />
                    <input 
                        type='text' 
                        value={this.state.subject} 
                        onChange={this.handleSubjectChange}
                    />
                    <input 
                        type='text' 
                        value={this.state.date} 
                        onChange={this.handleDateChange}
                    />
                    <input 
                        type='text' 
                        value={this.state.start_time} 
                        onChange={this.handleStartTimeChange}
                    />
                    <input 
                        type='text' 
                        value={this.state.end_time} 
                        onChange={this.handleEndTimeChange}
                    />

                </div>
            </form>
        )
    }
  }

  export default Form