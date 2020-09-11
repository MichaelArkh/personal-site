import React from 'react';
import Grid from '@material-ui/core/Grid';
import Page from '../basics/Page';
import { Typography } from '@material-ui/core';
import content from '../../content/home.json';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';

export default function Projects() {

    return (
      <Page>
        <Typography variant="h4">
        Projects
        </Typography>
        <Grid  container
              style={{marginBottom: '15px'}} spacing={2}>
        {content.projects.map((value, index) => {
          return (
            
              <Grid key={index} item s={12} md={6}>
                <Paper>
                <Typography variant="h6">
                  {value.name}
                </Typography>
                <Typography variant="body1">
                  <i>{value.type}</i>
                </Typography>
                <Typography variant="body1">
                  {value.date}
                </Typography>
                <ul>
                {value.info.map((value, index) => {
                  return (
                    <li key={index}>{value}</li>
                  )
                })}
                </ul>
                  <Link href={value.url} variant="body1" color="secondary">Url</Link>
                  {value.demo !== "" ? " · ":""}
                  {value.demo !== "" ? <Link variant="body1" href={value.demo} color="secondary">Demo</Link>:""}
                </Paper>
              </Grid>
              
          )
        })}
        </Grid>
      </Page>
    );
}