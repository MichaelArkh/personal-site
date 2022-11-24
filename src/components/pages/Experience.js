import React from 'react';
import Grid from '@material-ui/core/Grid';
import Page from '../basics/Page';
import { Typography } from '@material-ui/core';
import content from '../../content/home.json';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

export default function Experience() {

  return (
    <Page>
      <Typography variant="h4" style={{ marginBottom: '30px' }}>
        Experience
        </Typography>
      <Grid container spacing={2}>
        {content.experience.map((value, index) => {
          return (
            <Grid key={index} container item>
              <Grid container component={Paper}>
                <Grid item xs={12} md={2}>
                  <Grid container justifyContent="center" alignItems="center">
                    <img alt="img" style={{ width: '100%', maxWidth: '210px' }} src={process.env.PUBLIC_URL + value.image} />
                  </Grid>
                </Grid>
                <Grid item xs={12} md={10}>
                  <Box pl={2} pt={1}>
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
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          )
        })}
      </Grid>
    </Page>
  );
}