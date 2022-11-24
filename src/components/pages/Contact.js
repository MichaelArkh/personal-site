import React from 'react';
import Grid from '@material-ui/core/Grid';
import Page from '../basics/Page';
import { Typography } from '@material-ui/core';
import content from '../../content/home.json';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

export default function Contant() {
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState("Successfully copied email to clipboard!");
    const [severity, setSeverity] = React.useState("success");

    const linkClicked = (value) => {
      if (value.name !== 'Email') {
        window
            .open(value.link)
            .focus();
      } else {
        const characters = value.link.split(',');
        const email = String.fromCharCode.apply(null, characters);
        navigator.clipboard.writeText(email).then(() => {
          setSeverity("success");
          setMessage("Successfully copied email to clipboard!");
          setOpen(true);
        }, (err) => {
          alert("Here is my email: " + email);
        });
      }
    }

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    return (
      <Page>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={severity}>
            {message}
          </Alert>
        </Snackbar>
        <Typography variant="h4" style={{marginBottom: '30px'}}>
        Contact Me!
        </Typography>
        <Grid  container
              spacing={3}>
        {content.contact.map((value, index) => {
          return (

              <Grid align="center" item key={index}  xs={12} md={4}>
                <Link onClick={() => linkClicked(value)}>
                  <Paper>
                    <img alt={value.name} style={{width: '200px', cursor: 'pointer', padding: '10px'}} src={process.env.PUBLIC_URL + value.image} />
                    <Typography>
                      {value.text}
                    </Typography>
                  </Paper>
                </Link>
              </Grid>
              
            
          )
        })}
        
        </Grid>
        <Typography color="textSecondary" variant="caption">Icons made by Pixel perfect / Freepic from <Link href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</Link></Typography>
        
      </Page>
    );
}