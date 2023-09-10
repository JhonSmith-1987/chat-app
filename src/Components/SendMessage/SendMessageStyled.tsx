import styled from "styled-components";

export const SendMessageStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #9b9fa0;
  border-radius: 5px;
  padding: 1vw;
  width: 96%;
  margin: .5vw 0;
  
  .icon-fa-reg-grin-tonque-squint {
    font-size: 2vw;
    color: #838080;
    cursor: pointer;
  }
  .container-input {
    display: flex;
    align-items: center;
    justify-content: center;
    background: whitesmoke;
    width: 90%;
    border-radius: 5px;
    
    .input-send-message {
      width: 90%;
      outline: none;
      border: none;
      font-size: 1vw;
      background: transparent;
    }
    .input-send-message::placeholder {
      font-size: 1.2vw;
    }
    .icon-bi-send {
      font-size: 2vw;
      cursor: pointer;
    }
  }
`