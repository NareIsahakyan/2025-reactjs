import { createContext, useCallback, useEffect, useState } from "react";
import { getMe } from "../services/api/auth";
import { api } from "../services/api/api";


const AuthContext=createContext();
export default AuthContext;

export const AuthProvider = ({children})=>{
    const [user,setUser]= useState(null);
    const [isAutorization, setIsAutorization]= useState(false);
    const login = useCallback((user,accessToken) =>  {
        localStorage.setItem("accessToken", accessToken);
        setUser(user);
        setIsAutorization(true);
        api.defaults.headers.common["Autorization"] = `Bearer ${accessToken}`;
    },[]);

    const logout = useCallback((user) =>  {
        setUser(null);
        setIsAutorization(false);
        localStorage.removeItem("accessToken");
        delete api.defaults.headers.common["Autorization"] ;
    },[]);

    useEffect(()=>{
        const accessToken = localStorage.getItem('accessToken');
        if(accessToken){
            api.defaults.headers.common["Autorization"] = `Bearer ${accessToken}`;
            getMe().then(data=>{
                setUser(data.result);
            }).catch(error =>{
                console.log(error);
            })
            setIsAutorization(true);
        }
    },[]);

    return <AuthContext.Provider value = {{
        user,
        login,
        isAutorization,
        logout
    }}>
        {children}
    </AuthContext.Provider>;
};