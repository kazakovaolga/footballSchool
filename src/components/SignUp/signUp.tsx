//scss
import "./index.scss";
//react
import { FC } from "react";
import { useNavigate } from "react-router-dom";
//firebase
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
//hooks&store
import { setUser } from "../../store/slices/userSlice";
import { useAppDispatch } from "../../hooks/redux-hooks";
//components
import { Form } from "../Form/form";

export const SignUp:FC = function () {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleRegister = function (email: string, password: string) {        
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                    role:null
                }));
                sessionStorage.setItem("user", JSON.stringify({ email: email, id: user.uid, token: user.refreshToken }));
                const docRef = async function () {
                    return await addDoc(collection(db, "privileges"), {
                        email: email,
                        role: "parent"
                    });
                };
                docRef();                
                navigate("/login");
            })
            .catch(() => {
                alert("Пользователь уже зарегистрирован!");
                navigate("/login");
            });
    };
    return (<Form
        title="Зарегистрируйтесь"
        handleClick={handleRegister}
    />);
};