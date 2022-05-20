import React from 'react'
import {useState, useEffect} from 'react'
import {getEmail} from '../utils';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import NavBar from '../components/NavBar'
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';

const theme = createTheme();
/**
 * Profile page for show info about user
 * @returns {JSX.Element}
 * @constructor
 */
export default function Profile() {

    const [isLoading, setIsLoading] = useState(true);
    const [profile, setProfile] = useState('');

    const getUser = async () => {
        const mail = getEmail();
        await fetch("http://localhost:3001/user/" + mail, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(function (response) {
            return response.json();
        }).then(function (user) {
            if (user) {
                setProfile(user['sendUser']);
                setIsLoading(false);
                console.log({profile})

                return ;
            } else {
                console.log('no user');
            }
        });
    }
    useEffect(() => {
        getUser()
    }, [])



    return (
        <ThemeProvider theme={theme}>
            <NavBar/>
            <Container component="main" maxWidth="xs" >
                <CssBaseline/>
                <div>
                    {/* load spinner */}
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={isLoading}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>

                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                        <Avatar
                            alt="Remy Sharp"
                            src=''
                            sx={{width: 80, height: 80}}
                        />
                        <Box component="form"
                             sx={{
                                 marginTop: 4,
                                 display: 'flex',
                                 flexDirection: 'column',
                                 alignItems: 'center',
                                 mt: 2
                             }}>

                            <TextField
                                id="filled-number"
                                label="אימייל"
                                type="object"
                                defaultValue={profile.id}
                            />


                            <TextField
                                margin="normal"
                                id="input-with-icon-textfield"
                                label="שם פרטי "

                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">

                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                            /><TextField
                            margin="normal"
                            id="input-with-icon-textfield"
                            label="שם משפחה "
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">

                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                        />
                            <TextField
                                margin="normal"
                                id="input-with-icon-textfield"
                                label="יום הולדת"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">

                                        </InputAdornment>
                                    ),
                                }}
                                variant="standard"
                            />

                        </Box>
                    </Box>
                </div>
            </Container>
        </ThemeProvider>
    );
}

