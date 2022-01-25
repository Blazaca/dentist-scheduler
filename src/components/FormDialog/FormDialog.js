import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
// import { default as BasicDatePicker } from '../BasicDatePicker/BasicDatePicker'

export default function FormDialog() {
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

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} sx={{color: 'white'}}>
        Create Appointment
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Appointment</DialogTitle>
        <DialogContent>
            <form>
          <TextField
            autoFocus
            margin="dense"
            id="name_first"
            label="First Name"
            type="text"
            fullWidth
            variant="outlined"
          />
            <TextField
            margin="dense"
            id="name_last"
            label="Last Name"
            type="text"
            fullWidth
            variant="outlined"
          />
            <TextField
            margin="dense"
            id="phone"
            label="Phone Number"
            type="tel"
            fullWidth
            variant="outlined"
          />
            <TextField
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
          />
            <TextField
            margin="dense"
            id="date"
            type="date"
            fullWidth
            variant="outlined"
          />
          <p>Start Time e.g. "11:00 AM"</p>
            <TextField
            margin="dense"
            id="date"
            type="time"
            fullWidth
            variant="outlined"
          />
            <p>End Time e.g. "11:30 AM"</p>
            <TextField
            margin="dense"
            id="date"
            type="time"
            fullWidth
            variant="outlined"
          />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
          {/* <Submit/> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
