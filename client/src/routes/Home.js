import NavBar from '../components/NavBar'
import {createTheme, ThemeProvider} from '@mui/material/styles';
import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
const theme = createTheme();

/**
 * Home page
 * @returns {JSX.Element}
 * @constructor
 */
function Home(){
    return(
        <ThemeProvider theme={theme}>
            <NavBar/>
            <Container component="main" maxWidth="xs" >
                <CssBaseline/>
                 <h2>Home Page</h2>
            </Container>
        </ThemeProvider>
    )
}

export default Home;