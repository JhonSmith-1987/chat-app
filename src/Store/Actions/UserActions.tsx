import {UserActiveModel, UserPostDatabase} from "../../Models/UserActiveModel";
import {
    GET_CHAT_USER_SELECTED, GET_CHAT_USER_SELECTED_SUCCESS,
    GET_USERS, GET_USERS_FAILED, GET_USERS_SUCCESS,
    POST_USER,
    POST_USER_FAILED,
    POST_USER_SUCCESS,
    USER_ACTIVE,
    USER_ACTIVE_FAILED,
    USER_ACTIVE_SUCCESS
} from "../Types/UserTypes";
import {doc, collection, setDoc, getDoc, getDocs} from "firebase/firestore";
import {db} from "../../Firebase/Firebase";
import {SweetAlertSuccess} from "../../Utils/SweetAlert/SweetAlertSuccess";
import {SweetAlertError} from "../../Utils/SweetAlert/SweetAlertError";

export const postUserDatabase = (user:UserPostDatabase, id:string) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    dispatch({
        type: POST_USER,
        payload: true
    });
    const userPostRef = doc(db, 'users', id);
    await setDoc(userPostRef, user).then((r) => {
        console.log(r);
        dispatch({
            type: POST_USER_SUCCESS,
            payload: false
        });
        SweetAlertSuccess('Usuario creado con exito');
    }).catch((err) => {
        console.log(err);
        dispatch({
            type: POST_USER_FAILED,
            payload: false
        });
        SweetAlertError('Hubo un error al crear el usuario');
    });
}
export const getUserActive = (id:string) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    dispatch({
        type: USER_ACTIVE,
        payload: true
    });
    const userActiveRef = doc(db, 'users', id);
    await getDoc(userActiveRef).then((res) => {
        if (res.exists()) {
            const userActive: UserActiveModel = {
                'id': res.id,
                'displayName': res.data().displayName,
                'email': res.data().email,
                'phone': res.data().phone,
                'photoURL': res.data().photoURL,
                'sex': res.data().sex,
            }
            dispatch({
                type: USER_ACTIVE_SUCCESS,
                payload: userActive
            });
        } else {
            SweetAlertError('Usuario no existe en la base de datos');
        }
    }).catch((err) => {
        console.log(err);
        dispatch({
            type: USER_ACTIVE_FAILED,
            payload: false
        });
        SweetAlertError('Hubo un error');
    });
}
export const getUserList = (userActiveId:string) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    dispatch({
        type: GET_USERS,
        payload: true
    });
    const userListRef = collection(db, 'users');
    await getDocs(userListRef).then((usersSnapshot) => {
        let users:UserActiveModel[] = [];
        usersSnapshot.forEach((data) => {
            let user:UserActiveModel = {
                'id': data.id,
                'displayName': data.data().displayName,
                'email': data.data().email,
                'phone': data.data().phone,
                'photoURL': data.data().photoURL,
                'sex': data.data().sex,
            }
            if (user.id !== userActiveId) {
                users.push(user);
            }
        });
        dispatch({
            type: GET_USERS_SUCCESS,
            payload: users
        });
    }).catch((err) => {
        dispatch({
            type: GET_USERS_FAILED,
            payload: false
        });
        SweetAlertError('Hubo un error en la carga de usuarios');
    });
}
export const getChatUserSelected = (id:string) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    console.log(id);
    dispatch({
        type: GET_CHAT_USER_SELECTED,
        payload: true
    });
    const chatUserSelectedRef = doc(db, 'users', id);
    await getDoc(chatUserSelectedRef).then((res) => {
        if (res.exists()) {
            const userSelected: UserActiveModel = {
                'id': res.id,
                'displayName': res.data().displayName,
                'email': res.data().email,
                'phone': res.data().phone,
                'photoURL': res.data().photoURL,
                'sex': res.data().sex,
            }
            console.log(userSelected);
            dispatch({
                type: GET_CHAT_USER_SELECTED_SUCCESS,
                payload: userSelected
            });
        } else {
            console.log('si señor');
        }
    }).catch((err) => {
        console.log(err);
        dispatch({
            type: USER_ACTIVE_FAILED,
            payload: false
        });
        SweetAlertError('Hubo un error');
    });
}