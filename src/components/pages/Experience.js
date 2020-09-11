import React from 'react';
import Grid from '@material-ui/core/Grid';
import Page from '../basics/Page';
import { Typography } from '@material-ui/core';
import content from '../../content/home.json';
import Paper from '@material-ui/core/Paper';

export default function Experience() {

  return (
    <Page>
      <Typography variant="h4">
        Experience
        </Typography>
        {content.experience.map((value, index) => {
          return (
            <Grid key={index} container alignItems="center"
            justify="center"  style={{marginBottom: '15px'}} component={Paper}>
              <Grid item  s={12} md={2}>
                <img alt="img" style={{width: '200px'}} src={process.env.PUBLIC_URL + value.image} />
              </Grid>
              <Grid item s={12} md={10}>
                <Typography variant="h6">
                  {value.title}
                </Typography>
                <Typography variant="body1">
                  {value.subtitle}
                </Typography>
                <Typography variant="body1">
                  {value.dates}
                </Typography>
                <ul>
                {value.info.map((value, index) => {
                  return (
                    <li key={index}>{value}</li>
                  )
                })}
                </ul>
              </Grid>
            </Grid>
          )
        })}
    </Page>
  );
}