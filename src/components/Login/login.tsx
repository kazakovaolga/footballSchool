//react
import { useNavigate } from "react-router-dom";
import { FC } from "react";
//hooks&store
import { setUser } from "../../store/slices/userSlice";
import { useAppDispatch } from "../../hooks/redux-hooks";
//firebase
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
//components
import { Form } from "../Form/form";

export const Login: FC<any> = function ({ title, handleClick }) {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleLogin = function (email: string, password: string) {        
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                    role: null
                })
                );
                sessionStorage.setItem("user", JSON.stringify({ email: email, id: user.uid, token: user.refreshToken }));
                navigate("/");
            })
            .catch(() => { alert("Не верное имя пользователя или пароль!"); });               
    };
    return <>
        <Form
            title="Войти"
            handleClick={handleLogin}
        />
    </>;
};