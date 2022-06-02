import React, {useState} from 'react'
import NavBar from '../components/NavBar'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Button from "@mui/material/Button";
import {getId} from '../utils';

const theme = createTheme();
const userID = getId();

export default function MyItems(){
    const [items, setItems] = useState([]);

    const getAllItems = async () => {
        await fetch('http://localhost:3001/item/allitem')
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
            })
    }

    const getUserItems = async () => {
        await fetch('http://localhost:3001/item/getitembyuser/' + userID)
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                setItems(json)
            })
    }
    const getUserItemsbybook = async () => {
        await fetch('http://localhost:3001/item/getitembyuser/' + userID + '/book')
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
            })
    }
    const getUserItemsbygame = async () => {
        await fetch('http://localhost:3001/item/getitembyuser/' + userID + '/video game')
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
            })
    }

    return(
        <div>
            <ThemeProvider theme={theme}>
                <NavBar/>
                <Container component="main" maxWidth="xs" >
                    <CssBaseline/>
                    <h2>Items Page</h2>
                    <Button size="small" onClick={getAllItems}>כל הפריטים</Button>
                    <br/><br/>
                    <Button size="small" onClick={getUserItems}>כל הפריטים של המשתמש</Button>
                    <br/><br/>
                    <Button size="small" onClick={getUserItemsbybook}>כל הספרים של המשתמש</Button>
                    <br/><br/>
                    <Button size="small" onClick={getUserItemsbygame}>כל המשחקים של המשתמש</Button>
                </Container>
            </ThemeProvider>
        </div>
    );
}