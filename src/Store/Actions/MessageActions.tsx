import {collection, addDoc, query, orderBy, where, getDocs, onSnapshot} from "firebase/firestore";
import {db} from "../../Firebase/Firebase";
import {SweetAlertError} from "../../Utils/SweetAlert/SweetAlertError";
import {
    GET_MESSAGES, GET_MESSAGES_FAILED,
    GET_MESSAGES_SUCCESS,
    POST_MESSAGES,
    POST_MESSAGES_FAILED,
    POST_MESSAGES_SUCCESS
} from "../Types/MessageTypes";
import {FormMessages} from "../../Models/FormMessages";
import {MessagesModel} from "../../Models/MessagesModel";

export const postMessages = (dataMessage: FormMessages) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    console.log(dataMessage);
    dispatch({
        type: POST_MESSAGES,
        payload: true
    });
    const postMessageRef = collection(db, 'messages');
    await addDoc(postMessageRef, dataMessage).then((res) => {
        console.log(res);
        dispatch({
            type: POST_MESSAGES_SUCCESS,
            payload: false
        });
    }).catch((err) => {
        console.log(err);
        dispatch({
            type: POST_MESSAGES_FAILED,
            payload: false
        });
        SweetAlertError('Hubo un error');
    });
}
export const getMessages = (idUserActive:string, idUserSelected:string) => (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    console.log(idUserActive);
    console.log(idUserSelected);
    dispatch({
        type: GET_MESSAGES,
        payload: true
    });
    const messagesRef = collection(db, 'messages');
    try {
        const unsubscribe  = onSnapshot(messagesRef, (querySnapshot) => {
            const messages: MessagesModel[] = [];
            querySnapshot.forEach((doc) => {
                const dataMessage: MessagesModel = {
                    'id': doc.id,
                    'userId': doc.data().userId,
                    'photoURL': doc.data().photoURL,
                    'date': doc.data().date,
                    'message': doc.data().message,
                }
                messages.push(dataMessage);
            });
            console.log(messages);
            const messagesOk: MessagesModel[] = messages.filter((mess) => {
                return mess.userId === idUserActive || mess.userId === idUserSelected
            })
            const orderMessages: MessagesModel[] = messagesOk.sort((a, b) => {
                const dateA = new Date(a.date).getTime();
                const dateB = new Date(b.date).getTime();
                return dateB - dateA;
            });
            console.log(orderMessages);
            console.log(messagesOk);
            dispatch({
                type: GET_MESSAGES_SUCCESS,
                payload: orderMessages
            });
        });
    } catch (e) {
        console.log(e);
        SweetAlertError('Hubo un error');
        dispatch({
            type: GET_MESSAGES_FAILED,
            payload: false
        });
    }

}