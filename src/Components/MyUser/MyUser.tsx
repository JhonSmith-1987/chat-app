import {JSX} from "react";
import {MyUserStyled} from "./MyUserStyled";
import AvatarUser from "../AvatarUser/AvatarUser";

interface IMyUserProps {
    colorBorder: string;
    width: number;
    height: number;
    alt:string;
    src:string;
    userName:string
}

export default function MyUser({colorBorder, width, height, alt, src, userName}:IMyUserProps):JSX.Element {

    return (
        <MyUserStyled>
            <AvatarUser
                colorBorder={colorBorder}
                width={width}
                height={height}
                alt={alt}
                src={src}
            />
            <div className="info-user-name">
                {userName}
            </div>
        </MyUserStyled>
    );
}