import {combineReducers} from "@reduxjs/toolkit";
import UserReducers from "./UserReducers";
import MessageReducer from "./MessageReducers";


const RootReducer = combineReducers({
    userState: UserReducers,
    messageState: MessageReducer,
});
export default RootReducer;