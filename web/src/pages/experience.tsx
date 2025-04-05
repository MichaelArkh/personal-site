import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_EXPERIENCES } from '../queries/queries';
import { Experience as ExperienceType } from '../types/Experience';
import Page from '../components/page';
import { Box, Grid, Paper, Typography } from '@mui/material';


const Experience: React.FC = () => {
    const { data: experienceData, loading: experienceLoading, error: experienceError } = useQuery<{ experiences: [ExperienceType] }>(GET_EXPERIENCES);

    return (
        <Page maxWidth="lg" sx={{ marginTop: 4, marginBottom: 4 }} loading={experienceLoading}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12 }}>
                    <Typography variant="h4">
                        Experience
                    </Typography>
                </Grid>
                {experienceData?.experiences.map((value, index) => (
                    <Grid key={index} size={{ xs: 12 }}>
                        <Paper>
                            <Grid container spacing={2} alignItems="center">
                                {/* Image Section */}
                                <Grid size={{ xs: 12, md: 2 }} sx={{p: 1}}>
                                    <Box display="flex" justifyContent="center" alignItems="center">
                                        <img
                                            alt="img"
                                            style={{
                                                width: '100%',
                                                maxWidth: '250px',
                                                borderRadius: '15%',
                                            }}
                                            src={`data:image/jpeg;base64,${value.image}`}
                                        />
                                    </Box>
                                </Grid>
                                {/* Text Section */}
                                <Grid size={{ xs: 12, md: 10 }} sx={{p: 1, pl: 2}}>
                                    <Box pt={1}>
                                        <Typography variant="h6">{value.title}</Typography>
                                        <Typography variant="body1">{value.subtitle}</Typography>
                                        <Typography variant="body1">{value.dates}</Typography>
                                        <ul>
                                            {value.info.map((infoItem, infoIndex) => (
                                                <li key={infoIndex}>{infoItem}</li>
                                            ))}
                                        </ul>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Page>
    );
};

export default Experience;