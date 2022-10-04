//scss
import "./index.scss";
//react
import React, { FC } from "react";

interface NavigationProps{
    children:React.ReactNode
}

export const Navigation:FC<NavigationProps>=function ({children}) {   
    return (
        <>
            <nav className='navigation'                
            >               
            {children}
            </nav>
        </>
    );
};