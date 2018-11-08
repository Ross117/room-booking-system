import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class GetFacilities extends Component {

  render() {
    return (
        <div style={{ flexGrow: 1 }}>
            <div style={{ marginTop: '10%', padding: '5%', fontSize: '1em' }}>
                <h1>Do you need any of the following facilities in the room?</h1>
                <div style={{ paddingLeft: '33%', paddingRight: '20%'}}>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                checked={this.props.audioCon}
                                onChange={() => this.props.stateChanged('audioCon')}
                                />
                            }
                            label="Audio Conference"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                checked={this.props.videoCon}
                                onChange={() => this.props.stateChanged('videoCon')}
                                />
                            }
                            label="Video Conference"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                checked={this.props.desk}
                                onChange={() => this.props.stateChanged('desk')}
                                />
                            }
                            label="Desk"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                checked={this.props.presentation}
                                onChange={() => this.props.stateChanged('presentation')}
                                />
                            }
                            label="TV Presentation"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                checked={this.props.network}
                                onChange={() => this.props.stateChanged('network')}
                                />
                            }
                            label="Network Cable"
                        />
                    </FormGroup>
                </div>
            </div>
            <div style={{ position: 'absolute', bottom: 30, width: '100%' }}>
                <div>
                    <Grid container spacing={24}>
                        <Grid item xs={6} sm={3}>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Button size="large" variant="contained" color="secondary" onClick={this.props.next}>
                                Next
                            </Button>
                        </Grid>
                    </Grid>
                </div>  
            </div> 
        </div>
    );
  }
}

export default GetFacilities;
