import React, {JSX, useState} from "react";
import {SendMessageStyled} from "./SendMessageStyled";
import {BiSend } from 'react-icons/bi';
import {FaRegGrinTongueSquint } from 'react-icons/fa';
import {useAppDispatch, useAppSelector} from "../../Utils/HookRedux";
import {postMessages} from "../../Store/Actions/MessageActions";
import {FormMessages} from "../../Models/FormMessages";
import {dateNow} from "../../Utils/Functions/DateNow";

export default function SendMessage():JSX.Element {

    const dispatch = useAppDispatch();
    const userActive = useAppSelector((state) => state.userState.userActive);
    const [message, setMessage] = useState<string>('');

    function handleInputChange(value: string) {
        setMessage(value);
    }
    function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    }
    function sendMessage() {
        if (userActive && message.trim() !== '') {
            const messagePost:FormMessages = {
                'userId': userActive.id,
                'photoURL': userActive.photoURL,
                'date': dateNow(),
                'message': message
            }
            console.log(messagePost);
            dispatch(postMessages(messagePost)).then(r => {
                setMessage('');
            });
        }
    }

    return (
        <SendMessageStyled>
            <FaRegGrinTongueSquint className="icon-fa-reg-grin-tonque-squint"/>
            <div className="container-input">
                <input
                    className="input-send-message"
                    placeholder="Escribe tu mensaje"
                    value={message}
                    onChange={(event) => handleInputChange(event.target.value)}
                    onKeyPress={(event) => handleKeyPress(event)}
                />
                <BiSend className="icon-bi-send" onClick={sendMessage}/>
            </div>
        </SendMessageStyled>
    );
}