import {JSX} from "react";
import {SearchStyled} from "./SearchStyled";
import {FcSearch} from 'react-icons/fc';

export default function Search():JSX.Element {

    return (
        <SearchStyled>
            <div className="container-input">
                <FcSearch className="icon-fc-search"/>
                <input
                    className="input-search-users"
                    type="text"
                    placeholder="Buscar contacto"
                />
            </div>
        </SearchStyled>
    );
}