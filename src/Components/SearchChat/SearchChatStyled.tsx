import styled from "styled-components";

interface ISearchChatStyledProps {
    isSearchVisible:boolean;
}
export const SearchChatStyled = styled.div<ISearchChatStyledProps>`
  opacity: ${({isSearchVisible}) => (!isSearchVisible ? 1 : 0)};
  visibility: ${({isSearchVisible}) => (!isSearchVisible ? 'visible' : 'hidden')};
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: ${({isSearchVisible}) => (!isSearchVisible ? 50 : 0) + '%'};
  height: 100%;
  background: red;
  transition: opacity .5s ease, visibility .5s ease, width .5s ease;
`