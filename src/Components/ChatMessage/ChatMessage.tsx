import {JSX} from "react";
import {ChatMessageStyled} from "./ChatMessageStyled";
import Message from "../Message/Message";
import {useAppSelector} from "../../Utils/HookRedux";

export default function ChatMessage():JSX.Element {

    const messages = useAppSelector((state) => state.messageState.messages);
    const isLoadingMessages = useAppSelector((state) => state.messageState.isLoadingMessages);

    return (
        <ChatMessageStyled>
            <div className="container-chat-message">
                {messages && messages.map((message) => (
                    <div key={message.id} className="container-message">
                        <Message
                            alt={message.id}
                            src={message.photoURL}
                            message={message.message}
                            date={message.date}
                        />
                    </div>
                ))}
            </div>
        </ChatMessageStyled>
    );
}