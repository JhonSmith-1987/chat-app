import {JSX} from "react";
import {ContactUserStyled} from "./ContactUserStyled";
import AvatarUser from "../AvatarUser/AvatarUser";
import {IoIosSearch } from 'react-icons/io';
import {auth} from "../../Firebase/Firebase";
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../Utils/HookRedux";

interface IContactUserProps {
    showSearchVisible: () => void;
}
export default function ContactUser({showSearchVisible}:IContactUserProps):JSX.Element {

    const navigate = useNavigate();
    const userSelected = useAppSelector((state) => state.userState.userSelected);

    async function handleSignOut() {
        await auth.signOut().then(r => {
            navigate('/login');
        })
    }

    return (
        <ContactUserStyled>
            <div className="user-data">
                <AvatarUser
                    colorBorder={'#838080'}
                    width={3}
                    height={3}
                    alt={'userContact'}
                    src={userSelected?.photoURL !== undefined ? userSelected.photoURL : ''}
                />
                <div className="user-contact">{userSelected?.displayName}</div>
            </div>
            <button onClick={handleSignOut}>Cerrar sesión</button>
            <IoIosSearch className="icon-io-ios-search" onClick={showSearchVisible}/>
        </ContactUserStyled>
    );
}