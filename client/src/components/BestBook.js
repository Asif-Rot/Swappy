import {useSpringCarousel} from 'react-spring-carousel'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import React, {useEffect, useState} from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';

export default function SpringCarousel() {

    // <ListItem alignItems={'center'}
    //           style={{maxHeight: '100%', overflow: 'auto', maxWidth: '100%'}}
    // >
    const [imgBook, setImgBook] = React.useState('');
    const [isLoading, setIsLoading] = useState(true);

    const getImage = async (imgId) =>{
        await fetch("http://localhost:3001/imageBook/getImageBook/" + "media_178ebed46ae02d6f3284c7886e9b28c5bb9046a02_rszee2", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(function (response) {
            return response.json();
        }).then(function (image) {
            if (image) {
                setImgBook(image.urlImage)
                setIsLoading(false);
                return;
            } else {
                console.log('Not found Img');
            }
        });
    }
    useEffect(() => {
        getImage()
    }, [])
    return (
        <Grid container>
            {/* load spinner */}
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={isLoading}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
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
                            // src="https://res.cloudinary.com/dt9z5k8rs/image/upload/v1658053447/book_img/media_178ebed46ae02d6f3284c7886e9b28c5bb9046a02_rszee2.jpg"
                            src={imgBook}
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