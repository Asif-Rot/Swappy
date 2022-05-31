import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import logo from '../swapy.jpeg'
import { CardMedia } from '@mui/material';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

const theme = createTheme({
    direction: 'rtl',
  });


/**
 * New user registration page and entry into the database via post
**/
export default function SignUp() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if (data.get('email') === '' || data.get('password') === '' || data.get('firstName') === '' ||
            data.get('lastName') === '' || data.get('sex') === '' || data.get('birth') === ''
        ) {
            console.log('error')
            alert('Everything has to be filled')
        } else {
            const user = {
                "email": data.get('email'),
                "password": data.get('password'),
                "firstName": data.get('firstName'),
                "lastName": data.get('lastName'),
                "birth": birth.toString(),
                "sex": sex.toString()

            }
            console.log(user)
            await fetch("http://localhost:3001/user/signup", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user)
            }).then(function (response) {
                return response.json();
            })
                .then(function (user) {
                    if (user.message === "User created") {
                        alert("registarion succeeded");
                    } else
                        alert(user.message);
                });
        }
    };

    const [sex, setSex] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setSex(event.target.value.toString());
    };

    const [birth, setBirth] = React.useState(null);


    return (
        <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <CardMedia
                        component="img"
                        height="125"
                        image={logo}
                        alt="green iguana"
                    />
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        הרשמה
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="שם פרטי"
                                    autoFocus
                                />
                            </Grid>                          
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="שם משפחה"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="כתובת אימייל"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}> 
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="סיסמה"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{minWidth: 120}}>
                                    <FormControl fullWidth>
                                        <InputLabel id="select-label">מין</InputLabel>
                                        <Select
                                            labelId="select-label"
                                            id="simple-select"
                                            value={sex}
                                            label="מין"
                                            onChange={handleChange}
                                            sx={{width: 220}}
                                        >
                                            <MenuItem value={'man'}>זכר</MenuItem>
                                            <MenuItem value={'woman'}>נקבה</MenuItem>
                                            <MenuItem value={'other'}>אחר</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
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
                        </Grid>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            הירשם
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    יש לך שם משתמש? התחבר
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
        </CacheProvider>
    );
}