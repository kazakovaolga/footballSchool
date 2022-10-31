//scss
import "./index.scss";
//react
import React, { FC } from "react";

interface ContactsProps {
    href: string
    src: string    
}

export const Contacts: FC<ContactsProps> = function ({ href, src }) {
    return <>
        <div className="footer__div">
            <p>
                <a href={href}>
                    <img src={src} />
                </a>                
            </p>
        </div>
    </>;
};