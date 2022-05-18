import React from 'react'
import NavBar from '../components/NavBar'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme();


export default function Message(){
    return(
        <div>
            <ThemeProvider theme={theme}>
                <NavBar/>
                <Container component="main" maxWidth="xs" >
                    <CssBaseline/>
                    <h2>Message Page</h2>
                </Container>
            </ThemeProvider>
        </div>
    );
}