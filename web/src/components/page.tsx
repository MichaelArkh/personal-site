import React, { ReactNode, useState, useEffect, useMemo } from 'react';
import { ThemeProvider, createTheme, CssBaseline, ContainerProps, CircularProgress, Box, IconButton } from '@mui/material';
import { Container } from '@mui/material';
import Header from './header';
import useMediaQuery from '@mui/material/useMediaQuery';

interface PageProps extends ContainerProps {
    children?: ReactNode; // Define the type for children
    loading?: boolean; // Optional loading prop
}

const Page: React.FC<PageProps> = ({ children, loading, ...props }) => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [darkMode, setDarkMode] = useState<boolean>(() => {
        const savedTheme = localStorage.getItem('darkMode');
        return savedTheme !== null ? JSON.parse(savedTheme) : prefersDarkMode;
    });

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: darkMode ? 'dark' : 'light',
                    primary: {
                        main: darkMode ? '#90caf9' : '#7A6F63',
                    },
                    background: {
                        default: darkMode ? '#121212' : '#f0f0f0', // Light gray background for light mode
                    },
                },
            }),
        [darkMode] // Recreate the theme object whenever darkMode changes
    );

    const toggleTheme = () => {
        setDarkMode(!darkMode); // Toggle between light and dark modes
    };

    // Update localStorage whenever the theme mode changes
    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header toggleTheme={toggleTheme} darkMode={darkMode}/>
            <Container {...props}>
                {loading ? (
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <CircularProgress />
                    </Box>
                ) : (
                    children
                )}
            </Container>
        </ThemeProvider>
    );
};

export default Page;
