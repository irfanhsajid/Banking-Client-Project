import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const data = [
    {
        id: 1,
        category: 'Monthly',
        month: {
            january: 0,
            february: 5000,
            march: 6000,
            april: 4000,
            may: -2000,
            june: 1000,
            july: 300,
            august: 0.00,
            september: 1000,
            october: 1000,
            november: 6000,
            december: 7000
        }
    },
    {
        id: 2,
        category: 'Cash-Flow (Cumulative)',
        month: {
            january: 100,
            february: 5000,
            march: 6000,
            april: 4000,
            may: -2000,
            june: 100,
            july: 300,
            august: 10000,
            september: 1000,
            october: 1000,
            november: 6000,
            december: 700
        }
    },
    {
        id: 3,
        category: 'Speculation(Cum.Scenario)',
        month: {
            january: 0,
            february: 5000,
            march: 6000,
            april: 4000,
            may: -2000,
            june: 1000,
            july: 300,
            august: 300,
            september: 1000,
            october: 1000,
            november: 6000,
            december: 7000
        }
    }

]

const Footer = () => {
    return (

        < >
            <br /> <br />
            <Box>
                <Grid container spacing={8} >
                    <Grid item md={2}>
                        <Grid container >
                            <Grid item>
                                <Typography >Monthly</Typography>
                            </Grid>
                            <Grid Grid item >
                                <Typography>Cash-Flow (Cumulative)</Typography>
                            </Grid>
                            <Grid item>
                                <Typography>Speculation (Cum.Scenario)</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={10}>
                        <Grid container spacing={2} >
                            <Grid item md={3} lg={1} >
                                <Grid container  >
                                    <Grid item>
                                        <Typography> $ 1000</Typography>
                                    </Grid>
                                    <Grid item >
                                        <Typography>$ 5000</Typography>
                                    </Grid>
                                    <Grid item >
                                        <Typography>$ 4000</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={3} lg={1} >
                                <Grid container  >
                                    <Grid item>
                                        <Typography> $ 1000</Typography>
                                    </Grid>
                                    <Grid item >
                                        <Typography>$ 5000</Typography>
                                    </Grid>
                                    <Grid item >
                                        <Typography>$ 4000</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={3} lg={1} >
                                <Grid container  >
                                    <Grid item>
                                        <Typography> $ 1000</Typography>
                                    </Grid>
                                    <Grid item >
                                        <Typography>$ 5000</Typography>
                                    </Grid>
                                    <Grid item >
                                        <Typography>$ 4000</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={3} lg={1} >
                                <Grid container  >
                                    <Grid item>
                                        <Typography> $ 1000</Typography>
                                    </Grid>
                                    <Grid item >
                                        <Typography>$ 5000</Typography>
                                    </Grid>
                                    <Grid item >
                                        <Typography>$ 4000</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={3} lg={1} >
                                <Grid container  >
                                    <Grid item>
                                        <Typography> $ 1000</Typography>
                                    </Grid>
                                    <Grid item >
                                        <Typography>$ 5000</Typography>
                                    </Grid>
                                    <Grid item >
                                        <Typography>$ 4000</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={3} lg={1} >
                                <Grid container  >
                                    <Grid item>
                                        <Typography> $ 1000</Typography>
                                    </Grid>
                                    <Grid item >
                                        <Typography>$ 5000</Typography>
                                    </Grid>
                                    <Grid item >
                                        <Typography>$ 4000</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={3} lg={1} >
                                <Grid container  >
                                    <Grid item>
                                        <Typography> $ 1000</Typography>
                                    </Grid>
                                    <Grid item >
                                        <Typography>$ 5000</Typography>
                                    </Grid>
                                    <Grid item >
                                        <Typography>$ 4000</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={3} lg={1} >
                                <Grid container  >
                                    <Grid item>
                                        <Typography> $ 1000</Typography>
                                    </Grid>
                                    <Grid item >
                                        <Typography>$ 5000</Typography>
                                    </Grid>
                                    <Grid item >
                                        <Typography>$ 4000</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={3} lg={1} >
                                <Grid container  >
                                    <Grid item>
                                        <Typography> $ 1000</Typography>
                                    </Grid>
                                    <Grid item >
                                        <Typography>$ 5000</Typography>
                                    </Grid>
                                    <Grid item >
                                        <Typography>$ 4000</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={3} lg={1} >
                                <Grid container  >
                                    <Grid item>
                                        <Typography> $ 1000</Typography>
                                    </Grid>
                                    <Grid item >
                                        <Typography>$ 5000</Typography>
                                    </Grid>
                                    <Grid item >
                                        <Typography>$ 4000</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={3} lg={1} >
                                <Grid container  >
                                    <Grid item>
                                        <Typography> $ 1000</Typography>
                                    </Grid>
                                    <Grid item >
                                        <Typography>$ 5000</Typography>
                                    </Grid>
                                    <Grid item >
                                        <Typography>$ 4000</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={3} lg={1} >
                                <Grid container  >
                                    <Grid item>
                                        <Typography> $ 1000</Typography>
                                    </Grid>
                                    <Grid item >
                                        <Typography>$ 5000</Typography>
                                    </Grid>
                                    <Grid item >
                                        <Typography>$ 4000</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Box>


        </>

    );
};

export default Footer;