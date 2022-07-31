import "./messenger.css";
import { useContext, useEffect, useRef, useState } from "react";
import Conversation from '../conversations/Conversation';
import Message from '../message/Message';
import ChatOnline from '../chatOnline/ChatOnline';
import {UserContext} from '../../../context/userContext'
import { io } from "socket.io-client";

export default function Messenger() {
    const [conversations, setConversations] = useState([])
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const socket = useRef();
    const {user} = useContext(UserContext)
    const scrollRef = useRef();
    /**
     * Socket IO for chat
     */
    useEffect(() => {
        socket.current = io("ws://localhost:8900");
        socket.current.on("getMessage", (data) => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),
            });
        });
    }, []);


    /**
     * Get converstions
     */
    const getConversations = async () => {
        try {
            await fetch('http://localhost:3001/conversations/' + user.id, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then((res) => res.json())
                .then((json) => {
                    setConversations(json)
                })
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getConversations()
    }, [user.id])

    /**
     * Use effect for get current chat from mongodb
     */
    useEffect(() => {
        const getMessages = async () => {
            try {
                await fetch('http://localhost:3001/messages/' + currentChat?._id, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then((res) => res.json())
                    .then((json) => {
                        setMessages(json);
                    })
            } catch (err) {
                console.log(err);
            }
        };
        getMessages();
    }, [currentChat]);

    /**
     * Handel submit for send msg
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            sender: user.id,
            text: newMessage,
            conversationId: currentChat._id,
        };

        // const receiverId = currentChat.members.find(
        //     (member) => member !== user.id
        // );

        // socket.current.emit("sendMessage", {
        //     senderId: user._id,
        //     receiverId,
        //     text: newMessage,
        // });

        try {
            await fetch('http://localhost:3001/messages' , {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(message)
            })
                .then((res) => res.json())
                .then((json) => {
                    setMessages([...messages,json]);
                    setNewMessage("");
                })
        } catch (err) {
            console.log(err);
        }
    };

    /**
     * use Effect for scroll down view auto of chat
     *
     */
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);


    return (
        <div className="messenger">

            {/*------------------------------------------------------------------------------------------------------------*/}

            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input placeholder="Search for friends" className="chatMenuInput"/>
                    {conversations.map((c) => (
                        <div onClick={() => setCurrentChat(c)}>
                            <Conversation conversation={c} currentUser={user}/>
                        </div>
                    ))}
                </div>
            </div>

            {/*------------------------------------------------------------------------------------------------------------*/}


            <div className="chatBox">
                <div className="chatBoxWrapper">
                    {
                        currentChat ? (
                            <>
                                <div className="chatBoxTop">
                                    {messages.map((m) => (
                                        <div ref={scrollRef}>
                                            <Message message={m} own={m.sender === user.id}/>
                                        </div>
                                    ))}

                                </div>
                                <div className="chatBoxBottom">


                                    <textarea className="chatMessageInput"
                                              placeholder="write something..."
                                              onChange={(e) => setNewMessage(e.target.value)}
                                              value={newMessage}
                                    >
                        </textarea>
                                    <button className="chatSubmitButton" onClick={handleSubmit}>
                                        Send
                                    </button>
                                </div>
                            </>
                        ) : (
                            <span className="noConversationText">
                             פתח שיחה על מנת להתחיל צ׳אט .
                            </span>
                        )
                    }
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