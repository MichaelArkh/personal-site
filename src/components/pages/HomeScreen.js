import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Page from '../basics/Page';
import Paper from '@material-ui/core/Paper';
import img from '../../content/pic.jpg';
import { Typography } from '@material-ui/core';
import content from '../../content/home.json';

import ReactHtmlParser from 'react-html-parser';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { SendRounded, Create, MenuBook, AccountTree } from '@material-ui/icons';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default function HomeScreen() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Page>

      <Grid container className={classes.root} spacing={3}>
        <Grid item md={4} xs={12} align="center">
          <img alt="Portrait" src={img} style={{ borderRadius: "50%", width: '85%'}} />
        </Grid>
        <Grid item md={8} xs={12}>

          <Grid container spacing={2}>
            <Grid item xs={12} style={{ marginBottom: '5px' }}>
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

        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5">
                Extras
                      </Typography>

            </Grid>

            <Grid container justify="center" align="center" spacing={3}>
              {content.facts.map((value, index) => {
                return (
                  <Grid key={index} item xs={12} md={4}  >
                    <TableContainer component={Paper} >
                      <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                          <TableRow>
                            <TableCell align="center">{value.title}</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell size="small" align="left">
                              {value.text !== "" ?
                                value.text

                                :
                                <ul>
                                  {value.list.map((value, index) => {
                                    return (
                                      <li key={index}>{value}</li>
                                    )
                                  })}
                                </ul>
                              }


                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5">
                Redirects
                      </Typography>

            </Grid>

            <Grid container justify="center" align="center" spacing={3}>
              {content.redirects.map((value, index) => {
                return (
                  <Grid key={index} item xs={12} md={4}  >
                    <TableContainer component={Paper} >
                      <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell align="center">{index === 0 ? <MenuBook fontSize="small" style={{ marginRight: '10px' }} /> : index === 1 ? <AccountTree fontSize="small" style={{ marginRight: '10px' }} /> : <Create fontSize="small" style={{ marginRight: '10px' }} />}{value.name}</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <StyledTableRow>
                            <StyledTableCell align="left">{value.text}</StyledTableCell>
                          </StyledTableRow>
                          <StyledTableRow>
                            <StyledTableCell style={{ cursor: 'pointer' }} onClick={() => history.push(value.redirect)} align="right"><SendRounded /></StyledTableCell>
                          </StyledTableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
        </Grid>

      </Grid>

    </Page>
  );
}