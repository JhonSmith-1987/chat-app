import {JSX} from "react";
import {SearchChatStyled} from "./SearchChatStyled";
import Search from "../Search/Search";

interface ISearchChatProps {
    isSearchVisible:boolean;
}
export default function SearchChat({isSearchVisible}:ISearchChatProps):JSX.Element {

    return (
        <SearchChatStyled isSearchVisible={isSearchVisible}>
            <Search/>
        </SearchChatStyled>
    );
}