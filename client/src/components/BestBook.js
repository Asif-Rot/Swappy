import {useSpringCarousel} from 'react-spring-carousel'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';

export default function SpringCarousel() {

    // <ListItem alignItems={'center'}
    //           style={{maxHeight: '100%', overflow: 'auto', maxWidth: '100%'}}
    // >
    return (
        <Grid container>

            <Box style={{marginRight: 80, marginBlockEnd: -80, marginTop: 50,}}>
                <h2>פריטים החדשים באתר :</h2>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: {md: 'row'},
                    alignItems: 'center',
                    bgcolor: 'background.paper',
                    // bgcolor:  'black',
                    overflow: 'auto',
                    borderRadius: '16px',
                    boxShadow: 1,
                    fontWeight: 'bold',
                    m: 10,
                    justifyContent: 'flex-start',
                    alignContent: 'flex-start',

                }}
            >
                <Grid item mx={1}>
                    <Card>
                        <img alt="harry poter"
                             src="https://www.e-vrit.co.il/Images/Products/YediotMasters/HarryPottter2_Master.jpg"
                             width={200}
                        />
                    </Card>
                </Grid>
                <Grid item mx={1}>
                    <Card>
                        <img alt="harry poter"
                             src="https://www.e-vrit.co.il/Images/Products/YediotMasters/HarryPottter2_Master.jpg"
                             width={200}
                        />
                    </Card>
                </Grid>
                <Grid item mx={1}>
                    <Card>
                        <img alt="harry poter"
                             src="https://www.e-vrit.co.il/Images/Products/YediotMasters/HarryPottter2_Master.jpg"
                             width={200}
                        />
                    </Card>
                </Grid>
                <Grid item mx={1}>
                    <Card>
                        <img alt="harry poter"
                             src="https://www.e-vrit.co.il/Images/Products/YediotMasters/HarryPottter2_Master.jpg"
                             width={200}
                        />
                    </Card>
                </Grid>
                <Grid item mx={1}>
                    <Card>
                        <img alt="harry poter"
                             src="https://www.e-vrit.co.il/Images/Products/YediotMasters/HarryPottter2_Master.jpg"
                             width={200}
                        />
                    </Card>
                </Grid>
                <Grid item mx={1}>
                    <Card>
                        <img alt="harry poter"
                             src="https://www.e-vrit.co.il/Images/Products/YediotMasters/HarryPottter2_Master.jpg"
                             width={200}
                        />
                    </Card>
                </Grid>
            </Box>

            {/**
                The best five book in web
             */}


            <Box style={{marginRight: 80, marginBlockEnd: -80, marginTop: 50}}>
                <h2>המומלצים ביותר :</h2>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: {md: 'row'},
                    alignItems: 'center',
                    bgcolor: 'background.paper',
                    // bgcolor:  'black',
                    overflow: 'auto',
                    borderRadius: '16px',
                    boxShadow: 1,
                    fontWeight: 'bold',
                    m: 10,
                    justifyContent: 'flex-start',
                    alignContent: 'flex-start',

                }}
            >
                <Grid item mx={1}>
                    <Card>
                        <img alt="harry poter"
                             src="https://www.e-vrit.co.il/Images/Products/YediotMasters/HarryPottter2_Master.jpg"
                             width={200}
                        />
                    </Card>
                </Grid>
                <Grid item mx={1}>
                    <Card>
                        <img alt="harry poter"
                             src="https://www.e-vrit.co.il/Images/Products/YediotMasters/HarryPottter2_Master.jpg"
                             width={200}
                        />
                    </Card>
                </Grid>
                <Grid item mx={1}>
                    <Card>
                        <img alt="harry poter"
                             src="https://www.e-vrit.co.il/Images/Products/YediotMasters/HarryPottter2_Master.jpg"
                             width={200}
                        />
                    </Card>
                </Grid>
                <Grid item mx={1}>
                    <Card>
                        <img alt="harry poter"
                             src="https://www.e-vrit.co.il/Images/Products/YediotMasters/HarryPottter2_Master.jpg"
                             width={200}
                        />
                    </Card>
                </Grid>
                <Grid item mx={1}>
                    <Card>
                        <img alt="harry poter"
                             src="https://www.e-vrit.co.il/Images/Products/YediotMasters/HarryPottter2_Master.jpg"
                             width={200}
                        />
                    </Card>
                </Grid>
                <Grid item mx={1}>
                    <Card>
                        <img alt="harry poter"
                             src="https://www.e-vrit.co.il/Images/Products/YediotMasters/HarryPottter2_Master.jpg"
                             width={200}
                        />
                    </Card>
                </Grid>
            </Box>
        </Grid>

    );
}