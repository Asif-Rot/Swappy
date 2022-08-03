import {useEffect, useState} from "react";
import "./conversation.css";

export default function Conversation({conversation, currentUser}) {

    const [user, setUser] = useState(null)
    useEffect(() => {
        const friendId = conversation.members.find((m) => m !== currentUser.id);
        const getUser = async () => {
            try {
                await fetch('http://localhost:3001/user/' + friendId, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then((res) => res.json())
                    .then((json) => {
                        setUser(json)
                    })
            } catch (err) {
                console.log(err)
            }
        };
        getUser();
    }, [currentUser, conversation])
    const setImgProfile = () => {
        if(user?.sendUser["imageProfile"] === null){
            return user.sendUser["imageProfile"];
        }
        else{
            return "https://res.cloudinary.com/dt9z5k8rs/image/upload/v1658258491/AVATAR_lhyz0n.webp"
        }
    }
    return (
        <div className="conversation">
            <img className="conversationImg"
                 src={
                   setImgProfile()
                 }
                 alt=""
            />
            <span className="conversationName">{user?.sendUser["firstName"]
                + " " + user?.sendUser["lastName"]}
            </span>
        </div>
    );
}