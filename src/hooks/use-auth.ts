import { useAppSelector } from "./redux-hooks";

export function useAuth(){
    const {email,token,id,role}=useAppSelector(state=>state.user);
    console.log("useAuth=",email,token,id,role);
    return {
        isAuth: !!email,
        email,
        token,
        id,   
        role     
    };
}