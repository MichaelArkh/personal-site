import React from 'react';
import Grid from '@material-ui/core/Grid';
import Page from '../basics/Page';
import { Typography } from '@material-ui/core';
import content from '../../content/home.json';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';

export default function Contant() {

    return (
      <Page>
        <Typography variant="h4" style={{marginBottom: '30px'}}>
        Contact Me!
        </Typography>
        <Grid  container
              spacing={3}>
        {content.contact.map((value, index) => {
          return (

              <Grid align="center" item key={index}  xs={12} md={4}>
                <Paper>
                <Link href={value.link}><img alt={value.name} style={{width: '200px', cursor: 'pointer'}} src={process.env.PUBLIC_URL + value.image} /></Link>
                <Typography>
                  {value.link}
                </Typography>
                </Paper>
              </Grid>
              
            
          )
        })}
        
        </Grid>
        <Typography color="textSecondary" variant="caption">Icons made by Pixel perfect / Freepic from <Link href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</Link></Typography>
      </Page>
    );
}