import {useEffect, useState} from "react";
import {getId} from '../utils';
import NavBar from '../components/NavBar'
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Button from "@mui/material/Button";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from "@mui/material/Typography";
import {useHistory} from 'react-router-dom';

const userID = getId();
const theme = createTheme();

export default function ItemDetails(props) {
    const item = props.location.state.item
    const [oneItem, setOneItem] = useState([]);
    const [openDel, setopenDel] = useState(false);
    const history=useHistory();

    const handleClickOpenDelete = () => {
        setopenDel(true);
    };

    const handleCloseDelete = () => {
        setopenDel(false);
    };

    const getOneItem = async () => {
        await fetch('http://localhost:3001/item/'+ item,{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((json) => {
                setOneItem(json)
            })
    };

    const handleMakeTrade =  () => {
        history.push('/newTrade',{
            item: oneItem
        })
    }

    const handleDelete = () => {
        fetch('http://localhost:3001/item/' + item,{
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((json) => {
                setopenDel(false);
            })
        const onlyPublicId = String(oneItem.image_public_id).replace("book_img/", "");
        fetch("http://localhost:3001/imageItem/deleteItem/"+onlyPublicId,{
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
            })
        history.push('/')
        window.location.reload(false);
    }

    useEffect(() => {
        getOneItem();
    },[]);

    return (
          <ThemeProvider theme={theme}>
              <NavBar/>
              <div style={{fontFamily: 'Tahoma'}}>
                  <h1>{oneItem.name}</h1>
                  <img src={oneItem.image}
                       alt='item_img'
                       width={200}
                  />
                  <br/><br/>
                  <Button
                      style={{ display: (oneItem.user_id === userID) ? 'none' : undefined }}
                      variant="contained"
                      // disabled={(oneItem.user_id !== userID) ? true : false }
                      onClick={handleMakeTrade.bind(this,item)}
                   >הצע החלפה</Button>

                  <Typography variant="body2" color="text.secondary">
                      <b><br/> סוג המוצר:</b> {(oneItem.item_type === "book") ? "ספר" : "משחק וידאו"}<br/><br/>
                      <b>מצב המוצר: </b>
                      {(oneItem.item_condition === "as new") ? "כמו חדש" :
                          (oneItem.item_condition === "used") ? "משומש" : "לא טוב"}<br/><br/>
                      <b>מחבר: </b> { oneItem.author }<br/><br/>
                      <b>ז'אנר: </b> {(oneItem.genre > 0) ? oneItem.genre.join(', ') : ""}<br/><br/>
                      <b>פרטים נוספים: </b> {(oneItem.description)}<br/><br/>
                  </Typography>
                  <Button
                      style={{ display: (oneItem.user_id !== userID) ? 'none' : undefined }}
                      variant="contained"
                      color="error"
                      // disabled={(oneItem.user_id !== userID) ? true : false }
                      onClick={handleClickOpenDelete}>
                      מחיקת פריט
                  </Button>
                  <Dialog
                      open={openDel}
                      onClose={handleCloseDelete}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                  >
                      <DialogTitle id="alert-dialog-title">
                          {"אישור מחיקת פריט"}
                      </DialogTitle>
                      <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                              האם את/ה בטוח/ה שברצונך למחוק פריט זה?
                          </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                          <Button onClick={handleCloseDelete}>לא</Button>
                          <Button onClick={handleDelete} autoFocus>
                              כן
                          </Button>
                      </DialogActions>
                  </Dialog>
              </div>
          </ThemeProvider>

    )
}