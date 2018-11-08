import React, { Component } from 'react';
import { getRecommendations } from '../../api/meetings'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class MeetingRecommendations extends Component {

    state = {
        meetings: []
    }

    componentDidMount() {
        getRecommendations()
            .then((meetings) => {
                this.setState({
                    meetings
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
                        <TableCell>Time</TableCell>
                        <TableCell>Room</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        { this.state.meetings.map((meeting, index) => (
                            <TableRow key={index}>
                                <TableCell>{ meeting.startTime } - { meeting.endTime }</TableCell>
                                <TableCell>{ meeting.room }</TableCell>
                                <TableCell> 
                                    <Button variant="contained" color="secondary">
                                        Book
                                    </Button>
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

export default MeetingRecommendations;
