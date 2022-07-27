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
import {useHistory} from 'react-router-dom';
import Button from "@mui/material/Button";

export default function SpringCarousel() {

    // <ListItem alignItems={'center'}
    //           style={{maxHeight: '100%', overflow: 'auto', maxWidth: '100%'}}
    // >
    const [imgBook, setImgBook] = React.useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);
    const history=useHistory();

    const handleDetails =  async (itemID) => {
        await fetch('http://localhost:3001/item/' + itemID,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((json) => {
                // console.log(json)
            })
        history.push('/itemdetails/'+itemID,{
            item: itemID
        })
    }

    const getAllItems = async () => {
            await fetch('http://localhost:3001/item/allitem')
                .then((res) => res.json())
                .then((json) => {
                    setItems(json)
                })
    }

    useEffect(() => {
        getAllItems()
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
                {items.length?
                    items.map((item, i) => (
                <Grid item mx={1} key={i}>
                    <Card>
                        <Button onClick={handleDetails.bind(this,item._id)}>
                        <img src={item.image}
                             alt='item_img'
                             width={200}
                        />
                        </Button>
                    </Card>
                </Grid>
                    )) : <p><br/>אין פריטים עדיין...</p>}
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