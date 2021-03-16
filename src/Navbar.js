import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function Navbar() {
    return (
        <div>
            <AppBar title='Food Finder' style={{ backgroundColor:'#2fc2b5'}}>
                <Toolbar>
                    <IconButton edge="start"  color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" >
                        Food Finder
                        </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
