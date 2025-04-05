import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useQuery } from '@apollo/client';
import { GET_NAME } from '../queries/queries';
import { Profile } from '../types/profile';

interface PageProps {
    toggleTheme?: () => void
    darkMode?: boolean
}

const Header: React.FC<PageProps> = ({toggleTheme, darkMode}) => {
    const navigate = useNavigate();
    const { data: nameData} = useQuery<{ profile: Profile }>(GET_NAME);
    const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMenuAnchor(event.currentTarget);
    };

    const handleMenuClose = () => {
        setMenuAnchor(null);
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        <Button color="inherit" onClick={() => navigate('/')}>
                            {nameData?.profile.name || 'Michael Arkhangelskiy'}
                        </Button>
                    </Typography>
                    <Button color="inherit" onClick={() => navigate('/')} sx={{ display: { xs: 'none', md: 'inline-flex' } }}>Home</Button>
                    <Button color="inherit" onClick={() => navigate('/exp')} sx={{ display: { xs: 'none', md: 'inline-flex' } }}>Experience</Button>
                    <Button color="inherit" onClick={() => navigate('/pub')} sx={{ display: { xs: 'none', md: 'inline-flex' } }}>Publications</Button>
                    <Button color="inherit" onClick={() => navigate('/proj')} sx={{ display: { xs: 'none', md: 'inline-flex' } }}>Projects</Button>
                    <IconButton edge="end" color="inherit" aria-label="menu" sx={{ mr: 2, display: { md: 'none' } }} onClick={handleMenuOpen}>
                        <MenuIcon />
                    </IconButton>
                    <IconButton onClick={toggleTheme} color="inherit">
                        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Menu
                anchorEl={menuAnchor}
                open={Boolean(menuAnchor)}
                onClose={handleMenuClose}>
                <MenuItem
                    onClick={() => {
                        navigate('/');
                        handleMenuClose();
                    }}>
                    Home
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        navigate('/exp');
                        handleMenuClose();
                    }}>
                    Experience
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        navigate('/pub');
                        handleMenuClose();
                    }}>
                    Publications
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        navigate('/proj');
                        handleMenuClose();
                    }}>
                    Projects
                </MenuItem>
            </Menu>
        </>
    );
};

export default Header;