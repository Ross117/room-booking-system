import React from 'react';
import Button from '@material-ui/core/Button';

const GetDetails = (props) => (
    <div>
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