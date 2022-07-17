import React from 'react'
import {useContext, useEffect, useRef, useState} from 'react';
import NavBar from '../components/NavBar'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Conv from '../components/chat/Conversation'
import Msg from '../components/chat/Message'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const theme = createTheme();


export default function Message() {
    return (


        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <NavBar/>
            Message Page
        </ThemeProvider>


    );
}