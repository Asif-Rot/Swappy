import "./messenger.css";
import {useContext, useEffect, useRef, useState} from "react";
import Conversation from '../conversations/Conversation';
import Message from '../message/Message';
import ChatOnline from '../chatOnline/ChatOnline';
import {UserContext} from '../../../context/userContext'

export default function Messenger() {
    const  [conversations , setConversations] = useState([])
    const {user} = useContext(UserContext)

    const getConversations = async  () =>{
        try{

            await fetch('http://localhost:3001/conversations/' + user.id,{
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then((res) => res.json())
                .then((json) => {
                    //console.log(json)
                    setConversations(json)
                })
        }
        catch (err){
            console.log(err)
        }
    }
    useEffect(()=>{
       getConversations()
    },[user.id])
    return (
        <div className="messenger">

{/*------------------------------------------------------------------------------------------------------------*/}

            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input placeholder="Search for friends" className="chatMenuInput" />
                    {conversations.map((c)=>(
                        <Conversation conversation={c} currentUser={user}/>
                    ))}
                </div>
            </div>

{/*------------------------------------------------------------------------------------------------------------*/}


            <div className="chatBox">
                <div className="chatBoxWrapper">
                    <div className="chatBoxTop">
                        <Message own={true}/>
                        <Message/>
                        <Message own={true} />

                    </div>
                    <div className="chatBoxBottom">
                        <textarea className="chatMessageInput"
                                   placeholder="write something...">
                        </textarea>
                        <button className="chatSubmitButton" >
                            Send
                        </button>
                    </div>
                </div>
            </div>



{/*------------------------------------------------------------------------------------------------------------*/}


            <div className="chatOnline">
                <div className="chatOnlineWrapper">
                     <ChatOnline/>
                    <ChatOnline/>
                </div>
            </div>
        </div>
    );
}