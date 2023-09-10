import styled from "styled-components";

export const SearchStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 96%;
  margin: .1vw 0 .5vw 0 ;
  
  .container-input {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    background: #9b9fa0;
    padding: .4vw;
    border-radius: 5px;
    
    .icon-fc-search {
      font-size: 1.5vw;
    }
    .input-search-users {
      width: 80%;
      background: transparent;
      outline: none;
      border: none;
      color: whitesmoke;
    }
    .input-search-users::placeholder {
      font-size: 1vw;
      color: whitesmoke;
    }
  }
`