import React from 'react';
import { Card, CardContent, Typography, Avatar, Alert, Snackbar, Grid, IconButton, Link, CircularProgress } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { useQuery } from '@apollo/client';
import { GET_PROFILE } from '../queries/queries';
import Page from '../components/page';
import { Profile } from '../types/profile';

const Home: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState("Successfully copied email to clipboard!");
    const [severity, setSeverity] = React.useState<"error" | "info" | "success" | "warning">("success");
    const { data: profileData, loading: profileLoading, error: profileError } = useQuery<{ profile: Profile }>(GET_PROFILE);

    // Default blank profile object
    const defaultProfile: Profile = {
        id: "",
        name: "Loading...",
        title: "Loading...",
        data: [],
        avatarUrl: "",
        socialLinks: [],
    };

    // Use the fetched profile data or fallback to the default profile
    const profile = profileLoading ? defaultProfile : profileData?.profile;

    const linkClicked = (value: { name: string; link: string }) => {
        if (value.name !== 'Email') {
            window.open(value.link)?.focus();
        } else {
            const characters = value.link.split(',');
            const email = String.fromCharCode(...characters.map((char) => parseInt(char, 10)));
            navigator.clipboard.writeText(email).then(
                () => {
                    setSeverity("success");
                    setMessage("Successfully copied email to clipboard!");
                    setOpen(true);
                },
                (err) => {
                    alert("Here is my email: " + email);
                }
            );
        }
    };

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Page maxWidth="lg" sx={{ marginTop: 4, marginBottom: 4 }} loading={profileLoading}>
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity}>
                    {message}
                </Alert>
            </Snackbar>
            <Grid container spacing={4} alignItems="center" justifyContent="center">
                <Grid size={{ xs: 12, md: 6 }} >
                    <Card sx={{ p: 4, textAlign: "center", borderRadius: 4, boxShadow: 4 }}>
                        <Avatar
                            src={`data:image/jpeg;base64,${profile?.avatarUrl}`}
                            alt="Michael Image"
                            sx={{ width: "50%", height: "50%", margin: "0 auto", mb: 2 }}
                        />
                        <CardContent>
                            <Typography variant="h4" gutterBottom>
                                {profile?.name}
                            </Typography>
                            <Typography variant="h6" color="text.primary" sx={{ marginBottom: '16px' }}>
                                {profile?.title}
                            </Typography>

                            {profile?.data.map((item) => (
                                <Typography key={item.text} variant="body1" color="text.secondary" component="p" sx={{ textAlign: 'left' }}>
                                    {item.link !== null ? <Link href={item.link}>{item.text}</Link> : item.text}
                                </Typography>
                            ))}

                        </CardContent>
                        <Grid container spacing={2} alignItems="center" justifyContent="center">
                            {profile?.socialLinks.map((link) => (
                                <Grid key={link.platform}>
                                    <IconButton
                                        color="primary"
                                        onClick={() => {
                                            linkClicked({ name: link.platform, link: link.url });
                                        }}>
                                        {link.platform === "GitHub" && <GitHub />}
                                        {link.platform === "LinkedIn" && <LinkedIn />}
                                        {link.platform === "Email" && (
                                            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                                                @
                                            </Typography>
                                        )}
                                    </IconButton>
                                </Grid>
                            ))}
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </Page>
    );
};

export default Home;