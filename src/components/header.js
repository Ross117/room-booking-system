import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const Header = (props) => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" color="inherit">
                    { props.title }
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header