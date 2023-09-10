import styled from "styled-components";

export const ContactUserStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 98%;
  padding: .3vw;
  margin: .6vw 0;
  border-radius: 5px;
  background: #9b9fa0;
  
  .user-data {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 2vw;

    .user-contact {
      font-size: 1.3vw;
      font-weight: bold;
      color: whitesmoke;
    }
  }
  .icon-io-ios-search {
    font-size: 2vw;
    color: whitesmoke;
    margin-right: 4vw;
    cursor: pointer;
  }
`