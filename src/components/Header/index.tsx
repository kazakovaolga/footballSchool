//scss
import "./index.scss";
//react
import React, { FC } from "react";

interface HeaderProps {
    text: string,
    level: 1 | 2 | 3 | 4 | 5 | 6    
    className:string
}

export const Header: FC<HeaderProps> = function({ text, level,className }) {
    const Tag = "h" + level as `h${typeof level}`;
    return (<Tag className={className}>{text}</Tag>);
};