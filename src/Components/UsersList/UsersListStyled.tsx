import styled from "styled-components";

export const UsersListStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: .1vw;
  width: 94%;
  height: 32rem;
  padding: .3vw .3vw 0 .3vw;
  border-radius: 5px 5px 0 0;
  border-top: 1px solid #838080;
  border-right: 1px solid #838080;
  border-left: 1px solid #838080;
  
  
  .container-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: .1vw;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    
    .container-my-user {
      display: flex;
      width: 100%;
      cursor: pointer;
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
  //::-webkit-scrollbar-track {
  //  background-color: #3b24ff; /* Color del fondo de la barra de desplazamiento */
  //}
`