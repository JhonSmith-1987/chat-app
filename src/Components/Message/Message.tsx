import {JSX} from "react";
import {MessageStyled} from "./MessageStyled";
import AvatarUser from "../AvatarUser/AvatarUser";
import { TiDelete } from 'react-icons/ti';

interface IMessageProps {
    alt:string;
    src:string;
    message:string;
    date:string
}

export default function Message({
    alt,
    src,
    message,
    date,
                                }:IMessageProps): JSX.Element {

    return (
        <MessageStyled>
            <div className="container-message">
                <div className="container-avatar">
                    <AvatarUser
                        colorBorder='#838080'
                        width={3}
                        height={3}
                        alt={alt}
                        src={src}
                    />
                </div>
                <span className="text-message">
                    {message}
                </span>
            </div>
            <div className="container-date-delete">
                <TiDelete className="icon-ti-delete"/>
                <span className="text-date">{date}</span>
            </div>
        </MessageStyled>
    );
}