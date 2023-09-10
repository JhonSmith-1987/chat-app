import {
    GET_CHAT_USER_SELECTED, GET_CHAT_USER_SELECTED_FAILED, GET_CHAT_USER_SELECTED_SUCCESS,
    GET_USERS, GET_USERS_FAILED, GET_USERS_SUCCESS,
    POST_USER,
    POST_USER_FAILED,
    POST_USER_SUCCESS,
    USER_ACTIVE,
    USER_ACTIVE_FAILED,
    USER_ACTIVE_SUCCESS
} from "../Types/UserTypes";
import {UserActiveModel} from "../../Models/UserActiveModel";

interface IStateUser {
    isLoadingCreateUser:boolean;
    isLoadingUserActive:boolean;
    isLoadingUserList:boolean;
    isLoadingUserSelected:boolean;
    userSelected: UserActiveModel | null;
    users: UserActiveModel[];
    userActive: UserActiveModel | null;
}
const initialStateUser: IStateUser = {
    isLoadingCreateUser: false,
    isLoadingUserActive: false,
    isLoadingUserList: false,
    isLoadingUserSelected: false,
    userSelected: null,
    users: [],
    userActive: null,
}

const UserReducer = function (state = initialStateUser, action: {type:any; payload:any}):IStateUser {
    switch (action.type) {
        case POST_USER:
            return {
                isLoadingCreateUser: action.payload,
                isLoadingUserActive: state.isLoadingUserActive,
                isLoadingUserList: state.isLoadingUserList,
                isLoadingUserSelected: state.isLoadingUserSelected,
                userSelected: state.userSelected,
                users: state.users,
                userActive: state.userActive,
            }
        case POST_USER_SUCCESS:
            return {
                isLoadingCreateUser: action.payload,
                isLoadingUserActive: state.isLoadingUserActive,
                isLoadingUserList: state.isLoadingUserList,
                isLoadingUserSelected: state.isLoadingUserSelected,
                userSelected: state.userSelected,
                users: state.users,
                userActive: state.userActive,
            }
        case POST_USER_FAILED:
            return {
                isLoadingCreateUser: action.payload,
                isLoadingUserActive: state.isLoadingUserActive,
                isLoadingUserList: state.isLoadingUserList,
                isLoadingUserSelected: state.isLoadingUserSelected,
                userSelected: state.userSelected,
                users: state.users,
                userActive: state.userActive,
            }
        case USER_ACTIVE:
            return {
                isLoadingCreateUser: state.isLoadingCreateUser,
                isLoadingUserActive: action.payload,
                isLoadingUserList: state.isLoadingUserList,
                isLoadingUserSelected: state.isLoadingUserSelected,
                userSelected: state.userSelected,
                users: state.users,
                userActive: state.userActive,
            }
        case USER_ACTIVE_SUCCESS:
            return {
                isLoadingCreateUser: state.isLoadingCreateUser,
                isLoadingUserActive: false,
                isLoadingUserList: state.isLoadingUserList,
                isLoadingUserSelected: state.isLoadingUserSelected,
                userSelected: state.userSelected,
                users: state.users,
                userActive: action.payload,
            }
        case USER_ACTIVE_FAILED:
            return {
                isLoadingCreateUser: state.isLoadingCreateUser,
                isLoadingUserActive: action.payload,
                isLoadingUserList: state.isLoadingUserList,
                isLoadingUserSelected: state.isLoadingUserSelected,
                userSelected: state.userSelected,
                users: state.users,
                userActive: state.userActive,
            }
        case GET_USERS:
            return {
                isLoadingCreateUser: state.isLoadingCreateUser,
                isLoadingUserActive: state.isLoadingUserActive,
                isLoadingUserList: action.payload,
                isLoadingUserSelected: state.isLoadingUserSelected,
                userSelected: state.userSelected,
                users: state.users,
                userActive: state.userActive,
            }
        case GET_USERS_SUCCESS:
            return {
                isLoadingCreateUser: state.isLoadingCreateUser,
                isLoadingUserActive: state.isLoadingUserActive,
                isLoadingUserList: false,
                isLoadingUserSelected: state.isLoadingUserSelected,
                userSelected: state.userSelected,
                users: action.payload,
                userActive: state.userActive,
            }
        case GET_USERS_FAILED:
            return {
                isLoadingCreateUser: state.isLoadingCreateUser,
                isLoadingUserActive: state.isLoadingUserActive,
                isLoadingUserList: action.payload,
                isLoadingUserSelected: state.isLoadingUserSelected,
                userSelected: state.userSelected,
                users: state.users,
                userActive: state.userActive,
            }
        case GET_CHAT_USER_SELECTED:
            return {
                isLoadingCreateUser: state.isLoadingCreateUser,
                isLoadingUserActive: state.isLoadingUserActive,
                isLoadingUserList: state.isLoadingUserList,
                isLoadingUserSelected: action.payload,
                userSelected: state.userSelected,
                users: state.users,
                userActive: state.userActive,
            }
        case GET_CHAT_USER_SELECTED_SUCCESS:
            return {
                isLoadingCreateUser: state.isLoadingCreateUser,
                isLoadingUserActive: state.isLoadingUserActive,
                isLoadingUserList: state.isLoadingUserList,
                isLoadingUserSelected: false,
                userSelected: action.payload,
                users: state.users,
                userActive: state.userActive,
            }
        case GET_CHAT_USER_SELECTED_FAILED:
            return {
                isLoadingCreateUser: state.isLoadingCreateUser,
                isLoadingUserActive: state.isLoadingUserActive,
                isLoadingUserList: state.isLoadingUserList,
                isLoadingUserSelected: action.payload,
                userSelected: state.userSelected,
                users: state.users,
                userActive: state.userActive,
            }
        default:
            return state;
    }
}
export default UserReducer;