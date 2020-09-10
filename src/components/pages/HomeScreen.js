import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Page from '../basics/Page';
import Paper from '@material-ui/core/Paper';
import img from '../../content/pic.jpg';
import { Typography } from '@material-ui/core';
import content from '../../content/home.json';
import Container from '@material-ui/core/Container';
import ReactHtmlParser from 'react-html-parser';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function HomeScreen() {
  const classes = useStyles();

    return (
      <Page>
        <Container>
          <Grid container className={classes.root} spacing={3}>
            <Grid item md={4} xs={12} align="center">
              <img alt="Portrait" src={img} style={{borderRadius: "50%", width: '60%'}} />
            </Grid>
            <Grid item md={8} xs={12}>
              
              <Grid container spacing={2}>
                  <Grid item xs={12} style={{marginBottom: '10px'}}>
                    <Typography variant="h5">
                      Introduction
                    </Typography>
                    
                  </Grid>
                  <Grid item xs={12} component={Paper}>
                    <Typography variant="body1">
                      {ReactHtmlParser(content.intro)}
                    </Typography>
                    
                  </Grid>
              </Grid>
            </Grid>

          </Grid>
        </Container>
      </Page>
    );
}