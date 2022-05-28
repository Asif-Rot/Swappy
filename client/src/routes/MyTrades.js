import NavBar from '../components/NavBar'
import {getId} from '../utils';
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

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const theme = createTheme();

function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }



/**
 * MyTrades page
 * @returns {JSX.Element}
 * @constructor
 */
 export default function MyTrades(){

    const [trades, setTrades] = useState([]);
    const [value, setValue] = useState(0);

    // to handle with tab change
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
   
    const getAllTrades = async () => {
        const userID = getId();
        await fetch('http://localhost:3001/trade/userTrade/' + userID)
        .then((res) => res.json())
        .then((json) => {
          console.log(json)
          setTrades(json)
        })
    }

    const getSendTrades = async () => {
        const userID = getId();
        await fetch('http://localhost:3001/trade/userSendTrade/' + userID)
        .then((res) => res.json())
        .then((json) => {
          console.log(json)
          setTrades(json)
        })
    }

    const getGotTrades = async () => {
        const userID = getId();
        await fetch('http://localhost:3001/trade/userGotTrade/' + userID)
        .then((res) => res.json())
        .then((json) => {
          console.log(json)
          setTrades(json)
        })
    }

    const getFunc = () => {
        switch(value) {
            case 0:
                getGotTrades()
                break;
            case 1:
                getSendTrades()
                break;
            case 2:
                getAllTrades()
                break;
            default:
        }
          
    }
    useEffect(() => {
        getFunc()
    }, [value])

    return(
        <ThemeProvider theme={theme}>
            <NavBar/>
            <Container component="main" maxWidth="xs"  >
            {/* <h1> ההצעות שלי</h1> */}
                <Box sx={{ width: '100%' }} >
                    <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
                        <LinkTab label="הצעות שהתקבלו" href="/" />
                        <LinkTab label="הצעות שנשלחו" href="/trash" />
                        <LinkTab label="היסטוריית הצעות" href="/spam" />
                    </Tabs>
                </Box>
                <CssBaseline/>
                <Grid container spacing={5} paddingBottom='50px' paddingTop='10px'>
                 { trades.map((trade) => ( 
                    <Grid item xs={6} sm={12} key={trade._id}>
                        <Card sx={{ maxWidth: 400 }} 
                        style={{  minWidth: 275,
                            border: "1px solid",
                            padding: "10px",
                            boxShadow: "5px 10px grey"}} >
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