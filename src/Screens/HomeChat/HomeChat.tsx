import {JSX, useEffect, useState} from "react";
import {HomeChatStyled} from "./HomeChatStyled";
import Search from "../../Components/Search/Search";
import MyUser from "../../Components/MyUser/MyUser";
import UsersList from "../../Components/UsersList/UsersList";
import ContactUser from "../../Components/ContactUser/ContactUser";
import SendMessage from "../../Components/SendMessage/SendMessage";
import Chat from "../../Components/Chat/Chat";
import {auth, db} from "../../Firebase/Firebase";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../Utils/HookRedux";
import {getUserActive, getUserList} from "../../Store/Actions/UserActions";
import {doc, getDoc} from "firebase/firestore";
import {UserActiveProviderModel} from "../../Models/UserActiveModel";

export default function HomeChat():JSX.Element {

    const [isSearchVisible, setIsSearchVisible] = useState<boolean>(true);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const isLoadingUserActive = useAppSelector((state) => state.userState.isLoadingUserActive);
    const userActive = useAppSelector((state) => state.userState.userActive);
    const userSelected = useAppSelector((state) => state.userState.userSelected);
    const [userGoogle, setUserGoogle] = useState<UserActiveProviderModel | null>(null)

    function showSearchVisible() {
        setIsSearchVisible(!isSearchVisible);
    }
    async function registerUser() {
        auth.onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                setUserGoogle({
                    'uid': user.uid,
                    'displayName': user.displayName !== null ? user.displayName : '',
                    'email': user.email != null ? user.email : '',
                    'photoURL': user.photoURL !== null ? user.photoURL : ''
                });
                handleUserActive(user.uid);
                handleUsers(user.uid);
                const docUserRef = doc(db, 'users', user.uid);
                getDoc(docUserRef).then((res) => {
                    if (res.exists()) {
                        navigate('/home-chat');
                    } else {
                        navigate('/register');
                    }
                });
            } else {
                navigate('/login');
            }
        })
    }
    function handleUserActive(uid:string) {
        dispatch(getUserActive(uid)).then(r => {});
    }
    function handleUsers(uid:string) {
        dispatch(getUserList(uid)).then(r => {});
    }

    useEffect(() => {
        registerUser().then(r => {});
    }, []);

    return (
        <HomeChatStyled>
            <div className="container-users">
                {userActive &&
                    <MyUser
                        colorBorder="#838080"
                        width={3}
                        height={3}
                        alt={userActive.displayName}
                        src={userActive.photoURL}
                        userName={userActive.displayName}
                    />
                }
                <Search/>
                <UsersList/>
            </div>
            {userSelected &&
                <div className="container-chat">
                    <ContactUser showSearchVisible={showSearchVisible}/>
                    <Chat isSearchVisible={isSearchVisible}/>
                    <SendMessage/>
                </div>
            }
            {!userSelected &&
                <div className="container-chat-aux">
                    <h1 className="title-chat">Fre-Chat</h1>
                </div>
            }
        </HomeChatStyled>
    );
}