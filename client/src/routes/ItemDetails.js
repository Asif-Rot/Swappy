import {useEffect, useState} from "react";
import {getId} from '../utils';
import NavBar from '../components/NavBar'
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const userID = getId();
const theme = createTheme();

export default function ItemDetails(props) {
    const item = props.location.state.item
    // console.log("item", item);
    const [oneItem, setOneItem] = useState([]);

    const getOneItem = () => {
        fetch('http://localhost:3001/item/'+ item,{
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

    useEffect(() => {
        getOneItem();
    });

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
                  <Button variant="contained"
                          disabled={(oneItem.user_id === userID) ? true : false }
                      // onClick={/*do somthing*/}
                   >הצע החלפה</Button>
                  <br/><br/>
                  <Typography variant="body2" color="text.secondary">
                      <b> סוג הפריט:</b> {(oneItem.item_type === "book") ? "ספר" : "משחק וידאו"}<br/><br/>
                      <b>מצב המוצר: </b>
                      {(oneItem.item_condition === "as new") ? "כמו חדש" :
                          (oneItem.item_condition === "used") ? "משומש" : "לא טוב"}<br/><br/>
                      <b>מחבר: </b> { oneItem.author }<br/><br/>
                      <b>ז'אנר: </b> {(oneItem.genre > 0) ? oneItem.genre.join(', ') : ""}<br/><br/>
                      <b>פרטים נוספים: </b> {(oneItem.description)}<br/><br/>
                  </Typography>
              </div>
          </ThemeProvider>

    )
}