import React from 'react'
import { isLogin } from '../utils';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const theme = createTheme();
export default function Profile(){
    return(
        <ThemeProvider theme={theme}>
                My profile page will be soon
            </ThemeProvider>
    );
}

