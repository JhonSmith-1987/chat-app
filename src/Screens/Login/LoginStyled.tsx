import styled from "styled-components";

export const LoginStyled = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2vw;
  height: 100vh;
  background-image: url("/Image/img-fond-login.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  .title-login {
    font-size: 4vw;
    color: #3b24ff75;
  }
  .container-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 25%;
    padding: 2vw;
    background: #9b9fa095;
    border-radius: 15px;

    .container-icon-google {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;

      .icon-fcGoogle {
        font-size: 8vw;
      }
    }
    .container-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      
      .text {
        font-size: 1.2vw;
        font-weight: bold;
        color: #3b24ff;
      }
      .click-here {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .5vw;
        cursor: pointer;
        
        .click-here-text {
          font-size: 1.5vw;
          font-weight: bold;
          color: #2da03d;
        }
        .click-here-icon-pi-Sign-In-Bold {
          font-size: 1.5vw;
          color: #2da03d;
        }
      }
    }
  }
`