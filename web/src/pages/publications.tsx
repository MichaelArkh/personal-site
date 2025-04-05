import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PUBLICATIONS } from '../queries/queries';
import { Publication as PublicationType } from '../types/Publication';
import Page from '../components/page';
import { Box, Grid, Link, Paper, Tooltip, Typography } from '@mui/material';
import DOMPurify from 'dompurify';


const Publications: React.FC = () => {
    const { data: publicationData, loading: publicationLoading, error: publicationError } = useQuery<{ publications: [PublicationType] }>(GET_PUBLICATIONS);

    return (
        <Page maxWidth="lg" sx={{ marginTop: 4, marginBottom: 4  }} loading={publicationLoading}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12 }}>
                    <Typography variant="h4">
                        Publications
                    </Typography>
                </Grid>
                {publicationData?.publications.map((value, index) => (
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
                                            src={`data:image/jpeg;base64,${value.urls.image}`}
                                        />
                                    </Box>
                                </Grid>
                                {/* Text Section */}
                                <Grid size={{ xs: 12, md: 10 }} sx={{p: 1, pl: 2}}>
                                    <Box pt={1}>
                                        <Tooltip title={value.urls.name} placement="right-end" arrow>
                                            <Link
                                                href={value.urls.url}
                                                target="_blank"
                                                variant="h6"
                                            >
                                                {value.title}
                                            </Link>
                                        </Tooltip>
                                        <br />
                                        <Typography variant="overline">
                                            <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(value.authors) }} />
                                        </Typography>
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

export default Publications;