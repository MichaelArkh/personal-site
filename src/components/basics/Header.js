import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useMediaQuery } from 'react-responsive'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import Brightness7 from '@material-ui/icons/Brightness7';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from "react-router-dom";
import Link from '@material-ui/core/Link';
import { useLocation } from "react-router-dom";
import resume from '../../content/resume.pdf';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(.5),
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function Header(props) {
    const classes = useStyles();
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 959px)' })
    const [anchorEl, setAnchorEl] = useState(null);
    const history = useHistory();
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

    return (
        <AppBar className={classes.root} style={{ marginBottom: "30px" }} position="static">
            <Toolbar>
            {isTabletOrMobile ?
                <Typography variant="h6" className={classes.title}>
                    <Link color="inherit" style={{cursor: 'pointer'}} onClick={() => history.push("/")}>Michael Arkhangelskiy</Link>
                </Typography>
            : 
            <Typography variant="h5" className={classes.title}>
              <Link color="inherit" style={{cursor: 'pointer'}} onClick={() => history.push("/")}>Michael Arkhangelskiy</Link>
            </Typography>
            }
            {isTabletOrMobile ?
            <div>
                <IconButton edge="end" onClick={handleClick} className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => {handleClose(); history.push("/");}}>Home</MenuItem>
                        <MenuItem onClick={() => {handleClose(); history.push("/exp");}}>Experience</MenuItem>
                        <MenuItem onClick={() => {handleClose(); history.push("/pub");}}>Publications</MenuItem>
                        <MenuItem onClick={() => {handleClose(); history.push("/proj");}}>Projects</MenuItem>
                        <MenuItem onClick={() => {handleClose(); history.push("/contact");}}>Contact</MenuItem>
                        <MenuItem onClick={() => {handleClose();}}><Link color="inherit" href={resume} target="_blank">Resume</Link></MenuItem>
                    </Menu>
            </div> :
            <div>
              <Button onClick={() => history.push("/")}>Home</Button>
                <Button onClick={() => history.push("/exp")}>Experience</Button>
                <Button onClick={() => history.push("/pub")}>Publications</Button>
                <Button onClick={() => history.push("/proj")}>Projects</Button>
                <Button onClick={() => history.push("/contact")}>Contact</Button>
                <Link href={resume} target="_blank"><Button >Resume</Button></Link>
            </div> 
            }
                
                <IconButton onClick={() => {
                      props.call();
                    }}  edge="end" color="inherit" aria-label="menu">
                    <Brightness7 />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}