import React, {useState} from "react";
import {getId} from '../utils';
import Button from "@mui/material/Button";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormHelperText from '@mui/material/FormHelperText';

const userID = getId();

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const Input = styled('input')({
    display: 'none',
});

const genres = [
    'רומן',
    'מותחן',
    'דרמה',
    'מדע בדיוני',
    'פנטזיה',
    'קומדיה',
    'ספרות בלשית',
    'ספרות צבאית',
    'קומיקס',
    'ספרות זולה',
    'צ\'ק ליט'
];

// const style = {
//     font: 'Sans-serif',
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 600,
//     height: 750,
//     bgcolor: 'white',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// };

export default function AddNewItem() {
    // Handling '+' button
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {setOpen(true)};
    const handleClose = () => {setOpen(false)};

    // state for every field
    const [itemType, setItemType] = useState('');
    const [itemName, setItemName] = useState('');
    const [itemCondition, setItemCondition] = useState('');
    const [author, setauthor] = useState('');
    const [genre, setgenre] = useState([]);
    const [description, setdescription] = useState('');

    // state for error
    const [inputInvalidtype, setInputInvalidtype] = useState();
    const [inputerrortype, setInputerrortype] = useState(false);
    const [inputInvalidname, setInputInvalidname] = useState();
    const [inputerrorname, setInputerrorname] = useState(false);
    const [inputInvalidcond, setInputInvalidcond] = useState();
    const [inputerrorcond, setInputerrorcond] = useState(false);

    const typeUpdate=(event)=>{ // Dealing with type field changes to update our state
        setItemType(event.target.value);
        setInputInvalidtype('');
        setInputerrortype(false);
    }
    const nameUpdate=(event)=>{ // Dealing with name field changes to update our state
        setItemName(event.target.value)
        setInputInvalidname('');
        setInputerrorname(false);
    }
    const conditionUpdate=(event)=>{ // Dealing with condition field changes to update our state
        setItemCondition(event.target.value)
        setInputInvalidcond('');
        setInputerrorcond(false);
    }
    const authorUpdate=(event)=>{ // Dealing with author field changes to update our state
        setauthor(event.target.value)
    }
    const genreUpdate=(event)=>{ // Dealing with genre field changes to update our state
        const {
            target: { value },
        } = event;
        setgenre(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    }

    const descriptionUpdate=(event)=>{ // Dealing with description field changes to update our state
        setdescription(event.target.value)
    }
    function validation(jsonreq) {
        if(jsonreq.item_type === ""){
            console.log('empty item_type');
            setInputInvalidtype("דרוש סוג מוצר");
            setInputerrortype(true);
            return false;
        }
        if(jsonreq.name === ""){
            console.log('empty name');
            setInputInvalidname("דרוש שם");
            setInputerrorname(true);
            return false;
        }
        if(jsonreq.item_condition === ""){
            console.log('empty item_condition');
            setInputInvalidcond("דרוש מצב מוצר");
            setInputerrorcond(true);
            return false;
        }
        console.log(jsonreq);
        return true;
    }
    const handleSubmit = () => {
        debugger;
        let bodyjson = { // We should keep the fields consistent for managing this data later
            item_type: itemType,
            name: itemName,
            item_condition: itemCondition,
            author: author,
            genre: genre,
            description: description
        }

        let flag =  validation(bodyjson);
        if (flag) {
        fetch('http://localhost:3001/item/additem/' + userID, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({bodyjson})
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .then(()=>{
                // Once posted, the user will be notified
                alert('You have been added a product to the system!');
            })
    } else {
            console.log('You have missing ardguments!');
    }
}


    return (
        <div>
            <Fab m={150}
                color="primary"
                aria-label="add"
                onClick={handleClickOpen} >
                <Tooltip title={"הוספת פריט חדש"}>
                    <AddIcon color="inherit"/>
                </Tooltip>
            </Fab>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>הוספת פריט חדש</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        בחר סוג מוצר ולאחר מכן מלא את כל הפרטים הדרושים.
                    </DialogContentText><br/>


                        <FormControl fullWidth>
                            <InputLabel required id="itemtype-select-label" >סוג מוצר</InputLabel>
                            <Select
                                labelId="itemtype-select-label"
                                id="itemtype-select"
                                // className = {`input ${inputInvalid ? "input-invalid" : ""}`}
                                error={inputerrortype}
                                // helperText="דרוש סוג מוצר"{`input ${inputInvalid ? "דרוש סוג מוצר" : ""}
                                value={itemType}
                                label="itemType"
                                onChange={typeUpdate}
                            >
                                <MenuItem value="book">ספר</MenuItem>
                                <MenuItem value="video game">משחק וידאו</MenuItem>
                           </Select>
                            <FormHelperText error>{inputInvalidtype}</FormHelperText>
                        </FormControl><br/><br/>

                        <TextField fullWidth id="ProductName"
                                   required onChange={nameUpdate}
                                   error={inputerrorname}
                                   helperText={inputInvalidname}
                                   label="שם מוצר"
                                   variant="outlined"/><br/><br/>

                        <FormControl fullWidth>
                            <InputLabel required id="itemCondition-select-label">מצב מוצר</InputLabel>
                            <Select
                                labelId="itemCondition-select-label"
                                id="itemCondition-select"
                                value={itemCondition}
                                label="itemCondition"
                                error={inputerrorcond}
                                onChange={conditionUpdate}
                            >
                                <MenuItem value="as new">כמו חדש</MenuItem>
                                <MenuItem value="used">משומש</MenuItem>
                                <MenuItem value="bad">לא טוב</MenuItem>
                            </Select>
                            <FormHelperText error>{inputInvalidcond}</FormHelperText>
                        </FormControl><br/><br/>

                        <TextField fullWidth id="author"
                                   onChange={authorUpdate}
                                   label="מחבר"
                                   variant="outlined"/><br/><br/>

                        <FormControl fullWidth>
                            <InputLabel id="genre-multiple-checkbox-label">ז'אנר</InputLabel>
                            <Select
                                labelId="genre-multiple-checkbox-label"
                                id="genre-multiple-checkbox"
                                multiple
                                value={genre}
                                onChange={genreUpdate}
                                input={<OutlinedInput label="genre" />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                                {genres.map((name) => (
                                    <MenuItem key={name} value={name}>
                                        <Checkbox checked={genre.indexOf(name) > -1} />
                                        <ListItemText primary={name} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl><br/><br/>

                        <TextField fullWidth id="description"
                                   onChange={descriptionUpdate}
                                   label="פרטים נוספים"
                                   variant="outlined"/><br/><br/>

                        <Stack direction="row" spacing={2}>
                            <label htmlFor="contained-button-file">
                                <Input accept="image/*" id="contained-button-file" multiple type="file" />
                                <Button variant="contained" component="span">
                                    העלאת תמונה
                                </Button>
                            </label>
                            <label htmlFor="icon-button-file">
                                <Input accept="image/*" id="icon-button-file" type="file" />
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <PhotoCamera />
                                </IconButton>
                            </label>
                        </Stack><br/><br/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>ביטול</Button>
                    <Button onClick={handleSubmit}>שלח</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}