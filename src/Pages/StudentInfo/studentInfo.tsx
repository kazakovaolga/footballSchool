//scss
import "./index.scss";
//assets
import team from "../../../assets/team.jpg";
import back from "../../../assets/back.gif";
//react
import React, { FC } from "react";
import { Navigate,Link } from "react-router-dom";
//hooks&store
import { removeUser ,setUser} from "../../store/slices/userSlice";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { useAuth } from "../../hooks/use-auth";
//components
import { Header } from "../../components/Header";

export const StudentInfo: FC = function () {
    const tokenString = sessionStorage.getItem("user") as string;
    const userToken = JSON.parse(tokenString);
    if (!userToken) return <Navigate to='/login' />;

    const dispatch = useAppDispatch();
    dispatch(setUser({
        email: userToken.email,
        id: userToken.id,
        token: userToken.token
    }));
    const { isAuth, email } = useAuth();  
    return isAuth ? (
        <div className="studentInfo">
            <img className="studentInfo__logo" src={team} />
            <button
                onClick={() => { dispatch(removeUser()); sessionStorage.clear(); }}
            >
                Logaut from {email}
            </button>
            <Header className="header" level={3} text="Информация" />
            <table className="studentInfo__table">
                <thead>
                    <tr>
                        <th>Город</th>
                        <th>Клуб</th>
                        <th>Команда</th>
                        <th>Тренер</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Нижний Новгород</td>
                        <td>ФОК "Северная Звезда"</td>
                        <td>Soccer</td>
                        <td>Сухов Дмитрий</td>
                    </tr>
                </tbody>
            </table>
            <p className="studentInfo__back">
                <Link to="/studentsList">
                    <img className="backImg" src={back} />
                </Link>
            </p>
        </div>
    ) : (
        <Navigate to='/login' />
    );
};