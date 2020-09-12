import React, { useState } from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from '@material-ui/core/Container';
import Header from './Header';
import Footer from './Footer';

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
          main: '#607D8B',
        },
        secondary: {
          main: '#5c6bc0',
        },
    },
    props: {
      // Style sheet name ⚛️
      MuiPaper: {
        // Name of the rule
        elevation: 5
      },
    },
    typography: {
      htmlFontSize: 14,
    }
  });
  
  const lightTheme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#607D8B',
        },
        secondary: {
          main: '#5c6bc0',
        },
    },
    props: {
      // Style sheet name ⚛️
      MuiPaper: {
        // Name of the rule
        elevation: 5
      },
    },
    typography: {
      htmlFontSize: 14,
    }
  });
  


export default function Page(props) {
    const [useDark, setDark] = useState(localStorage.getItem("theme") === null ? false : localStorage.getItem("theme") === 'true' ? true : false);

    const themeCallback = () => {
        var dark = !useDark;
        setDark(dark);
        localStorage.setItem("theme", dark);
      }

    return (
        <ThemeProvider theme={useDark ? darkTheme : lightTheme}>
        <CssBaseline />
            <Header call={themeCallback}/>
            <Container>
                {props.children}
            </Container>
            <Footer />
        </ThemeProvider>
    );
}