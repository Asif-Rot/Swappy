import "./message.css";
import {format} from "timeago.js";

export default function Message({message, own}) {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img
                    className="messageImg"
                    src="https://res.cloudinary.com/dt9z5k8rs/image/upload/v1658043749/t1jyv0ewhbviwcirxzwa.jpg"
                    alt=""
                />
                <p className="messageText">
                    Hello this is a message
                </p>
            </div>
            <div className="messageBottom">
                1 hour ago
            </div>
        </div>
    );
}