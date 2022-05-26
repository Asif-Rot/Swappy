import NavBar from '../components/NavBar'
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import React ,{useState, useEffect} from 'react'

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';

const theme = createTheme();

/**
 * MyTrades page
 * @returns {JSX.Element}
 * @constructor
 */
 export default function MyTrades(){

    const [trades, setTrades] = useState([]);
   
    const getAllTrades = async () => {
        await fetch('http://localhost:3001/trade/allTrade')
        .then((res) => res.json())
        .then((json) => {
          console.log(json)
          setTrades(json)
        })
    }
    useEffect(() => {
        getAllTrades()
    }, [])


    return(
        <ThemeProvider theme={theme}>
            <NavBar/>
            <Container component="main" maxWidth="xs"  >
                <CssBaseline/>
                <h1>ההצעות שלי</h1>
                <Grid container spacing={5}>
                 { trades.map((trade) => ( 
                    <Grid item xs={6} sm={12} >
                        <Card sx={{ maxWidth: 400 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image="https://www.e-vrit.co.il/Images/Products/YediotMasters/HarryPottter2_Master.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    שם המוצר המבוקש
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    המבקש: { trade.offered_by_id.firstName} { trade.offered_by_id.lastName}<br/> 
                                    סטטוס: { trade.status}<br/>
                                    פרטים נוספים: { trade.details } 
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">קבל הצעה</Button>
                                <Button size="small">סרב להצעה </Button>
                                <Button size="small">פרטים נוספים</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}                
                </Grid>
            </Container>
        </ThemeProvider>
    )
}
