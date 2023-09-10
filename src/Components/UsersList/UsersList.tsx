import {JSX, useEffect} from "react";
import {UsersListStyled} from "./UsersListStyled";
import MyUser from "../MyUser/MyUser";
import {useAppDispatch, useAppSelector} from "../../Utils/HookRedux";
import {getChatUserSelected, getUserList} from "../../Store/Actions/UserActions";
import {getMessages} from "../../Store/Actions/MessageActions";

export default function UsersList():JSX.Element {

    const dispatch = useAppDispatch();
    const userActive = useAppSelector((state) => state.userState.userActive);
    const users = useAppSelector((state) => state.userState.users);

    useEffect(() => {
        console.log(userActive);
        console.log(users);
    }, [userActive, users]);

    function handleUserSelected(id: string) {
        dispatch(getChatUserSelected(id)).then(r => {
            if (userActive) {
                dispatch(getMessages(userActive.id, id));
            }
        });
    }

    return (
        <UsersListStyled>
            <div className="container-content">
                {users && users.map((user) => (
                    <div onClick={() => handleUserSelected(user.id)} className="container-my-user" key={user.id}>
                        <MyUser
                            colorBorder="#838080"
                            width={3}
                            height={3}
                            alt={user.displayName}
                            src={user.photoURL}
                            userName={user.displayName}
                        />
                    </div>
                ))}
            </div>
        </UsersListStyled>
    );
}