import NavBar from '../components/NavBar'
import BestBook from '../components/BestBook'
import NewItem from './NewItem'
import {createTheme, ThemeProvider} from '@mui/material/styles';
import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const theme = createTheme();


/**
 * Home page
 * @returns {JSX.Element}
 * @constructor
 */
function Home() {
    return (

        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <NavBar/>

                <Typography align={"center"} mt={2} variant="h4">
                    ברוכים הבאים
                </Typography>
            <BestBook/>
        </ThemeProvider>
    )
}


export default Home;