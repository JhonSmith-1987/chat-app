import styled from "styled-components";

export const HomeChatStyled = styled.div`
  display: flex;
  height: 100vh;
  background-image: url("/Image/img-fond-login.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  
  .container-users {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 30%;
    height: 100vh;
    border-right: 2px solid #9b9fa0;
  }
  .container-chat {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    height: 100vh;
  }
  .container-chat-aux {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 100vh;
    
    .title-chat {
      font-size: 4vw;
      color: #3b24ff80;
    }
  }
`