import React, { Component } from 'react';
import { getMyMeetings } from '../api/meetings'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class MyMeetingsTable extends Component {

    state = {
        meetings: []
    }

    componentDidMount() {
        getMyMeetings()
            .then((meets) => {
                this.setState({
                    meetings: meets
                })
            })
            .catch(e => console.error(e))
    }

    render() {
        return (
        <div className="MyMeetings">
            <Paper>
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell>Day</TableCell>
                        <TableCell>Time</TableCell>
                        <TableCell>Room</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        { this.state.meetings.map((meeting, index) => (
                            <TableRow key={index}>
                                <TableCell>{ meeting.day }</TableCell>
                                <TableCell>{ meeting.startTime } - { meeting.endTime }</TableCell>
                                <TableCell>{ meeting.room }</TableCell>
                                <TableCell>
                                    { meeting.current ? 
                                        <Button variant="outlined" color="primary">
                                            Accept
                                        </Button>
                                    :
                                        <Button variant="outlined" color="secondary">
                                            Cancel
                                        </Button>
                                    }
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
        );
    }
}

export default MyMeetingsTable;
