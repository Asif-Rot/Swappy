import React, {useContext} from 'react'
import {useState, useEffect} from 'react'

import {getId} from '../utils';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import NavBar from '../components/NavBar'
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import {TextField} from '@mui/material';
import Grid from '@mui/material/Grid';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
const theme = createTheme();


/**
 * Profile page for show info about user
 * @returns {JSX.Element}
 * @constructor
 */
export default function Profile() {
    const [user, setUser] = useState("Jesse Hall");
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birth, setBirth] = React.useState('');
    const [imgProfile, setImgProfile] = React.useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [profile, setProfile] = useState('');
    const getUser = async () => {
        const id = getId();
        await fetch("http://localhost:3001/user/" + id, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(function (response) {
            return response.json();
        }).then(function (user) {
            if (user) {
                setProfile(user['sendUser']);
                setEmail(user['sendUser'].email)
                setFirstName(user['sendUser'].firstName)
                setLastName(user['sendUser'].lastName)
                setBirth(user['sendUser'].birth)
                setImgProfile(user['sendUser'].imageProfile)
                setIsLoading(false);
                getImage(user['sendUser'].imageProfile)
                return;
            } else {
                console.log('no user');
            }
        });
    }
    useEffect(() => {
        getUser()

    }, [])

    const getImage = async (imgId) =>{
        await fetch("http://localhost:3001/image/getImages/" + imgId, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(function (response) {
            return response.json();
        }).then(function (image) {
            if (image) {
                setImgProfile(image.urlImage)
                return;
            } else {
                console.log('Not found Img');
            }
        });
    }
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleChangeFirstName = (event) => {
        setFirstName(event.target.value);
    };
    const handleChangeLastName = (event) => {
        setLastName(event.target.value);
    };
    const handleChangeBirth = (event) => {
        setBirth(event.target.value);
    };
    const getUrl =()=>{
        return imgProfile.toString()
    }
    return (

        <ThemeProvider theme={theme}>

            <NavBar/>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div>
                    {/* load spinner */}
                    <Backdrop
                        sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                        open={isLoading}
                    >
                        <CircularProgress color="inherit"/>
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
                            src={imgProfile}
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
                                id="outlined-multiline-flexible"
                                margin="normal"

                                label="אימייל"
                                multiline
                                maxRows={4}
                                value={email}
                                onChange={handleChangeEmail}
                            />
                            <TextField
                                id="outlined-multiline-flexible"
                                margin="normal"
                                label="שם פרטי"
                                multiline
                                maxRows={4}
                                value={firstName}
                                onChange={handleChangeFirstName}
                            />
                            <TextField
                                id="outlined-multiline-flexible"
                                margin="normal"
                                label="שם משפחה"
                                multiline
                                maxRows={4}
                                value={lastName}
                                onChange={handleChangeLastName}
                            />

                            <Grid item xs={12} margin="normal">
                                <LocalizationProvider dateAdapter={AdapterDateFns} >
                                    <DatePicker

                                        label="תאריך לידה"
                                        value={birth}
                                        onChange={(newValue) => {
                                            setBirth(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>

                            </Grid>
                        </Box>
                    </Box>
                </div>
            </Container>
        </ThemeProvider>
    );
}

