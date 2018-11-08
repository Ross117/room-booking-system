import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class StartWizard extends Component {
  render() {
    return (
        <div style={{ flexGrow: 1 }}>
            <div style={{ marginTop: '15%', padding: '5%', fontSize: '2em' }}>
                <h1>Do you have a specific time in mind?</h1>
            </div>
            <div style={{ position: 'absolute', bottom: 30, width: '100%' }}>
                <div>
                    <Grid container spacing={24}>
                        <Grid item xs={6} sm={3}>
                            <Button size="large" variant="contained" color="primary" onClick={this.props.yes}>
                                Yes
                            </Button>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Button size="large" variant="contained" color="secondary" onClick={this.props.no}>
                                No
                            </Button>
                        </Grid>
                    </Grid>
                </div>  
            </div> 
        </div>
    );
  }
}

export default StartWizard;
