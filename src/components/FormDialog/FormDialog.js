import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
import { default as Form } from '../Form/Form'
import { Drawer as Theme,
      makeStyles,
      createStyles } from '@material-ui/core'
// import { default as BasicDatePicker } from '../BasicDatePicker/BasicDatePicker'

const useStyles = makeStyles((theme) =>
  createStyles({
    form: {
      textAlign: 'left'
    }
  })
)

export default function FormDialog() {
  // const classes = useStyles();
  const [value, setValue] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  class Submit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            successAlert: false,
        }
    }

    _onButtonClick(){
        this.setOpen(false);
        // this.setState({
        //     successAlert: true,
        // });

    }

    render() {
        return (
            <div>
                <Button onClick={this._onButtonClick}>Submit</Button>
                {/* {this.state.successAlert ?
                    <Alert severity="success">This is a success alert — check it out!</Alert> :
                    null
            } */}
            </div>
        )
    }

  }
  
  class Form extends React.Component {
    
    constructor(props) {
      super(props)

      this.state = {
        First_Name: '',
        Last_Name: '',
        Phone_No: '',
        Email: '',
        Subject: '',
        Date: '',
        StartTime: '',
        EndTime: ''
      }

      // this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFirstNameChange = (event) => {
      this.setState({
        First_Name: event.target.value
      })
    }

    handleLastNameChange = (event) => {
        this.setState({
            Last_Name: event.target.value
        })
    }
    handlePhoneChange = (event) => {
        this.setState({
            Phone_No: event.target.value
        })
    }
    handleEmailChange = (event) => {
        this.setState({
            Email: event.target.value
        })
    }
    handleSubjectChange = (event) => {
        this.setState({
            Subject: event.target.value
        })
    }
    handleDateChange = (event) => {
        this.setState({
            Date: event.target.value
        })
    }
    handleStartTimeChange = (event) => {
        this.setState({
            StartTime: event.target.value
        })
    }
    handleEndTimeChange = (event) => {
        this.setState({
            EndTime: event.target.value
        })
    }
    handleSubmit = (event) => {
      alert('An appointment has been submitted for ' + this.state.First_Name + ' ' + this.state.Last_Name
      + 'on ' + this.state.Date)
      handleClose()
      let post = {
        'First_Name': this.state.First_Name,
        'Last_Name': this.state.Last_Name,
        'Phone_No': this.state.Phone_No,
        'Email': this.state.Email,
        'Subject': this.state.Subject,
        'Date': this.state.Date,
        'StartTime': this.state.StartTime,
        'EndTime': this.state.EndTime
      }
      let header = new Headers()
      header.append('content-type', 'application/json')
      console.log(post)
      fetch('http://127.0.0.1:5000/api/appointments', {method: 'POST', headers: header ,body: JSON.stringify(post)})
      window.location.reload(); 
    }

    render() {
      return (
        <form>
            {/* <Form/> */}
          <TextField
            autoFocus
            margin="dense"
            id="name_first"
            label="First Name"
            type="text"
            fullWidth
            variant="outlined"
            value={this.state.First_Name} 
            onChange={this.handleFirstNameChange}
          />
            <TextField
            margin="dense"
            id="name_last"
            label="Last Name"
            type="text"
            fullWidth
            variant="outlined"
            value={this.state.Last_Name} 
            onChange={this.handleLastNameChange}
          />
            <TextField
            margin="dense"
            id="phone"
            label="Phone Number"
            type="text"
            fullWidth
            variant="outlined"
            value={this.state.Phone_No} 
            onChange={this.handlePhoneChange}
          />
            <TextField
            margin="dense"
            id="Email"
            label="Email"
            type="text"
            fullWidth
            variant="outlined"
            value={this.state.Email} 
            onChange={this.handleEmailChange}
          />
            <TextField
            margin="dense"
            id="Date"
            type="Date"
            label=""
            fullWidth
            variant="outlined"
            value={this.state.Date} 
            onChange={this.handleDateChange}
          />
          <p>Start Time | Military Time</p>
            <TextField
            margin="dense"
            id="date_time_start"
            type="text"
            fullWidth
            variant="outlined"
            value={this.state.StartTime} 
            onChange={this.handleStartTimeChange}
          />
            <p>End Time | Military Time</p>
            <TextField
            margin="dense"
            id="date_time_end"
            type="text"
            fullWidth
            variant="outlined"
            value={this.state.EndTime} 
            onChange={this.handleEndTimeChange}
          />
            <TextField
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            variant="outlined"
            value={this.state.Subject} 
            onChange={this.handleSubjectChange}
          />
          <div>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={this.handleSubmit}>Submit</Button>
            {/* {this.state.successAlert ?
                <Alert severity="success">This is a success alert — check it out!</Alert> :
                null
        } */}

            </div>
          </form>

      )
    }
  }
  
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} sx={{color: 'white'}}>
        Create Appointment
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Appointment</DialogTitle>
        <DialogContent>
          <Form/>
        </DialogContent>
        <DialogActions>

          {/* <Submit/> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
