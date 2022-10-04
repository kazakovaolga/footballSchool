//scss
import "./index.scss";
//react
import { FC, useState } from "react";

interface FormProps {
    title:string
    handleClick:(email:string,pass:string)=>void
}

export const Form :FC<FormProps>= function ({ title, handleClick }) {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    return <>
        <input
            className="loginFormInput"
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); }}
            placeholder="email"
        />
        <br/>
        <input
            className="loginFormInput"
            type="password"
            value={pass}
            onChange={(e) => { setPass(e.target.value); }}
            placeholder="password"
        />
        <br/>
        <button
            className="loginFormButton"
            onClick={()=>handleClick(email,pass)}
        >
            {title}
        </button>
    </>;
};