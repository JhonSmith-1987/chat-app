import {JSX} from "react";
import {ChatStyled} from "./ChatStyled";
import ChatMessage from "../ChatMessage/ChatMessage";
import SendMessage from "../SendMessage/SendMessage";
import SearchChat from "../SearchChat/SearchChat";

interface IChatProps {
    isSearchVisible:boolean;
}
export default function Chat({isSearchVisible}:IChatProps):JSX.Element {

    return (
        <ChatStyled>
            <ChatMessage/>
            <SearchChat isSearchVisible={isSearchVisible}/>
        </ChatStyled>
    );
}