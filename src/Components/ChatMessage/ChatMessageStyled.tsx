import styled from "styled-components";

export const ChatMessageStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 97.2%;
  padding: .5vw;
  
  .container-chat-message {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    width: 100%;
    height: 100%;
    gap: .1vw;
    overflow-y: scroll;
    
    .container-message {
      display: flex;
      align-items: start;
      justify-content: start;
      width: 100%;
    }
  }

  ::-webkit-scrollbar {
    width: 5px;
    background-color: #838080;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #9b9fa0; /* Color del thumb */
    border-radius: 5px; /* Borde redondeado del thumb */
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #3b24ff; /* Cambia el color del thumb al pasar el ratón sobre él */
  }
`