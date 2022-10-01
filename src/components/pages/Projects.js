import React from 'react';
import Grid from '@material-ui/core/Grid';
import Page from '../basics/Page';
import { Typography } from '@material-ui/core';
import content from '../../content/home.json';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

export default function Projects() {

    return (
      <Page>
        <Typography variant="h4" style={{marginBottom: '30px'}}>
        Projects
        </Typography>
        <Grid  container
              style={{marginBottom: '15px'}} spacing={2} alignItems="stretch">
        {content.projects.map((value, index) => {
          return (
            
              <Grid key={index} item s={12} md={6} style={{width: '100%'}}>
                <Paper style={{height: "100%", width: "100%", position: "relative"}}>
                  <Box p={2}>
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
                  <Box style={{position: "absolute", bottom:"5px"}}>

                    <Link variant="body1" href={value.url} color={value.url !== "#" ? "secondary": "error"} style={value.url === "#" ? {cursor: "default", textDecoration: "none"} : {}}>Url</Link>
                    {" · "}
                    <Link variant="body1" href={value.demo} color={value.demo !== "#" ? "secondary": "error"} style={value.demo === "#" ? {cursor: "default", textDecoration: "none"} : {}}>Demo</Link>
                  </Box>
                  </Box>
                </Paper>

              </Grid>
              
          )
        })}
        </Grid>
      </Page>
    );
}