import React from 'react';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

const GetDetails = (props) => (
    <div>
        <FormGroup>
            <TextField
                label="Day"
                type="date"
                defaultValue={new Date()}
                InputLabelProps={{
                    shrink: true,
                }}
                value={props.details.day}
            />
            <TextField
                label="Start Time"
                type="time"
                InputLabelProps={{
                    shrink: true,
                }}
                value={props.details.startTime}
            />
            <TextField
                label="Duration"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                value={props.details.duration}
            />
            <TextField
                label="Number of Attendees"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                value={props.details.attendees}
            />
        </FormGroup>
        <div style={{ position: 'absolute', bottom: 30, width: '100%' }}>
            <div>
                <Button size="large" variant="contained" color="secondary" onClick={props.next}>
                    Next
                </Button>
            </div>  
        </div> 
    </div>
)

export default GetDetails