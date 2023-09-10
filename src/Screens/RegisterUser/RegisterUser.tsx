import {JSX, useEffect, useState} from "react";
import {RegisterUserStyled} from "./RegisterUserStyled";
import {useForm} from "react-hook-form";
import {FormRegisterModel} from "../../Models/FormRegisterModel";
import {auth, db} from "../../Firebase/Firebase";
import {useNavigate} from "react-router-dom";
import {doc, getDoc} from "firebase/firestore";
import {UserActiveProviderModel, UserPostDatabase} from "../../Models/UserActiveModel";
import {useAppDispatch} from "../../Utils/HookRedux";
import {getUserActive, postUserDatabase} from "../../Store/Actions/UserActions";

export default function RegisterUser(): JSX.Element {

    const {register, handleSubmit, reset, formState: {errors}} = useForm<FormRegisterModel>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [userGoogle, setUserGoogle] = useState<UserActiveProviderModel | null>(null)

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
    function handleRegister(data: FormRegisterModel) {
        console.log(data);
        if (userGoogle) {
            const userPost:UserPostDatabase = {
                'displayName': data.displayName,
                'email': data.email,
                'phone': data.phone,
                'photoURL': userGoogle.photoURL,
                'sex': data.sex
            }
            dispatch(postUserDatabase(userPost, userGoogle.uid)).then(r => {
                navigate('/home-chat');
            });
        }
    }
    const onSubmitFormRegister = (data: FormRegisterModel) => handleRegister(data);

    useEffect(() => {
        registerUser().then(r => {});
    }, []);

    return (
        <RegisterUserStyled>
            <h1>Regístra tu usario</h1>
            <form className="form-register" onSubmit={handleSubmit(onSubmitFormRegister)}>
                <div className="container-input">
                    <label>Nombre</label>
                    <input
                        type="text"
                        defaultValue={userGoogle?.displayName}
                        {...register('displayName', {
                            required: 'Es requerido'
                        })}
                    />
                </div>
                <div className="container-input">
                    <label>email</label>
                    <input
                        type="text"
                        defaultValue={userGoogle?.email}
                        {...register('email', {
                            required: 'Es requerido'
                        })}
                    />
                </div>
                <div className="container-sex">
                    <span>Sexo</span>
                    <div className="container-input-radio">
                        <label>Hombre</label>
                        <input
                            type="radio"
                            value="h"
                            {...register('sex', {
                                required: 'Es requerido'
                            })}
                        />
                    </div>
                    <div className="container-input-radio">
                        <label>Mujer</label>
                        <input
                            type="radio"
                            value="m"
                            {...register('sex', {
                                required: 'Es requerido'
                            })}
                        />
                    </div>
                </div>
                <div className="container-input">
                    <label>Teléfono</label>
                    <input
                        type="text"
                        {...register('phone', {
                            required: 'Es requerido'
                        })}
                    />
                </div>
                <button
                    className="button-form-register"
                    type="submit"
                >Registrar
                </button>
            </form>
        </RegisterUserStyled>
    );
}