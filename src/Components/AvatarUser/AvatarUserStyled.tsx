import styled from "styled-components";

interface IAvatarUserStyledProps {
    colorBorder:string;
    width:number;
    height:number;
}

export const AvatarUserStyled = styled.div<IAvatarUserStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  border: 3px solid ${({colorBorder}) => colorBorder};
  width: ${({width}) => width + 'vw'};
  height: ${({height}) => height + 'vw'};
  
  .img-user {
    width: 100%;
    border-radius: 100%;
  }
`