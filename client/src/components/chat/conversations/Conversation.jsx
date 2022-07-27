import {useEffect, useState} from "react";
import "./conversation.css";

export default function Conversation() {

    return (
        <div className="conversation">
            <img className="conversationImg"
                 src="https://res.cloudinary.com/dt9z5k8rs/image/upload/v1658043749/t1jyv0ewhbviwcirxzwa.jpg"
                 alt=""
            />
            <span className="conversationName">Daniel sela</span>
        </div>
    );
}