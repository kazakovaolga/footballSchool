//scss
import "./index.scss";
//react
import React, { FC } from "react";

interface EmblemProps {
    src: string,
    className:string
}

export const Emblem: FC<EmblemProps> = function ({ src,className }) {
    return (
        <img className={className}
            src={src}        
        />
    );
};