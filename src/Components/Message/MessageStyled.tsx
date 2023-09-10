import styled from "styled-components";

export const MessageStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: .5vw;
  border-radius: 5px;
  background: #9b9fa0;
  width: 70%;
  
  .container-message {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
    gap: 1vw;
    color: whitesmoke;
    width: 80%;
    
    .container-avatar {
      display: flex;
      width: 4vw;
      height: 4vw;
    }
    .text-message {
      font-size: 1vw;
      
    }
  }
  .container-date-delete {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 20%;
    padding: .5vw;
    
    .icon-ti-delete {
      font-size: 1.5vw;
      color: #a03a39;
      cursor: pointer;
    }
    .text-date {
      font-size: .7vw;
      color: whitesmoke;
      text-align: center;
    }
  }
`