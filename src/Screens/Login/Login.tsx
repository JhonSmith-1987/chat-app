import {JSX, useEffect} from "react";
import {LoginStyled} from "./LoginStyled";
import {FcGoogle} from 'react-icons/fc';
import {PiSignInBold} from 'react-icons/pi';
import {auth, db, googleProvider} from "../../Firebase/Firebase";
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import {useNavigate} from "react-router-dom";
import {getUserActive} from "../../Store/Actions/UserActions";
import {useAppDispatch} from "../../Utils/HookRedux";

export default function Login(): JSX.Element {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    async function registerUser() {
        auth.onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
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
    async function handleLogin() {
        const googleProvider = new GoogleAuthProvider();
        await signInWithPopup(auth, googleProvider).then((res) => {

        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
       registerUser().then(r => {});
    }, []);

    return (
        <LoginStyled>
            <h1 className="title-login">Fre-Chat</h1>
            <div className="container-login">
                <div className="container-icon-google">
                    <FcGoogle className="icon-fcGoogle"/>
                </div>
                <div className="container-text">
                    <span className="text">Inicia sesión con tu cuenta de Google</span>
                    <div onClick={handleLogin} className="click-here">
                        <span className="click-here-text">Has click aquí</span>
                        <PiSignInBold className="click-here-icon-pi-Sign-In-Bold"/>
                    </div>
                </div>
            </div>
        </LoginStyled>
    );
}