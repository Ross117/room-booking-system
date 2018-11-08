import React, { Component } from 'react';
import Header from './header';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

class MainBookingForm extends Component {

  constructor (props) {
      super(props);
      this.state = {
        day: "",
        startTime: "",
        duration: 0,
        attendees: 0
      };
  }

   update (event) {
     this.setState({ [event.target.id]: event.target.value });
     console.log(this.state);
   }
  
    
  render () {
      return ( 
        <div>
          <Header title="Booking Form" />
          <div>
            <FormGroup>
                <InputLabel htmlFor="date">Date</InputLabel>
                  <Input type="date" value={this.state.date}></Input>
                <InputLabel htmlFor="startTime">Start Time</InputLabel>
                  <Input type="time" value={this.state.startTime}></Input>
                <InputLabel htmlFor="time">Duration</InputLabel>
                  <Select
                    value={this.state.time}
                    onChange={this.update}
                    inputProps={{
                      id: 'time'
                    }}
                  >
                    <MenuItem ></MenuItem>
                    <MenuItem></MenuItem>
                    <MenuItem></MenuItem>
                    <MenuItem></MenuItem>
                    <MenuItem></MenuItem>
                    <MenuItem></MenuItem>
                    <MenuItem></MenuItem>
                  </Select>
                  <InputLabel htmlFor="attendees">Attendees</InputLabel>
                  <Select
                    value={this.state.attendees}
                    onChange={this.update}
                    inputProps={{
                      id: 'attendees'
                    }}
                  >
                    <MenuItem></MenuItem>
                    <MenuItem></MenuItem>
                    <MenuItem></MenuItem>
                    <MenuItem></MenuItem>
                    <MenuItem></MenuItem>
                    <MenuItem></MenuItem>
                    <MenuItem></MenuItem>
                  </Select>
            </FormGroup>
          </div>
          <div>
            <Button variant="contained" color="primary" onclick="">Next</Button>
          </div>   
        </div>
      );
  }

}


export default MainBookingForm;