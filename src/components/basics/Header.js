import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useMediaQuery } from 'react-responsive'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function Header() {
    const classes = useStyles();
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const [anchorEl, setAnchorEl] = useState(null);
    const history = useHistory();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

    return (
        <AppBar className={classes.root} style={{ marginBottom: "40px" }} position="static">
            <Toolbar>
                <Typography style={{cursor: "pointer"}} onClick={() => history.push("/")} variant="h5" className={classes.title}>
                    Michael Arkhangelskiy
                </Typography>

            {isTabletOrMobile ?
            <div>
                <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon onClick={handleClick} />
                </IconButton>
                <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => {handleClose(); history.push("/exp");}}>Experience</MenuItem>
                        <MenuItem onClick={() => {handleClose(); history.push("/proj");}}>Projects</MenuItem>
                        <MenuItem onClick={() => {handleClose(); history.push("/exp");}}>Resume</MenuItem>
                    </Menu>
            </div> :
            <div>
                <Button onClick={() => history.push("/exp")}>Experience</Button>
                <Button onClick={() => history.push("/proj")}>Projects</Button>
                <Button >Resume</Button>
            </div> 
            }
                
            
            </Toolbar>
        </AppBar>
    );
}