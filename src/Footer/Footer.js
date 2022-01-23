import { Container, Grid, Typography } from '@mui/material';
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

        <Container sx={{ backgroundColor: '' }}>
            <Grid container
                justifyContent="center"
                alignItems="center"
                rowSpacing={6}
                spacing={{ xs: 2, md: 2 }}>

                {
                    data.map((d, id) => <Grid item xs={12} md={4} >
                        <Box  >
                            <Typography variant='h6'>{d.category}</Typography>
                            <Typography>$ {d.month.january}</Typography>
                            <Typography>$ {d.month.february}</Typography>
                            <Typography>$ {d.month.march}</Typography>
                            <Typography>$ {d.month.april}</Typography>
                            <Typography>$ {d.month.may}</Typography>
                            <Typography>$ {d.month.june}</Typography>
                            <Typography>$ {d.month.july}</Typography>
                            <Typography>$ {d.month.august}</Typography>
                            <Typography>$ {d.month.september}</Typography>
                            <Typography>$ {d.month.october}</Typography>
                            <Typography>$ {d.month.november}</Typography>
                            <Typography>$ {d.month.december}</Typography>
                        </Box>
                    </Grid>)
                }



            </Grid>


        </Container>

    );
};

export default Footer;