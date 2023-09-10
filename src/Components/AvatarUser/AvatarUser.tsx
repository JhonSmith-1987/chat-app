import {JSX} from "react";
import {AvatarUserStyled} from "./AvatarUserStyled";

interface IAvatarUserProps {
    colorBorder: string;
    width: number;
    height: number;
    alt:string;
    src:string;
}

export default function AvatarUser({colorBorder, width, height, alt, src}: IAvatarUserProps): JSX.Element {

    return (
        <AvatarUserStyled colorBorder={colorBorder} width={width} height={height}>
            <img className="img-user" alt={alt} src={src}/>
        </AvatarUserStyled>
    );
}