import {
    GET_MESSAGES, GET_MESSAGES_FAILED,
    GET_MESSAGES_SUCCESS,
    POST_MESSAGES,
    POST_MESSAGES_FAILED,
    POST_MESSAGES_SUCCESS
} from "../Types/MessageTypes";
import {MessagesModel} from "../../Models/MessagesModel";

interface IStateMessage {
    isLoadingCreateMessage: boolean;
    isLoadingMessages: boolean;
    messages: MessagesModel[];
}
const initialStateMessage: IStateMessage = {
    isLoadingCreateMessage: false,
    isLoadingMessages: false,
    messages: [],
}

const MessageReducer = function (state = initialStateMessage, action: {type:any; payload:any}):IStateMessage {
    switch (action.type) {
        case POST_MESSAGES:
            return {
                isLoadingCreateMessage: action.payload,
                isLoadingMessages: state.isLoadingMessages,
                messages: state.messages,
            }
        case POST_MESSAGES_SUCCESS:
            return {
                isLoadingCreateMessage: action.payload,
                isLoadingMessages: state.isLoadingMessages,
                messages: state.messages,
            }
        case POST_MESSAGES_FAILED:
            return {
                isLoadingCreateMessage: action.payload,
                isLoadingMessages: state.isLoadingMessages,
                messages: state.messages,
            }
        case GET_MESSAGES:
            return {
                isLoadingCreateMessage: state.isLoadingCreateMessage,
                isLoadingMessages: action.payload,
                messages: state.messages,
            }
        case GET_MESSAGES_SUCCESS:
            return {
                isLoadingCreateMessage: state.isLoadingCreateMessage,
                isLoadingMessages: false,
                messages: action.payload,
            }
        case GET_MESSAGES_FAILED:
            return {
                isLoadingCreateMessage: state.isLoadingCreateMessage,
                isLoadingMessages: action.payload,
                messages: state.messages,
            }
        default:
            return state;
    }
}
export default MessageReducer;