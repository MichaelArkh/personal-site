import React from 'react';
import Grid from '@material-ui/core/Grid';
import Page from '../basics/Page';
import { Typography } from '@material-ui/core';
import content from '../../content/home.json';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';
import ReactHtmlParser from 'react-html-parser';

export default function Publications() {

  return (
    <Page>
      <Typography variant="h4" style={{ marginBottom: '30px' }}>
        Publications
      </Typography>
      <Grid container spacing={2}>
        {content.publications.map((value, index) => {
          return (
            <Grid key={index} container item>
              <Grid container component={Paper}>
                <Grid item xs={12} md={2}>
                  <Grid container justify="center" alignItems="center">
                    <img alt="img" style={{ width: '100%', maxWidth: '210px' }} src={process.env.PUBLIC_URL + value.urls.image} />
                  </Grid>
                </Grid>
                <Grid item xs={12} md={10} style={{ height: "inherit" }}>
                  <Box pl={2} pt={1} style={{ height: "inherit" }}>
                    <Tooltip title={value.urls.name} placement="right-end" arrow>
                      <Link href={value.urls.url} underline="always" variant="h6" color="secondary">
                        {value.title}
                      </Link>
                    </Tooltip>
                    <br/>
                    <Typography variant="overline">
                      {ReactHtmlParser(value.authors)}
                    </Typography>
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