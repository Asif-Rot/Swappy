import NavBar from '../components/NavBar'
import {createTheme, ThemeProvider} from '@mui/material/styles';
import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
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
                <FloatingActionButtonSize />
            </Container>
        </ThemeProvider>
    )
}

function FloatingActionButtonSize() {
    return (
        <Fab
            color="primary"
            aria-label="add"
            onClick={ () =>
                console.log('floating clicked') }
        >
            <Tooltip title={"הוספת פריט חדש"}>
                <AddIcon color="inherit" />
            </Tooltip>
        </Fab>
    );
}

export default Home;