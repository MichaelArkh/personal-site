import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      background: theme.palette.background.paper,
      position: "absolute",
      bottom: 0,
    }
  }));

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            
        </div>
    );
}