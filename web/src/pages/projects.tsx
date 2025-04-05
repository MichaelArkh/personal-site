import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../queries/queries';
import { Project as ProjectType } from '../types/Project';
import Page from '../components/page';
import { Box, Grid, Link, Paper, Typography } from '@mui/material';


const Projects: React.FC = () => {
    const { data: projectData, loading: projectLoading, error: projectError } = useQuery<{ projects: [ProjectType] }>(GET_PROJECTS);

    return (
        <Page maxWidth="lg" sx={{ marginTop: 4, marginBottom: 4 }} loading={projectLoading}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12 }}>
                    <Typography variant="h4">
                        Projects
                    </Typography>
                </Grid>
                {projectData?.projects.map((value, index) => (
                    <Grid key={index} size={{ sm: 12, md: 6 }} >
                        <Paper style={{ height: "100%", width: "100%", position: "relative" }}>
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
                                <Box style={{ position: "absolute", bottom: "5px" }}>
                                    <Box display="flex" gap={1} alignItems="center">
                                        {value.url !== "#!" ? (
                                            <Link variant="body1" href={value.url} target="_blank" color="primary">Url</Link>
                                        ) : (
                                            <Typography variant="body1" color="error" style={{ textDecoration: "line-through" }}>Url</Typography>
                                        )}
                                        {" · "}
                                        {value.demo !== "#!" ? (
                                            <Link variant="body1" href={value.demo} target="_blank" color="primary">Demo</Link>
                                        ) : (
                                            <Typography variant="body1" color="error" style={{ textDecoration: "line-through" }}>Demo</Typography>
                                        )}
                                    </Box>
                                </Box>
                            </Box>
                        </Paper>

                    </Grid>

                ))}
            </Grid>
        </Page>
    );
};

export default Projects;