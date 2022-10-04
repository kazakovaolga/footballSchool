//scss
import "./index.scss";
//assets
import logo from "../../../assets/emblem.jpg";
//react
import React, { FC, useEffect } from "react";
import {useNavigate, Navigate } from "react-router-dom";
//hooks&store
import { setUser } from "../../store/slices/userSlice";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { useAuth } from "../../hooks/use-auth";
import { store } from "../../store/store";
//components
import { Header } from "../../components/Header";
import { Emblem } from "../../components/Emblem";
import { Navigation } from "../../components/Navigation";
import { AddStudentForm } from "../../components/AddStudentForm/addStudentForm";
import { List4Trainer } from "../../components/List4Trainer";
import { StudentListControl } from "../../components/StudentListControl/studentListControl";
//firestore
import { collection, doc, getDocs,deleteDoc  } from "firebase/firestore";
import { db } from "../../firebase";

export const StudentsListControl: FC = function () { 
    const navigate = useNavigate();  
    
    useEffect(() => {   
        const divStudentsList=document.querySelector(".studentsListControl") as HTMLElement;  
        divStudentsList.innerHTML="";   
        try {
            const querySnapshot = async function () {
                return await getDocs(collection(db, "studentsList"));
            };            
            querySnapshot().then(
                (result) => {
                    result.forEach(
                        (el) => {                                                        
                            divStudentsList.innerHTML=divStudentsList?.innerHTML+StudentListControl(el.data(),el.id);       
                            (document.querySelector(`.btn${el.id}`) as HTMLElement).addEventListener("click",()=>{                                
                                const delStudent=async ()=>{ await deleteDoc(doc(db, "studentsList", el.id));};
                                delStudent();                                                
                                navigate("/studentsListControl");
                            });
                        }
                    );
                }
            );            
        }
        catch (e) {
            console.error("Error reading students list: ", e);
        }        
    });

    const dispatch = useAppDispatch();
    const tokenString = sessionStorage.getItem("user") as string;
    const userToken = JSON.parse(tokenString);
    if (!userToken) return <Navigate to='/login' />;

    dispatch(setUser({
        email: userToken.email,
        id: userToken.id,
        token: userToken.token
    }));

    console.log(store.getState());
    const { isAuth, email } = useAuth();

    return isAuth ? (
        <>
            <Header className="header" level={1} text="Детская Академия Футбола" />
            <Emblem src={logo} className='emblem' />
            <Navigation><List4Trainer /></Navigation>
            <Header className="header" level={3} text="Список учеников" />
            <div className="studentsListControl">               
            </div>
            <br/><br/>
            <AddStudentForm/>
        </>
    ) : (
        <Navigate to='/login' />
    );
};